from __future__ import annotations

from datetime import datetime
from pathlib import Path
from typing import Any
from uuid import uuid4

import sqlite3
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


DB_PATH = Path(__file__).with_name("edupath.db")


SCENARIOS: dict[str, dict[str, Any]] = {
    "math": {
        "title": "高一数学 · 导数单元",
        "subject": "数学",
        "unit": "导数单元",
        "description": "函数、极限、导数定义、单调性、极值应用构成的诊断场景。",
        "nodes": [
            ("function", "函数基础", 84, "一次函数、斜率和图像理解。"),
            ("limit", "极限思想", 72, "理解逼近思想和基本极限。"),
            ("definition", "导数定义", 58, "理解增量比值与切线斜率。"),
            ("monotonic", "单调性", 63, "用导数符号判断函数变化。"),
            ("extreme", "极值应用", 48, "判断驻点、极值点与最值。"),
            ("application", "导数应用", 42, "将实际问题转化为最优化模型。"),
        ],
        "edges": [
            ("function", "limit"),
            ("limit", "definition"),
            ("definition", "monotonic"),
            ("monotonic", "extreme"),
            ("extreme", "application"),
            ("definition", "application"),
        ],
        "questions": [
            ("q1", "function", "已知函数 y = 2x + 1，下列说法正确的是？", "C", 0.35, "概念不清"),
            ("q2", "limit", "当 x 趋近于 0 时，sin x / x 的极限是？", "B", 0.52, "审题偏差"),
            ("q3", "definition", "函数 f(x) 在 x0 处导数定义的关键式子是？", "A", 0.66, "公式误用"),
            ("q4", "definition", "导数的几何意义通常表示为？", "D", 0.70, "概念不清"),
            ("q5", "monotonic", "若 f'(x) 始终大于 0，则函数通常是？", "B", 0.62, "公式误用"),
            ("q6", "extreme", "求函数极值的一般步骤，最合理的是？", "C", 0.76, "方法选择不当"),
            ("q7", "application", "用导数解决实际最优化问题时，第一步通常应该是？", "A", 0.86, "审题偏差"),
            ("q8", "application", "已得收益函数 R(x)，寻找最大收益最合适的操作是？", "D", 0.90, "计算失误"),
        ],
    },
    "english": {
        "title": "高中英语 · 阅读理解",
        "subject": "英语",
        "unit": "阅读理解",
        "description": "词汇、语境、长难句、信息定位和主旨概括构成的阅读能力诊断场景。",
        "nodes": [
            ("vocab", "词汇识别", 76, "核心词汇与派生词识别。"),
            ("context", "语境推断", 55, "根据上下文判断隐含意义。"),
            ("syntax", "长难句分析", 50, "识别主干、从句和修饰成分。"),
            ("locating", "信息定位", 68, "定位原文证据和关键词替换。"),
            ("mainidea", "主旨概括", 46, "提炼段落和全文中心。"),
        ],
        "edges": [
            ("vocab", "context"),
            ("context", "syntax"),
            ("syntax", "locating"),
            ("locating", "mainidea"),
            ("context", "mainidea"),
        ],
        "questions": [
            ("q1", "vocab", "The word 'significant' is closest in meaning to:", "B", 0.45, "概念不清"),
            ("q2", "context", "看到 unexpected result 时应优先检查什么？", "C", 0.62, "审题偏差"),
            ("q3", "syntax", "分析长难句最有效的第一步通常是？", "A", 0.72, "方法选择不当"),
            ("q4", "locating", "细节题中出现 except 时最需要注意什么？", "D", 0.58, "审题偏差"),
            ("q5", "mainidea", "选择文章主旨时最应该避免的是？", "C", 0.82, "方法选择不当"),
            ("q6", "mainidea", "最佳标题题中正确选项通常具有什么特点？", "A", 0.88, "公式误用"),
        ],
    },
    "python": {
        "title": "Python 编程 · 入门项目",
        "subject": "编程",
        "unit": "入门项目",
        "description": "变量、分支、循环、函数、调试与项目拆解构成的编程能力诊断场景。",
        "nodes": [
            ("variable", "变量与类型", 78, "变量声明与类型转换。"),
            ("branch", "条件分支", 65, "if 条件和边界值判断。"),
            ("loop", "循环结构", 52, "循环变量与终止条件。"),
            ("function", "函数封装", 44, "参数、返回值和模块化。"),
            ("debug", "调试思维", 48, "根据报错定位问题。"),
            ("project", "项目应用", 40, "把综合任务拆成模块。"),
        ],
        "edges": [
            ("variable", "branch"),
            ("branch", "loop"),
            ("loop", "function"),
            ("function", "project"),
            ("debug", "project"),
            ("variable", "debug"),
        ],
        "questions": [
            ("q1", "variable", "Python 中 input() 默认返回的数据类型是？", "B", 0.40, "概念不清"),
            ("q2", "branch", "判断成绩是否及格，最直接的条件表达式是？", "A", 0.55, "审题偏差"),
            ("q3", "loop", "for i in range(3) 会让 i 依次取哪些值？", "D", 0.70, "公式误用"),
            ("q4", "function", "函数中 return 的主要作用是？", "C", 0.78, "概念不清"),
            ("q5", "debug", "程序报错 TypeError 时，最应该优先检查什么？", "A", 0.68, "方法选择不当"),
            ("q6", "project", "完成成绩统计器项目时，最合理的拆解方式是？", "B", 0.88, "方法选择不当"),
        ],
    },
}


