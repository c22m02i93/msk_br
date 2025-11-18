# Prompt for Full Project Generation (API + Frontend)

Copy and use the following prompt without changes to generate a complete monorepo (API + frontend) that matches the Barysh Eparchy main page design referenced at https://chatgpt.com/canvas/shared/691ccdfad5ac8191b9e20ee0a2c46377.

---

You are a senior full-stack engineer (15+ years of experience).
Your task is to generate a COMPLETE project: API + frontend + documentation.
Follow ALL requirements STRICTLY.

---

🔥 PROJECT GOAL

Create a full production-ready monorepo that contains:
1. Backend API
2. Frontend (React + Vite + Tailwind)
3. UI components
4. Complete main page layout
5. Full API integration
6. Mock database for now

The final result must fully replicate the UI and layout from this design reference:

👉 “Barysh Eparchy website — main page design”
The layout reference is EXACTLY as described here:
https://chatgpt.com/canvas/shared/691ccdfad5ac8191b9e20ee0a2c46377

Reproduce it pixel-perfect, including:
- header
- top info bar
- mobile menu (Sheet)
- desktop dropdown menu
- calendar block
- main news block
- news tabs
- announcements
- video section
- footer with all submenus
- banners
- typography
- shadows
- colors
- spacing
- icons

---

🧱 TECHNICAL REQUIREMENTS

📌 1. Frontend

Use the following stack:
- React 18
- Vite
- TypeScript
- Tailwind CSS
- Shadcn/ui (local components)
- Lucide-react icons
- React Query
- Absolute imports (@/)

Components to create:
- src/components/ui/button.tsx
- src/components/ui/card.tsx
- src/components/ui/input.tsx
- src/components/ui/separator.tsx
- src/components/ui/sheet.tsx
- src/components/layout/Header.tsx
- src/components/layout/MobileMenu.tsx
- src/components/layout/TopBar.tsx
- src/components/layout/Footer.tsx
- src/components/news/NewsItem.tsx
- src/components/news/NewsTabs.tsx
- src/pages/HomePage.tsx

Tailwind config:
- font: Inter
- colors adapted exactly from screenshot
- border widths and shadows exactly matching reference

📌 2. Backend API

Use Node.js + Express + TypeScript with the following routes:

- GET /api/main-news
- GET /api/news
- GET /api/publications
- GET /api/announcements
- GET /api/calendar/today
- GET /api/videos
- GET /api/search?q=
- GET /api/popular
- GET /api/menu

The backend must:
- store data in JSON mock files inside /data
- implement service layer
- implement DTO types
- enable CORS
- run on port 4000

📌 3. Frontend → API integration

Use React Query hooks:

- useMainNews()
- useNews()
- usePublications()
- useAnnouncements()
- useCalendar()
- useVideos()
- useSearch()

Each hook must fetch from Express API.

📌 4. Project structure (monorepo)

/project
  /api
    /src
      /routes
      /controllers
      /services
      /types
      /data
    package.json
    tsconfig.json
  /web
    /src
    vite.config.ts
    tailwind.config.js
    package.json
  package.json (workspace root)
  README.md

Use npm workspaces.

📌 5. UI & Layout Requirements

Recreate the layout EXACTLY as in the reference:
- mobile menu must use Sheet
- desktop menu must have hover dropdowns
- “Новости / Публикации” must be tabs with animation
- all cards must match screenshot
- banners must be displayed exactly like the reference
- fonts, spacing, colors must match
- search dropdown must look the same
- calendar block must look the same
- footer must include all 7 columns
- video grid: 2 videos side by side

📌 6. Final Output

Codex must generate:
- full backend API
- full frontend project
- all React components
- all API hooks
- complete layout
- sample data
- instructions to run

📌 7. Do NOT:

- do NOT simplify markup
- do NOT skip any block
- do NOT remove any menu items
- do NOT replace UI with placeholders
- do NOT invent modern UI — must match reference 1:1

📌 8. Deliverables

Return:
1. full code for backend
2. full code for frontend
3. folder structure
4. README
5. all config files
6. all components
7. mock JSON database
8. screenshots of expected UI
9. instructions to start:

npm install
npm run dev:api
npm run dev:web

---

👑 END OF PROMPT
