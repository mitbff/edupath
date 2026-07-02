# EduPath 部署说明

本项目有两种使用方式：

1. 静态演示版：只部署前端，适合发给同学和老师公网访问。
2. 后端增强版：本地启动 FastAPI + SQLite，适合答辩时展示接口、数据库和作答日志。

静态演示版的核心文件为：

```text
index.html
styles.css
app.js
README.md
```

不需要后端、不需要数据库、不需要安装依赖。只要部署静态文件即可。

如果要展示真实后端，请进入：

```text
backend/
```

运行 FastAPI 服务。具体见 `backend/README.md`。

## 推荐方案一：GitHub Pages

适合：需要一个稳定公网链接，方便发给同学和老师。

步骤：

1. 登录 GitHub。
2. 新建仓库，例如 `edupath-demo`。
3. 上传 `edupath-demo` 文件夹内的所有文件。
4. 进入仓库 `Settings`。
5. 找到 `Pages`。
6. Source 选择 `Deploy from a branch`。
7. Branch 选择 `main`，目录选择 `/root`。
8. 保存后等待 1-2 分钟。
9. GitHub 会生成一个公网地址，格式类似：

```text
https://你的用户名.github.io/edupath-demo/
```

## 推荐方案二：Netlify Drop

适合：最快部署，不想配置 Git。

步骤：

1. 打开 Netlify。
2. 进入 Deploy manually / Drop 页面。
3. 把整个 `edupath-demo` 文件夹拖进去。
4. 等待上传完成。
5. Netlify 会立刻生成一个公网地址。

## 推荐方案三：Vercel

适合：后续想升级成 React / Vue 项目。

步骤：

1. 登录 Vercel。
2. 新建项目。
3. 导入 GitHub 仓库，或者上传静态项目。
4. Framework Preset 选择 `Other`。
5. Build Command 留空。
6. Output Directory 留空或填写 `.`。
7. Deploy。

## 本地发给同学使用

如果暂时不部署公网，可以把项目打包成 zip 发给同学。

同学收到后：

1. 解压 zip。
2. 双击 `index.html`。
3. 浏览器打开后即可使用。

注意：当前图表库 ECharts 使用 CDN，电脑需要能访问互联网。这里不依赖校园网。

## 演示建议

公网演示最稳，适合给同学使用：

```text
打开公网链接
→ 切换应用场景
→ 进入智能答题
→ 填入演示答案
→ 提交诊断
→ 展示学生报告、教师看板、技术实现
```

答辩展示更完整：

```text
先启动 backend/start_backend.ps1
→ 打开 http://127.0.0.1:8000/docs 展示 API 文档
→ 再打开前端 index.html
→ 提交诊断
→ 技术实现页显示“已同步后端”
```
