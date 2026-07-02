# EduPath FastAPI 后端

这个目录提供一个轻量但真实可运行的后端：

- FastAPI 提供接口
- SQLite 保存场景、知识点、题库、作答日志、掌握度快照
- 前端提交诊断时会尝试同步到 `http://127.0.0.1:8000/api/diagnosis`
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
http://127.0.0.1:8000/docs
```

FastAPI 会自动生成接口文档。

## 主要接口

```text
GET  /api/health
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
