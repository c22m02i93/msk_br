# Барышская епархия — монорепозиторий

Полноценный монорепозиторий с бэкендом (Express + TypeScript) и фронтендом (React + Vite + Tailwind), который повторяет главную страницу сайта Барышской епархии.

## Структура

```
/project
  /api        # Express API с мок-данными
  /web        # Vite + React приложение
  package.json
```

## Запуск

```bash
npm install
npm run dev:api   # http://localhost:4000
npm run dev:web   # http://localhost:5173
```

## Возможности
- REST API с мок-JSON данными и сервисным слоем.
- Хуки React Query для интеграции с API.
- UI, верстка и навигация, повторяющие макет (хедер, топ-бар, меню, мобильный sheet, календарь, новости/публикации, баннеры, видео, футер).

## Скрипты
- `npm run dev:api` — запуск API с ts-node-dev.
- `npm run dev:web` — запуск Vite dev-сервера.
- `npm --workspace api run build` — сборка API.
- `npm --workspace web run build` — сборка фронтенда.