RESOURCE_TYPES = ["微课", "例题", "巩固题", "错题复盘"]


class AnswerItem(BaseModel):
    question_id: str
    selected_answer: str


class DiagnosisRequest(BaseModel):
    scenario_id: str
    student_id: str = "demo-student"
    elapsed_seconds: int = 0
    answers: list[AnswerItem]


def connect() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db() -> None:
    with connect() as conn:
        conn.executescript(
            """
            CREATE TABLE IF NOT EXISTS scenarios (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                subject TEXT NOT NULL,
                unit TEXT NOT NULL,
                description TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS knowledge_nodes (
                id TEXT NOT NULL,
                scenario_id TEXT NOT NULL,
                name TEXT NOT NULL,
                initial_mastery INTEGER NOT NULL,
                note TEXT NOT NULL,
                PRIMARY KEY (scenario_id, id)
            );
            CREATE TABLE IF NOT EXISTS knowledge_edges (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                scenario_id TEXT NOT NULL,
                source_id TEXT NOT NULL,
                target_id TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS questions (
                id TEXT NOT NULL,
                scenario_id TEXT NOT NULL,
                knowledge_id TEXT NOT NULL,
                stem TEXT NOT NULL,
                answer TEXT NOT NULL,
                difficulty REAL NOT NULL,
                error_tag TEXT NOT NULL,
                PRIMARY KEY (scenario_id, id)
            );
            CREATE TABLE IF NOT EXISTS resources (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                scenario_id TEXT NOT NULL,
                knowledge_id TEXT NOT NULL,
                type TEXT NOT NULL,
                title TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS diagnoses (
                id TEXT PRIMARY KEY,
                scenario_id TEXT NOT NULL,
                student_id TEXT NOT NULL,
                accuracy INTEGER NOT NULL,
                weakest_node TEXT NOT NULL,
                created_at TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS answer_logs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                diagnosis_id TEXT NOT NULL,
                scenario_id TEXT NOT NULL,
                student_id TEXT NOT NULL,
                question_id TEXT NOT NULL,
                selected_answer TEXT NOT NULL,
                is_correct INTEGER NOT NULL,
                elapsed_seconds INTEGER NOT NULL,
                created_at TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS mastery_snapshots (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                diagnosis_id TEXT NOT NULL,
                scenario_id TEXT NOT NULL,
                student_id TEXT NOT NULL,
                knowledge_id TEXT NOT NULL,
                old_mastery INTEGER NOT NULL,
                new_mastery INTEGER NOT NULL,
                performance INTEGER NOT NULL
            );
            """
        )
        count = conn.execute("SELECT COUNT(*) AS c FROM scenarios").fetchone()["c"]
        if count:
            return
        seed_db(conn)


