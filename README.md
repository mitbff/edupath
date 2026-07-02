# EduPath 智能导学 Agent

EduPath 是一个面向“智慧教育”期末大作业的全栈演示系统。系统围绕“在线答题 → 错因诊断 → 知识追踪 → 知识图谱 → 个性化推荐 → 教师干预”构建学习诊断闭环。

当前版本已经从静态原型升级为 **FastAPI + SQLite + ECharts** 的轻量全栈版：后端托管前端页面，前端优先从后端读取场景、题库、知识图谱和资源库，提交诊断后会把作答日志、诊断结果和掌握度快照写入 SQLite。

## 项目选题

题目：

**EduPath 智能导学 Agent：面向多课程场景的知识图谱驱动学情诊断系统**

可参考的正式论文式题目：

**面向智慧教育的知识图谱驱动学情诊断与个性化学习路径推荐系统设计与实现**

## 系统架构

```text
浏览器前端
  ├─ 在线答题
  ├─ 学生诊断报告
  ├─ 教师学情看板
  ├─ 知识图谱可视化
  └─ 技术实现页

FastAPI 后端
  ├─ 场景配置 API
  ├─ 题库 API
  ├─ 诊断 API
  ├─ 教师看板 API
  └─ 前端静态文件托管

SQLite 数据库
  ├─ 课程场景
  ├─ 知识点与图谱边
  ├─ 题库与选项
  ├─ 作答日志
  ├─ 诊断记录
  └─ 掌握度快照
```

## 技术栈

### 前端

- **HTML / CSS / JavaScript**
  - 实现系统页面、导航切换、答题交互、诊断报告和教师看板。
  - 保留纯静态运行能力，后端不可用时仍可演示。

- **ECharts**
  - 绘制知识图谱、雷达图、热力图、柱状图和错因排行。
  - 用于体现“学习数据可视化”和“教师端学情分析”。

- **Fetch API**
  - 前端启动时请求 `/api/bootstrap` 加载后端场景配置。
  - 提交答题时请求 `/api/diagnosis` 保存诊断结果。

### 后端

- **Python FastAPI**
  - 提供 REST API。
  - 托管前端页面，访问 `http://127.0.0.1:8000` 即可打开系统。
  - 自动生成接口文档，访问 `http://127.0.0.1:8000/docs` 查看。

- **Uvicorn**
  - 作为 FastAPI 的 ASGI 运行服务器。

- **Pydantic**
  - 校验前端提交的诊断请求数据结构。

- **CORS Middleware**
  - 支持本地 `file://` 打开的前端请求后端接口。

### 数据库

- **SQLite**
  - 保存场景、知识点、题库、选项、作答日志、诊断记录和掌握度快照。
  - 首次启动后端时自动创建 `backend/edupath.db`。

### 算法与智能模块

- **知识追踪 Knowledge Tracing**
  - 使用简化 BKT 思路更新知识点掌握度。

- **错因诊断**
  - 每道题绑定知识点、难度、正确答案和错因标签。

- **知识图谱**
  - 用节点和边表示知识点依赖关系。

- **个性化推荐**
  - 根据最薄弱知识点推荐微课、例题、巩固题和错题复盘任务。

- **可插拔 AI 生成层**
  - 默认使用本地规则模板生成学习建议、练习提示和教师干预建议，保证离线也能演示。
  - 前端提供“AI 增强”开关；后端检测到 API Key 后可调用 OpenAI-compatible 大模型接口。
  - 大模型只负责把结构化诊断结果转成自然语言建议，核心诊断仍由知识追踪和错因规则完成。

## 已实现功能

- 多课程场景配置：数学导数、英语阅读、Python 编程。
- 在线答题：记录学生答案、正确率、答题用时。
- 错因诊断：输出逐题错因解释。
- 知识图谱：薄弱节点会根据诊断结果变色。
- 知识追踪：动态更新每个知识点掌握度。
- 学生报告：展示掌握度雷达图、学习建议、推荐资源和练习任务。
- AI 增强开关：支持“规则模板 / 大模型增强 / 自动降级”三种模式。
- 高级诊断 Agent：生成诊断证据链、自适应下一题策略、资源匹配理由。
- 教师看板：展示班级热力图、错因排行、学生分层和教学建议。
- 风险预警：根据分数、薄弱点和分层标签生成干预优先级。
- 后端持久化：保存作答日志、诊断记录、掌握度快照。

## 支持的应用场景

```text
1. 高一数学 · 导数单元
   函数基础 → 极限思想 → 导数定义 → 单调性 → 极值应用 → 导数应用

2. 高中英语 · 阅读理解
   词汇识别 → 语境推断 → 长难句分析 → 信息定位 → 主旨概括

3. Python 编程 · 入门项目
   变量与类型 → 条件分支 → 循环结构 → 函数封装 → 调试思维 → 项目应用
```

这三个场景共用同一套诊断流程，只替换题库、知识图谱、资源库和学生数据，因此可以扩展到更多课程。

## 核心算法

### 1. 知识点掌握度更新

```text
新掌握度 = 旧掌握度 × 0.7 + 本次表现 × 0.3
```

### 2. 本次表现分

```text
表现分 = 正确率 × 0.5 + 难度系数 × 0.2 + 稳定性 × 0.3
```

