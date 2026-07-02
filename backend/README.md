# EduPath FastAPI 后端

这个目录提供一个轻量但真实可运行的升级版后端：

- FastAPI 提供接口
- SQLite 保存场景、知识点、题库、作答日志、掌握度快照
- FastAPI 直接托管前端页面
- 前端启动时优先从 `/api/bootstrap` 加载场景、题库、知识图谱和资源库
- 前端提交诊断时会同步到 `http://127.0.0.1:8000/api/diagnosis`
- 诊断接口支持 `ai_enabled` 开关，可在规则模板和真实大模型之间切换
- 如果后端没启动，前端会自动降级为本地规则引擎

## 安装依赖

进入 `backend` 目录：

```powershell
pip install -r requirements.txt
```

## 启动后端

```powershell
python -m uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

或运行：

```powershell
.\start_backend.ps1
```

启动成功后访问：

```text
http://127.0.0.1:8000
```

这会打开完整系统页面。

接口文档访问：

```text
http://127.0.0.1:8000/docs
```

FastAPI 会自动生成接口文档。

## 主要接口

```text
GET  /api/health
GET  /api/ai/status
GET  /api/bootstrap
GET  /api/scenarios
GET  /api/scenarios/{scenario_id}
GET  /api/questions/{scenario_id}
POST /api/diagnosis
GET  /api/dashboard/{scenario_id}
```

## 诊断接口示例

```json
{
  "scenario_id": "math",
  "student_id": "demo-student",
  "elapsed_seconds": 180,
  "ai_enabled": true,
  "answers": [
    { "question_id": "q1", "selected_answer": "C" },
    { "question_id": "q2", "selected_answer": "A" }
  ]
}
```

返回内容包含：

- 诊断记录 ID
- 正确率
- 稳定性
- 最薄弱知识点
- 错因统计
- 更新后的知识点掌握度
- 推荐资源
- `ai_report`：规则模板、大模型增强或自动降级后的学习建议

## AI 增强配置

默认不需要配置任何 Key，系统会使用本地规则模板。

如需启用真实大模型，在启动后端前设置：

```powershell
$env:OPENAI_API_KEY="你的 API Key"
$env:OPENAI_MODEL="gpt-4o-mini"
```

如果使用兼容 OpenAI Chat Completions 的第三方服务，可以设置：

```powershell
$env:OPENAI_BASE_URL="https://你的服务地址/v1"
```

前端打开“AI 增强”后，后端会尝试调用大模型；调用失败或未配置 Key 时自动返回规则模板结果，保证课堂演示不断。

## 推荐演示方式

```text
1. 启动后端
2. 打开 http://127.0.0.1:8000
3. 进入“技术实现”页，确认数据来源为 FastAPI + SQLite
4. 进入“智能答题”，填入演示答案并提交
5. 打开或关闭“AI 增强”开关，对比规则模板和 AI 报告状态
6. 回到“技术实现”页，确认后端同步 ON
7. 打开 http://127.0.0.1:8000/docs 展示接口文档
```

## 数据库

首次启动会自动生成：

```text
backend/edupath.db
```

包含这些表：

- `scenarios`
- `knowledge_nodes`
- `knowledge_edges`
- `questions`
- `resources`
- `diagnoses`
- `answer_logs`
- `mastery_snapshots`

如果想重置演示数据，关闭后端后删除 `edupath.db`，重新启动即可自动初始化。