def seed_db(conn: sqlite3.Connection) -> None:
    for scenario_id, data in SCENARIOS.items():
        conn.execute(
            "INSERT INTO scenarios VALUES (?, ?, ?, ?, ?)",
            (scenario_id, data["title"], data["subject"], data["unit"], data["description"]),
        )
        conn.executemany(
            "INSERT INTO knowledge_nodes VALUES (?, ?, ?, ?, ?)",
            [(node_id, scenario_id, name, mastery, note) for node_id, name, mastery, note in data["nodes"]],
        )
        conn.executemany(
            "INSERT INTO knowledge_edges (scenario_id, source_id, target_id) VALUES (?, ?, ?)",
            [(scenario_id, source, target) for source, target in data["edges"]],
        )
        conn.executemany(
            "INSERT INTO questions VALUES (?, ?, ?, ?, ?, ?, ?)",
            [(qid, scenario_id, kid, stem, answer, difficulty, error_tag) for qid, kid, stem, answer, difficulty, error_tag in data["questions"]],
        )
        resources = []
        for node_id, name, *_ in data["nodes"]:
            for resource_type in RESOURCE_TYPES:
                resources.append((scenario_id, node_id, resource_type, f"{name}{resource_type}"))
        conn.executemany(
            "INSERT INTO resources (scenario_id, knowledge_id, type, title) VALUES (?, ?, ?, ?)",
            resources,
        )


def get_current_mastery(conn: sqlite3.Connection, scenario_id: str, student_id: str) -> dict[str, int]:
    nodes = conn.execute(
        "SELECT id, initial_mastery FROM knowledge_nodes WHERE scenario_id = ?",
        (scenario_id,),
    ).fetchall()
    mastery = {row["id"]: row["initial_mastery"] for row in nodes}
    latest = conn.execute(
        """
        SELECT knowledge_id, new_mastery
        FROM mastery_snapshots
        WHERE scenario_id = ? AND student_id = ?
        ORDER BY id ASC
        """,
        (scenario_id, student_id),
    ).fetchall()
    for row in latest:
        mastery[row["knowledge_id"]] = row["new_mastery"]
    return mastery


def clamp(value: float, low: int, high: int) -> int:
    return max(low, min(high, round(value)))


init_db()

