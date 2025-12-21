# Fullstack Todo App

A complete Fullstack Todo application built with NestJS, React, and PostgreSQL, all orchestrated using Docker.

## 🚀 Features

- **Backend**: NestJS with CQRS pattern and TypeORM.
- **Frontend**: React (Vite) with modern UI/UX.
- **Database**: PostgreSQL for persistent data storage.
- **Infrastructure**: Docker Compose for easy deployment and local development.
- **Persistence**: Database volumes ensure your data survives container restarts.

## 🛠 Tech Stack

- **Backend**: [NestJS](https://nestjs.com/)
- **Frontend**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **ORM**: [TypeORM](https://typeorm.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Containerization**: [Docker](https://www.docker.com/)

## 🏃 Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) and Docker Compose installed.
- [Node.js](https://nodejs.org/) (optional, if you want to run locally without Docker).

### Setup with Docker (Recommended)

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd todo-nest
   ```

2. **Start the application**:
   ```bash
   npm run docker:up
   ```
   This command will:
   - Build the backend and frontend images.
   - Start a PostgreSQL container.
   - Start the NestJS API on `http://localhost:3000`.
   - Start the React frontend on `http://localhost:5173`.

3. **Stop the application**:
   ```bash
   npm run docker:down
   ```

### Local Development (Manual)

If you prefer to run services manually:

#### 1. Database
Ensure you have a PostgreSQL instance running and update the environment variables in `todo-app/src/app.module.ts`.

#### 2. Backend
```bash
cd todo-app
npm install
npm run start:dev
```

#### 3. Frontend
```bash
cd todo-web
npm install
npm run dev
```

## 📂 Project Structure

```text
.
├── todo-app/          # NestJS Backend
│   ├── src/          # Application source code
│   └── Dockerfile    # Backend container definition
├── todo-web/          # React Frontend
│   ├── src/          # Frontend source code
│   └── Dockerfile    # Frontend container definition
├── docker-compose.yml # Docker infrastructure orchestration
└── package.json       # Monorepo scripts
```

## 📝 API Endpoints (Prefix: /tasks)

- `GET /tasks` - List all tasks.
- `GET /tasks/:id` - Get a specific task.
- `POST /tasks` - Create a new task.
- `PATCH /tasks/:id` - Update task completion status.
- `DELETE /tasks/:id` - Remove a task.


