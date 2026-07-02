from __future__ import annotations

import json
import os
from typing import Any
from urllib import error, request


DEFAULT_BASE_URL = "https://api.openai.com/v1"
DEFAULT_MODEL = "gpt-4o-mini"
TIMEOUT_SECONDS = 8


def _get_api_key() -> str:
    return os.getenv("OPENAI_API_KEY") or os.getenv("LLM_API_KEY") or ""


def _get_base_url() -> str:
    return (os.getenv("OPENAI_BASE_URL") or os.getenv("LLM_BASE_URL") or DEFAULT_BASE_URL).rstrip("/")


def _get_model() -> str:
    return os.getenv("OPENAI_MODEL") or os.getenv("LLM_MODEL") or DEFAULT_MODEL


def get_ai_status() -> dict[str, Any]:
    configured = bool(_get_api_key())
    return {
        "enabled": configured,
        "configured": configured,
        "provider": "OpenAI-compatible" if configured else "Local rule template",
        "model": _get_model() if configured else "rule-template",
        "mode": "llm-ready" if configured else "rule-only",
        "detail": "已配置 API Key，可在前端打开 AI 增强。" if configured else "未配置 API Key，默认使用本地规则模板。",
    }


def _top_error(error_counts: dict[str, int]) -> str:
    if not error_counts:
        return "暂无明显错因"
    return sorted(error_counts.items(), key=lambda item: item[1], reverse=True)[0][0]


def build_rule_report(
    *,
    scenario: dict[str, Any],
    accuracy: int,
    stability: int,
    weakest: dict[str, Any],
    error_counts: dict[str, int],
    recommendations: list[dict[str, Any]],
) -> dict[str, Any]:
    top_error = _top_error(error_counts)
    resource_text = "、".join(item["title"] for item in recommendations[:3]) or "对应微课和基础练习"
    subject = scenario.get("subject", "当前课程")
    unit = scenario.get("unit", "当前单元")
    weakest_name = weakest.get("name", "薄弱知识点")

    advice = (
        f"本次{subject}诊断正确率为 {accuracy}%，答题稳定性为 {stability}%。"
        f"系统优先定位到“{weakest_name}”，主要错因集中在“{top_error}”。"
        f"建议先用 8-10 分钟复习“{weakest_name}”的核心规则，再完成资源“{resource_text}”，"
        "最后用一道综合题检查能否把条件识别、方法选择和步骤执行连起来。"
    )
    teacher_suggestion = (
        f"下一节课建议围绕“{weakest_name}”做小切口讲解：先展示一题典型错误，"
        f"再让学生标注错因“{top_error}”，最后按基础组、提升组、冲刺组布置不同难度的任务。"
    )
    practice_prompt = (
        f"请生成 3 道{unit}练习：1 道概念确认题、1 道变式巩固题、1 道综合迁移题，"
        f"都要围绕“{weakest_name}”并要求学生写出关键依据。"
    )

    return {
        "enabled": False,
        "configured": False,
        "mode": "rule",
        "provider": "local-rule-template",
        "model": "rule-template",
        "status": "AI 增强关闭，当前使用本地规则模板。",
        "advice": advice,
        "teacher_suggestion": teacher_suggestion,
        "practice_prompt": practice_prompt,
    }