app = FastAPI(title="EduPath API", version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok", "database": str(DB_PATH)}


@app.get("/api/scenarios")
def list_scenarios() -> list[dict[str, Any]]:
    with connect() as conn:
        return [dict(row) for row in conn.execute("SELECT * FROM scenarios ORDER BY id").fetchall()]


@app.get("/api/scenarios/{scenario_id}")
def get_scenario(scenario_id: str) -> dict[str, Any]:
    with connect() as conn:
        scenario = conn.execute("SELECT * FROM scenarios WHERE id = ?", (scenario_id,)).fetchone()
        if not scenario:
            raise HTTPException(status_code=404, detail="Scenario not found")
        nodes = conn.execute("SELECT * FROM knowledge_nodes WHERE scenario_id = ?", (scenario_id,)).fetchall()
        edges = conn.execute("SELECT source_id, target_id FROM knowledge_edges WHERE scenario_id = ?", (scenario_id,)).fetchall()
        return {
            **dict(scenario),
            "nodes": [dict(row) for row in nodes],
            "edges": [dict(row) for row in edges],
        }


@app.get("/api/questions/{scenario_id}")
def list_questions(scenario_id: str) -> list[dict[str, Any]]:
    with connect() as conn:
        return [
            dict(row)
            for row in conn.execute(
                "SELECT * FROM questions WHERE scenario_id = ? ORDER BY id",
                (scenario_id,),
            ).fetchall()
        ]


@app.post("/api/diagnosis")
def diagnose(payload: DiagnosisRequest) -> dict[str, Any]:
    with connect() as conn:
        scenario = conn.execute("SELECT * FROM scenarios WHERE id = ?", (payload.scenario_id,)).fetchone()
        if not scenario:
            raise HTTPException(status_code=404, detail="Scenario not found")

        question_rows = conn.execute(
            "SELECT * FROM questions WHERE scenario_id = ?",
            (payload.scenario_id,),
        ).fetchall()
        questions = {row["id"]: dict(row) for row in question_rows}
        answers = {item.question_id: item.selected_answer for item in payload.answers}
        details = []
        error_counts: dict[str, int] = {}

        for question_id, question in questions.items():
            selected = answers.get(question_id, "")
            is_correct = selected == question["answer"]
            if not is_correct:
                error_counts[question["error_tag"]] = error_counts.get(question["error_tag"], 0) + 1
            details.append({**question, "selected_answer": selected, "is_correct": is_correct})

        total = len(questions) or 1
        correct = sum(1 for item in details if item["is_correct"])
        accuracy = round(correct / total * 100)
        average_time = payload.elapsed_seconds / total if payload.elapsed_seconds else 45
        expected_time = sum(32 + item["difficulty"] * 42 for item in details) / total
        stability = clamp(100 - abs(average_time - expected_time) * 2, 45, 100)
        current_mastery = get_current_mastery(conn, payload.scenario_id, payload.student_id)

        node_rows = conn.execute(
            "SELECT id, name, initial_mastery FROM knowledge_nodes WHERE scenario_id = ?",
            (payload.scenario_id,),
        ).fetchall()
        updated_nodes = []
        diagnosis_id = str(uuid4())[:8]

        for node in node_rows:
            related = [item for item in details if item["knowledge_id"] == node["id"]]
            old_mastery = current_mastery[node["id"]]
            if related:
                node_correct = sum(1 for item in related if item["is_correct"])
                node_accuracy = node_correct / len(related)
                difficulty_score = sum(item["difficulty"] for item in related) / len(related) * 100 * node_accuracy
                performance = node_accuracy * 50 + difficulty_score * 0.2 + stability * 0.3
                new_mastery = clamp(old_mastery * 0.7 + performance * 0.3, 20, 96)
            else:
                performance = old_mastery
                new_mastery = old_mastery

            updated_nodes.append({"id": node["id"], "name": node["name"], "mastery": new_mastery})
            conn.execute(
                """
                INSERT INTO mastery_snapshots
                (diagnosis_id, scenario_id, student_id, knowledge_id, old_mastery, new_mastery, performance)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                """,
                (diagnosis_id, payload.scenario_id, payload.student_id, node["id"], old_mastery, new_mastery, round(performance)),
            )

        weakest = min(updated_nodes, key=lambda item: item["mastery"])
        now = datetime.now().isoformat(timespec="seconds")
        conn.execute(
            "INSERT INTO diagnoses VALUES (?, ?, ?, ?, ?, ?)",
            (diagnosis_id, payload.scenario_id, payload.student_id, accuracy, weakest["name"], now),
        )
        conn.executemany(
            """
            INSERT INTO answer_logs
            (diagnosis_id, scenario_id, student_id, question_id, selected_answer, is_correct, elapsed_seconds, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """,
            [
                (
                    diagnosis_id,
                    payload.scenario_id,
                    payload.student_id,
                    item["id"],
                    item["selected_answer"],
                    1 if item["is_correct"] else 0,
                    payload.elapsed_seconds,
                    now,
                )
                for item in details
            ],
        )

        recommendations = [
            dict(row)
            for row in conn.execute(
                "SELECT type, title FROM resources WHERE scenario_id = ? AND knowledge_id = ? LIMIT 4",
                (payload.scenario_id, weakest["id"]),
            ).fetchall()
        ]

        return {
            "diagnosis_id": diagnosis_id,
            "scenario_id": payload.scenario_id,
            "accuracy": accuracy,
            "stability": stability,
            "weakest_node": weakest,
            "error_counts": error_counts,
            "updated_nodes": updated_nodes,
            "recommendations": recommendations,
            "created_at": now,
        }


@app.get("/api/dashboard/{scenario_id}")
def class_dashboard(scenario_id: str) -> dict[str, Any]:
    with connect() as conn:
        scenario = conn.execute("SELECT * FROM scenarios WHERE id = ?", (scenario_id,)).fetchone()
        if not scenario:
            raise HTTPException(status_code=404, detail="Scenario not found")
        diagnoses = conn.execute(
            "SELECT * FROM diagnoses WHERE scenario_id = ? ORDER BY created_at DESC LIMIT 10",
            (scenario_id,),
        ).fetchall()
        logs = conn.execute(
            "SELECT is_correct FROM answer_logs WHERE scenario_id = ?",
            (scenario_id,),
        ).fetchall()
        accuracy = round(sum(row["is_correct"] for row in logs) / len(logs) * 100) if logs else None
        return {
            "scenario": dict(scenario),
            "recent_diagnoses": [dict(row) for row in diagnoses],
            "class_accuracy": accuracy,
            "diagnosis_count": len(diagnoses),
        }