### 3. 答题稳定性

```text
稳定性 = 100 - |平均答题时间 - 预期答题时间| × 2
```

### 4. 错因标签

- 概念不清
- 公式误用
- 审题偏差
- 计算失误
- 方法选择不当
- 未作答

## 后端接口

当前已实现接口：

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

关键接口说明：

- `/api/bootstrap`
  - 返回前端所需的完整场景配置。
  - 包括场景信息、知识点、图谱边、题库、选项、资源库。

- `/api/diagnosis`
  - 接收学生作答结果。
  - 计算正确率、错因统计、薄弱知识点和掌握度更新。
  - 当请求体中 `ai_enabled` 为 `true` 时，尝试调用大模型生成 `ai_report`；如果没有配置 API Key，会自动降级为规则模板。
  - 写入作答日志、诊断记录和掌握度快照。

- `/api/ai/status`
  - 返回后端是否已经配置大模型 API Key、当前模型名和 AI 生成层状态。

- `/api/dashboard/{scenario_id}`
  - 返回教师端看板需要的班级诊断数据。

## 数据库表

SQLite 数据库文件：

```text
backend/edupath.db
```

主要数据表：

```text
scenarios
- 课程场景信息

knowledge_nodes
- 知识点节点、初始掌握度、说明

knowledge_edges
- 知识点之间的前置依赖关系

questions
- 题干、答案、难度、知识点、错因标签

question_options
- 每道题的选项文本和错误原因

resources
- 微课、例题、巩固题、错题复盘资源

diagnoses
- 每次诊断的总体结果

answer_logs
- 学生每道题的作答记录

mastery_snapshots
- 每次诊断后的知识点掌握度快照
```

## 运行方式

### 方式一：全栈版运行

进入后端目录：

```powershell
cd ……\edupath-demo\backend
pip install -r requirements.txt
python -m uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

打开系统：

```text
http://127.0.0.1:8000
```

查看 API 文档：

```text
http://127.0.0.1:8000/docs
```

### 可选：开启真实大模型增强

不配置 API Key 时，系统仍然完整可用，AI 建议由规则模板生成。

如果要让“AI 增强”开关真正调用大模型，在启动后端前设置环境变量：

```powershell
$env:OPENAI_API_KEY="你的 API Key"
$env:OPENAI_MODEL="gpt-4o-mini"
python -m uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

如果使用兼容 OpenAI Chat Completions 的其他服务，可以额外设置：

```powershell
$env:OPENAI_BASE_URL="https://你的服务地址/v1"
```

前端打开“AI 增强”后，`POST /api/diagnosis` 会携带 `ai_enabled: true`，后端返回 `ai_report`：

```json
{
  "mode": "llm",
  "provider": "OpenAI-compatible",
  "advice": "面向学生的学习建议",
  "teacher_suggestion": "面向教师的教学建议",
  "practice_prompt": "下一组练习生成提示"
}
```

### 方式二：静态版运行

直接双击：

```text
index.html
```

如果没有启动后端，系统会自动降级为前端内置规则引擎。静态版适合快速演示或部署到 GitHub Pages / Netlify。

## 部署说明

### 前端公网部署

- GitHub Pages
- Netlify
- Vercel

### 后端部署

- Render
- Railway
- 云服务器

也可以：

```text
公网前端 + 本地 FastAPI 后端演示 API 文档
```

## 演示流程

推荐答辩演示顺序：

1. 启动 FastAPI 后端。
2. 打开 `http://127.0.0.1:8000`。
3. 在“技术实现”页展示数据来源为 FastAPI + SQLite。
4. 切换不同课程场景，说明系统是多场景可配置平台。
5. 进入“智能答题”，点击“填入演示答案”。
6. 提交诊断，展示学生报告。
7. 展示知识图谱节点颜色变化。
8. 展示高级诊断 Agent 的证据链、自适应下一题和资源匹配理由。
9. 展示教师看板的错因排行、风险预警和分层作业。
10. 打开 `http://127.0.0.1:8000/docs` 展示后端 API。

## 创新点

- 从“只给分数”升级为“错因解释 + 学习路径 + 教师干预”。
- 从“单一课程 demo”升级为“多课程场景可配置平台”。
- 用知识图谱表达知识点之间的依赖关系。
- 用简化知识追踪算法动态更新掌握度。
- 用证据链解释诊断来源，降低 AI 黑箱感。
- 采用“规则诊断 + 可选大模型表达增强”的混合 AI 架构，避免系统变成简单套壳。
- 用自适应出题策略控制下一题难度。
- 同时覆盖学生端和教师端，体现个性化学习与精准教学。
- 提供 FastAPI + SQLite 后端，使系统具备真实接口和数据持久化能力。

## 项目文件结构

```text
edupath-demo/
├─ index.html              前端页面
├─ styles.css              前端样式
├─ app.js                  前端交互、可视化、降级规则引擎
├─ README.md               项目说明
├─ DEPLOY.md               部署说明
└─ backend/
   ├─ main.py              FastAPI 后端与 SQLite 逻辑
   ├─ llm_service.py       AI 开关、大模型调用与规则降级逻辑
   ├─ requirements.txt     Python 依赖
   ├─ start_backend.ps1    Windows 启动脚本
   └─ README.md            后端说明
```
