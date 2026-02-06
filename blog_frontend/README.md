This is a [Next.js](https://nextjs.org) project bootstrapped with `create-next-app`.

Overview
- Responsive layout with:
  - Top navigation bar
  - Sidebar for CMS features (collapsible on mobile)
  - Main content area for blog posts and editor
  - Footer with site links
- Theme: Light, modern. Primary: `#3B82F6`, Success accent: `#F59E0B`.

Routes
- `/` — Home with hero and latest posts grid
- `/posts` — Posts index
- `/editor` — Simple editor placeholder

Getting Started
1. Copy `.env.example` to `.env` and adjust values as needed.
2. Install and run:
```bash
npm install
npm run dev
```
Open http://localhost:3000.

Notes
- Tailwind CSS v4 is configured via `@tailwindcss/postcss`. Utilities are composed in `src/app/globals.css`.
- API calls (when implemented) should use `NEXT_PUBLIC_BACKEND_URL` or `NEXT_PUBLIC_API_BASE`.
