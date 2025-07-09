# 🧩 Yuno - Monorepo

Este repositório contém o projeto completo do **Yuno**, um aplicativo de produtividade pessoal que une **quadro Kanban** com **temporizador Pomodoro** em uma interface desktop desenvolvida com Tauri + React.

---

## 📁 Estrutura do Projeto

```bash
yuno/
├── apps/
│   ├── backend/      # API local com NestJS
│   └── frontend/     # Interface React + Tauri
├── packages/
│   └── shared/       # Tipos TypeScript e utilitários comuns
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── README.md
```

---

## 🧱 Tecnologias Utilizadas

- **Monorepo:** pnpm workspaces
- **Frontend:** React + Tauri
- **Backend:** NestJS + SQLite
- **Compartilhamento de código:** Pacote `@shared` com tipos e utilitários
- **Gerenciador de pacotes:** pnpm

---

## 🛠️ Comandos Úteis

### Instalar dependências
```bash
pnpm install
````

### Rodar backend (NestJS)

```bash
pnpm --filter backend start:dev
```

### Rodar frontend (Tauri + React)

```bash
pnpm --filter frontend tauri dev
```

### Buildar pacote compartilhado

```bash
pnpm --filter shared build
```

---

## 🔄 Compartilhamento entre pacotes

O pacote `@shared` é usado tanto no frontend quanto no backend, permitindo reutilizar:

* Tipos (`Task`, `PomodoroSession`, etc)
* Validadores
* Constantes globais

**Exemplo de uso:**

```ts
import { Task } from '@shared';
```

---

## 🚧 Futuro (roadmap)

* [ ] Estatísticas semanais de foco
* [ ] Notificações de fim de Pomodoro
* [ ] Suporte a múltiplos perfis
* [ ] Tema escuro/claro customizável
* [ ] Versão mobile (longo prazo)

---

**Yuno** – *You know what to do. 🎯*
