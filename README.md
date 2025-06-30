# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Docker

### Local dev
- docker compose -f docker-compose.yml -f docker-compose.local.yml up -d
- docker compose -f docker-compose.local.yml up -d
### Production
- docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d

### Github
-  gh repo create rekkoo-web --public --source=. --remote=upstream

Then access: dev.rekkoo.com?env=local

For remote branches:
Push to any branch and access via dev.rekkoo.com?remote=branch-name

dev.rekkoo.com?remote=feature-branch

- v0.0.1