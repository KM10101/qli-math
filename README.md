# Qli Math

Qli Math is a self-hosted personal mathematics learning knowledge base for lifelong learners. It is designed around learning roadmaps rather than isolated articles: open the app, see your current route, continue the next concept, record notes and questions, and gradually build your own mathematical knowledge garden.

## Product direction

Qli Math focuses on:

- systematic mathematics learning roadmaps;
- concept pages with intuition, definitions, examples, pitfalls, history, and applications;
- personal learning status, notes, and questions;
- a calm, long-term learning experience;
- future optional AI summaries and page-level Q&A.

The project is not an exam practice platform, course video site, or multi-user education SaaS. The first goal is personal self-hosted learning.

## Tech stack

- Frontend: React + Vite + TypeScript
- Backend: FastAPI
- Database: PostgreSQL 16
- Deployment: Docker Compose

## Architecture

The Docker Compose stack contains three services:

```text
┌──────────────┐      HTTP      ┌──────────────┐
│   Browser    │ ─────────────▶ │   Frontend   │
└──────────────┘                │ React / Vite │
                                └──────┬───────┘
                                       │ /api
                                       ▼
                                ┌──────────────┐
                                │   Backend    │
                                │   FastAPI    │
                                └──────┬───────┘
                                       │
                                       ▼
                                ┌──────────────┐
                                │  PostgreSQL  │
                                └──────────────┘
```

Current Compose services:

| Service | Source | Runtime | Purpose |
| --- | --- | --- | --- |
| `frontend` | `./frontend` | Node container serving built React assets | Web UI |
| `backend` | `./backend` | FastAPI + Uvicorn | API service, health check, authentication |
| `db` | `postgres:16-alpine` | PostgreSQL | Persistent data storage |

The database data is stored in the named Docker volume `qli_math_pgdata`.

## Current implementation

The current version implements the high-fidelity UI as a React application with mostly static seed learning data:

- login page;
- dashboard;
- learning routes list;
- route detail;
- concept detail with interactive linear-combination diagram;
- knowledge library;
- math history exploration;
- my learning page;
- personal settings page.

The backend currently provides:

- health check;
- single-user login;
- current-user endpoint;
- password reset endpoint.

Domain models, durable learning-state persistence, content APIs, migrations, and AI features will be added later.

## Environment variables

Create a local `.env` file from `.env.example` before running Docker Compose:

```bash
cp .env.example .env
```

Then edit `.env` and replace placeholder values.

Required variables:

| Variable | Purpose |
| --- | --- |
| `POSTGRES_DB` | PostgreSQL database name |
| `POSTGRES_USER` | PostgreSQL user |
| `POSTGRES_PASSWORD` | PostgreSQL password |
| `DATABASE_URL` | Backend database connection URL inside the Compose network |
| `ENVIRONMENT` | Runtime environment label |
| `DEFAULT_USER_EMAIL` | Initial single-user login email |
| `DEFAULT_USER_NICKNAME` | Initial user display name |
| `DEFAULT_USER_PASSWORD` | Initial single-user login password |
| `SECRET_KEY` | Secret used to sign authentication tokens |

Do not commit `.env`. It is intentionally ignored by Git.

## Local development

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open the printed Vite development URL.

### Backend

```bash
cd backend
uv sync --dev
uv run uvicorn app.main:app --reload
```

Health check:

```bash
curl http://localhost:8000/api/health
```

## Docker Compose deployment

From the repository root:

```bash
cp .env.example .env
# Edit .env and set strong secrets/passwords.

docker compose up -d --build
```

Default service bindings from `docker-compose.yml`:

| Service | Host binding | Container port | URL |
| --- | --- | --- | --- |
| `frontend` | `127.0.0.1:18618` | `80` | `http://localhost:18618` |
| `backend` | `127.0.0.1:18617` | `8000` | `http://localhost:18617` |
| `db` | internal only | `5432` | available to backend as `db:5432` |

Useful URLs after startup:

```text
Frontend:      http://localhost:18618
Login:         http://localhost:18618/?page=login
Settings:      http://localhost:18618/?page=settings
Backend API:   http://localhost:18617
API health:    http://localhost:18617/api/health
```

Check service status:

```bash
docker compose ps
```

View logs:

```bash
docker compose logs -f
```

Stop the stack:

```bash
docker compose down
```

Stop the stack and remove the PostgreSQL volume:

```bash
docker compose down -v
```

Rebuild after code changes:

```bash
docker compose up -d --build
```

## Authentication

This project currently uses a simple single-user authentication model for the personal-learning MVP.

- Registration is not implemented yet.
- The initial login account is configured through `.env`.
- Login returns a Bearer token used by the frontend.
- The settings page supports password reset through the backend.

Authentication endpoints:

| Method | Path | Description |
| --- | --- | --- |
| `POST` | `/api/auth/login` | Login with email and password |
| `GET` | `/api/auth/me` | Get current user |
| `POST` | `/api/auth/password` | Reset password for the current user |

Example health check:

```bash
curl http://localhost:18617/api/health
```

Example login request:

```bash
curl -X POST http://localhost:18617/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"your-email@example.com","password":"your-password"}'
```

## Verification

Backend:

```bash
cd backend
uv sync --dev
uv run pytest -q
uv run ruff check .
```

Frontend:

```bash
cd frontend
npm install
npm run build
```

Compose config:

```bash
docker compose config
```

## Repository layout

```text
.
├── backend/              # FastAPI backend
│   ├── app/
│   │   ├── api/          # API routers
│   │   └── core/         # settings and security helpers
│   └── tests/
├── frontend/             # React + Vite frontend
│   └── src/
│       ├── components/
│       └── lib/
├── docs/                 # Product and design documents
├── ui_design_hifi/       # Original high-fidelity static design drafts
├── docker-compose.yml
├── .env.example
└── README.md
```

## Roadmap

Planned next steps:

1. Move frontend seed data into a clearer content layer.
2. Add backend APIs for routes, concepts, notes, and learning states.
3. Add PostgreSQL persistence and migrations.
4. Add content import/export for open-source seed content.
5. Replace the MVP single-user auth model with durable user persistence if needed.
6. Add optional AI page Q&A and summaries.