def _build_messages(
    *,
    scenario: dict[str, Any],
    accuracy: int,
    stability: int,
    weakest: dict[str, Any],
    error_counts: dict[str, int],
    recommendations: list[dict[str, Any]],
    details: list[dict[str, Any]],
) -> list[dict[str, str]]:
    mistakes = [
        {
            "question": item.get("stem"),
            "selected_answer": item.get("selected_answer") or "未作答",
            "correct_answer": item.get("answer"),
            "knowledge_id": item.get("knowledge_id"),
            "error_tag": item.get("error_tag"),
        }
        for item in details
        if not item.get("is_correct")
    ][:4]
    payload = {
        "course": scenario.get("title"),
        "subject": scenario.get("subject"),
        "unit": scenario.get("unit"),
        "accuracy": accuracy,
        "stability": stability,
        "weakest_node": weakest,
        "error_counts": error_counts,
        "recommendations": recommendations,
        "sample_mistakes": mistakes,
    }
    return [
        {
            "role": "system",
            "content": (
                "你是智慧教育系统中的学习诊断助手。请基于结构化诊断数据生成简洁、可执行、"
                "不夸张的学习建议。只输出 JSON，不要输出 Markdown。"
            ),
        },
        {
            "role": "user",
            "content": (
                "请输出三个字段：advice、teacher_suggestion、practice_prompt。"
                "advice 面向学生，teacher_suggestion 面向教师，practice_prompt 用于生成下一组练习。\n"
                + json.dumps(payload, ensure_ascii=False)
            ),
        },
    ]


def _parse_llm_json(content: str) -> dict[str, str]:
    text = content.strip()
    start = text.find("{")
    end = text.rfind("}")
    if start >= 0 and end > start:
        parsed = json.loads(text[start : end + 1])
        return {key: str(parsed.get(key, "")).strip() for key in ["advice", "teacher_suggestion", "practice_prompt"]}
    return {"advice": text, "teacher_suggestion": "", "practice_prompt": ""}


def _call_llm(messages: list[dict[str, str]]) -> dict[str, str]:
    api_key = _get_api_key()
    if not api_key:
        raise RuntimeError("missing api key")

    body = json.dumps(
        {
            "model": _get_model(),
            "messages": messages,
            "temperature": 0.35,
            "max_tokens": 520,
        },
        ensure_ascii=False,
    ).encode("utf-8")
    req = request.Request(
        f"{_get_base_url()}/chat/completions",
        data=body,
        method="POST",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
    )
    try:
        with request.urlopen(req, timeout=TIMEOUT_SECONDS) as response:
            data = json.loads(response.read().decode("utf-8"))
    except error.HTTPError as exc:
        detail = exc.read().decode("utf-8", "ignore")[:180]
        raise RuntimeError(f"HTTP {exc.code}: {detail}") from exc
    except error.URLError as exc:
        raise RuntimeError(str(exc.reason)) from exc

    content = data["choices"][0]["message"]["content"]
    return _parse_llm_json(content)


def generate_ai_report(
    *,
    ai_enabled: bool,
    scenario: dict[str, Any],
    accuracy: int,
    stability: int,
    weakest: dict[str, Any],
    error_counts: dict[str, int],
    recommendations: list[dict[str, Any]],
    details: list[dict[str, Any]],
) -> dict[str, Any]:
    report = build_rule_report(
        scenario=scenario,
        accuracy=accuracy,
        stability=stability,
        weakest=weakest,
        error_counts=error_counts,
        recommendations=recommendations,
    )
    report["enabled"] = ai_enabled

    if not ai_enabled:
        return report

    status = get_ai_status()
    if not status["configured"]:
        report.update(
            {
                "mode": "fallback",
                "status": "已打开 AI 增强，但后端未配置 API Key，已自动降级为本地规则模板。",
            }
        )
        return report

    try:
        generated = _call_llm(
            _build_messages(
                scenario=scenario,
                accuracy=accuracy,
                stability=stability,
                weakest=weakest,
                error_counts=error_counts,
                recommendations=recommendations,
                details=details,
            )
        )
        return {
            **report,
            "configured": True,
            "mode": "llm",
            "provider": status["provider"],
            "model": status["model"],
            "status": "已调用大模型生成个性化建议。",
            "advice": generated.get("advice") or report["advice"],
            "teacher_suggestion": generated.get("teacher_suggestion") or report["teacher_suggestion"],
            "practice_prompt": generated.get("practice_prompt") or report["practice_prompt"],
        }
    except Exception as exc:
        report.update(
            {
                "configured": True,
                "mode": "fallback",
                "provider": status["provider"],
                "model": status["model"],
                "status": f"大模型调用失败，已降级为本地规则模板：{str(exc)[:120]}",
            }
        )
        return report
