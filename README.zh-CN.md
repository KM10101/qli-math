# Qli Math

Qli Math 是一个面向个人长期数学学习的自托管知识库网站。它不是题库、网课平台或多人教育 SaaS，而是围绕“学习路线”组织数学知识：打开网站后，可以看到当前学习路线、继续下一个概念、记录笔记和问题，并逐步沉淀自己的数学知识花园。

## 项目定位

Qli Math 重点关注：

- 系统化的数学学习路线；
- 数学概念页：直觉、定义、例子、易错点、历史背景和应用；
- 个人学习状态、笔记和问题记录；
- 平静、长期、可持续的学习体验；
- 后续可选的 AI 摘要和页面级问答能力。

当前阶段优先服务个人自托管学习，不追求考试刷题、课程售卖或复杂社区功能。

## 技术栈

- 前端：React + Vite + TypeScript
- 后端：FastAPI
- 数据库：PostgreSQL 16
- 部署：Docker Compose

## 整体架构

Docker Compose 当前包含三个服务：

```text
浏览器
  │
  ▼
前端服务（React 构建产物 + Nginx）
  │ /api
  ▼
后端服务（FastAPI + Uvicorn）
  │
  ▼
PostgreSQL 数据库
```

| 服务 | 来源 | 作用 |
| --- | --- | --- |
| `frontend` | `./frontend` | Web UI，提供 React 构建后的静态资源 |
| `backend` | `./backend` | API 服务、健康检查、认证接口 |
| `db` | `postgres:16-alpine` | 持久化数据存储 |

数据库数据保存在 Docker 命名卷 `qli_math_pgdata` 中。

## 当前实现

前端目前已经实现了一版以静态种子数据为主的高保真交互页面，包括：

- 登录页；
- 仪表盘；
- 学习路线列表；
- 路线详情；
- 概念详情页，并包含线性组合交互示意；
- 知识库；
- 数学史探索；
- 我的学习；
- 个人设置。

后端目前提供：

- 健康检查；
- 单用户登录；
- 当前用户信息接口；
- 密码重置接口。

路线、概念、笔记、学习状态、内容导入导出、数据库迁移和 AI 功能将在后续逐步完善。

## 环境变量

首次运行前，从示例文件创建本地 `.env`：

```bash
cp .env.example .env
```

然后编辑 `.env`，替换占位值。需要配置的变量包括：

| 变量 | 说明 |
| --- | --- |
| `POSTGRES_DB` | PostgreSQL 数据库名 |
| `POSTGRES_USER` | PostgreSQL 用户名 |
| `POSTGRES_PASSWORD` | PostgreSQL 密码 |
| `DATABASE_URL` | 后端连接数据库的地址 |
| `ENVIRONMENT` | 运行环境标识 |
| `DEFAULT_USER_EMAIL` | 初始单用户登录邮箱 |
| `DEFAULT_USER_NICKNAME` | 初始用户昵称 |
| `DEFAULT_USER_PASSWORD` | 初始登录密码 |
| `SECRET_KEY` | 用于签发认证令牌的密钥 |

请不要提交 `.env`。该文件已经被 `.gitignore` 忽略。

## 本地开发

### 前端

```bash
cd frontend
npm install
npm run dev
```

然后打开 Vite 输出的本地开发地址。

### 后端

```bash
cd backend
uv sync --dev
uv run uvicorn app.main:app --reload
```

健康检查：

```bash
curl http://localhost:8000/api/health
```

## Docker Compose 部署

在项目根目录执行：

```bash
cp .env.example .env
# 编辑 .env，设置强密码和随机密钥。

docker compose up -d --build
```

默认服务绑定：

| 服务 | 宿主机绑定 | 容器端口 | 说明 |
| --- | --- | --- | --- |
| `frontend` | `127.0.0.1:18618` | `80` | 前端页面 |
| `backend` | `127.0.0.1:18617` | `8000` | 后端 API |
| `db` | 内部网络 | `5432` | 仅供后端访问 |

常用命令：

```bash
# 查看服务状态
docker compose ps

# 查看日志
docker compose logs -f

# 停止服务
docker compose down

# 停止服务并删除数据库卷
docker compose down -v

# 代码变更后重新构建
docker compose up -d --build
```

## 认证说明

当前版本采用简单的单用户认证模型，适合个人学习 MVP：

- 暂不支持注册；
- 初始登录账号通过 `.env` 配置；
- 登录成功后返回 Bearer Token；
- 设置页支持通过后端接口重置密码。

认证接口：

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| `POST` | `/api/auth/login` | 登录 |
| `GET` | `/api/auth/me` | 获取当前用户 |
| `POST` | `/api/auth/password` | 重置当前用户密码 |

示例登录请求：

```bash
curl -X POST http://localhost:18617/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"your-email@example.com","password":"your-password"}'
```

## 验证命令

后端：

```bash
cd backend
uv sync --dev
uv run pytest -q
uv run ruff check .
```

前端：

```bash
cd frontend
npm install
npm run build
```

Compose 配置：

```bash
docker compose config
```

## 目录结构

```text
.
├── backend/              # FastAPI 后端
│   ├── app/
│   │   ├── api/          # API 路由
│   │   └── core/         # 配置与安全辅助函数
│   └── tests/            # 后端测试
├── frontend/             # React + Vite 前端
│   └── src/
│       ├── components/   # UI 组件
│       └── lib/          # 前端工具与数据层
├── docs/                 # 产品和设计文档
├── docker-compose.yml
├── .env.example
├── README.md             # 英文说明
└── README.zh-CN.md       # 中文说明
```

## 后续路线

计划逐步推进：

1. 将前端种子数据整理为更清晰的内容层；
2. 增加路线、概念、笔记和学习状态相关后端 API；
3. 增加 PostgreSQL 持久化与数据库迁移；
4. 支持开放内容的导入和导出；
5. 根据需要完善单用户认证或升级为持久化用户系统；
6. 增加可选的 AI 页面问答和摘要能力。
