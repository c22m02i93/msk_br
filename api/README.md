# Modern API for Canvas Frontend

This directory contains a TypeScript + Express API built for running alongside the legacy PHP site. It exposes modular CRUD endpoints, JWT auth, media handling, and a compatibility layer to read data from the old database without mutating it.

## Quick start
1. Copy `.env.example` to `.env` and set DB + JWT values.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run migrations on a MySQL/MariaDB database that can be accessed from shared hosting:
   ```bash
   npx knex --knexfile ./src/database/knexClient.ts migrate:latest
   ```
4. Start the server in dev mode:
   ```bash
   npm run dev
   ```
5. Build and run in production (shared hosting with Node support):
   ```bash
   npm run build && npm start
   ```

## Key endpoints
- `/api/auth/*` – register/login with JWT
- `/api/content/*` – CRUD for posts/pages/categories/tags
- `/api/media` – upload/list media with sharp thumbnails
- `/api/legacy/news` – read old `news` table without modifying legacy schema
- `/docs` – Swagger UI served from `openapi.yaml`

## Dual-run strategy
- Keep the legacy PHP site on the main domain.
- Deploy this API + new React Canvas site on a subdomain (e.g., `next.example.com`).
- Use the API to backfill new data while progressively reading legacy records with the `/legacy` routes.

## Connecting Canvas (React)
- Point environment variables in the frontend to `VITE_API_URL=https://next.example.com/api` (or similar).
- The API responds with JSON and CORS headers for browser access.

## Deployment on shared hosting
- If Node.js is available: use Passenger/Node or `npm start` with a process manager supported by the host. Serve the compiled `dist` folder.
- If only PHP is available, host the compiled frontend as static files while the API is deployed to a small VPS or serverless MySQL-enabled function; keep DB credentials identical so both legacy and API share data.

## Migration tips
- Populate `roles` and an admin user via SQL or seed script before exposing protected routes.
- Use the legacy service to pull content progressively, then write transformed records into the new tables via `/content` endpoints.
