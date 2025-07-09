# 🧠 Yuno - Backend

Este é o backend da aplicação **Yuno**, um app de produtividade pessoal que combina o uso de um quadro **Kanban** com a técnica **Pomodoro**.

O backend oferece uma API local que gerencia tarefas, sessões de foco e histórico de produtividade.

---

## 📌 Casos de Uso

### 1. 📋 Gerenciar Tarefas

O usuário pode:
- Criar, listar, editar e excluir tarefas
- Cada tarefa possui:
  - `id`: UUID
  - `title`: string
  - `description`: string (opcional)
  - `status`: `todo`, `doing`, `done`
  - `created_at`, `updated_at`: timestamps
  - `priority`: `low`, `medium`, `high` (opcional)
  - `tags`: lista de strings (opcional)

**Endpoints REST:**
- `POST /tasks`
- `GET /tasks`
- `GET /tasks/:id`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`

---

### 2. 🔁 Mover Tarefa no Kanban

O usuário pode alterar o status de uma tarefa entre colunas do Kanban:

**Exemplo:**
- De "To Do" para "Doing"

**Endpoint:**
- `PATCH /tasks/:id/status`

---

### 3. ⏱️ Iniciar Sessão Pomodoro

Quando uma tarefa está em `doing`, o usuário pode iniciar uma sessão de Pomodoro (25 minutos).

**Regras:**
- Uma sessão só pode ser iniciada para tarefas em `doing`
- Apenas uma sessão ativa por vez
- Sessões estão vinculadas a uma tarefa

**Endpoints:**
- `POST /pomodoro/start` → `{ task_id }`
- `GET /pomodoro/active`
- `POST /pomodoro/finish`
- `POST /pomodoro/cancel`

---

### 4. 📈 Histórico de Pomodoros

Todas as sessões concluídas ou canceladas são armazenadas para análise futura.

**Campos:**
- `id`, `task_id`
- `start_time`, `end_time`
- `status`: `completed`, `cancelled`

**Endpoints:**
- `GET /pomodoros?task_id=...`
- `GET /pomodoros/today`

---

### 5. ⚙️ Configurações Futuras

- Duração personalizada de Pomodoro
- Intervalos curtos e longos configuráveis
- Perfil de usuário local

---

## 🧱 Stack

- **Linguagem:** TypeScript
- **Framework:** NestJS
- **Banco de Dados:** SQLite (via Prisma ou TypeORM)
- **Uso:** API local integrada ao app desktop (Tauri)
