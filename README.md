# Anish Jha — Personal Website

A single-page personal portfolio built with Next.js. The site showcases education, experience, volunteer work, and projects, with an interactive 3D hero section and static content loaded from JSON files.

## Tech Stack

### 1. UI

| Technology | Role |
|------------|------|
| [Tailwind CSS](https://tailwindcss.com/) 3.4 | Utility-first styling, layouts, and responsive breakpoints |
| [Newsreader](https://fonts.google.com/specimen/Newsreader) + [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) | Display and UI fonts via `next/font/google` |
| Custom CSS | Design tokens, timeline, scroll reveal in `app/globals.css` |

### 2. Frontend

| Technology | Role |
|------------|------|
| [Next.js](https://nextjs.org/) 15.1 | App Router, SSR/SSG, routing, and production builds |
| [React](https://react.dev/) 18 | UI components (client components with `"use client"`) |
| TypeScript | Application code (`.ts` / `.tsx` files) |
| [PostCSS](https://postcss.org/) | Processes Tailwind via `postcss.config.mjs` |
| Static JSON | Content for education and experience in `app/data/` |
| Path aliases | `@/*` maps to `./*` (see `tsconfig.json`) |

### 3. Backend

This project does **not** run a separate backend service. Server responsibilities are handled entirely by Next.js:

- **No separate backend service**: Server responsibilities are handled by Next.js App Router
- **API route**: `app/api/chat` powers the portfolio chat widget (RAG over resume embeddings)

**External services** (not run locally):

- **AWS S3** — profile image, resume PDF, and other media (`anish-jha-personal-site.s3.us-east-1.amazonaws.com`)
- **Pinecone / Google AI / Vercel KV** — power the portfolio chat RAG API when configured via env vars

### 4. Database

There is **no database** in this project. All structured content is stored as static JSON files:

- `app/data/education.json`
- `app/data/experience.json`

Project and volunteer content is defined inline in their respective components. To update site content, edit these files and redeploy (or refresh in development).

---

## Prerequisites

- **Node.js** 18.18 or later (required for Next.js 15)
- **npm** (comes with Node.js), or an alternative package manager (`yarn`, `pnpm`, `bun`)

---

## Running the Project

This is a **single application** — there is only one service to install and run. UI, frontend, and server logic all live in the same Next.js process.

### Install dependencies

From the repository root:

```bash
npm install
```

### Development (hot reload)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page reloads automatically when you change files under `app/`.

### Production build

```bash
npm run build
```

### Production server

After a successful build:

```bash
npm start
```

Serves the optimized production build at [http://localhost:3000](http://localhost:3000).

### Lint

```bash
npm run lint
```

Runs [ESLint](https://eslint.org/) with Next.js defaults.

### Run everything collectively

For local development, **`npm install`** once, then **`npm run dev`** — that is the full stack. No separate UI server, API server, or database process is required.

For production-like local testing:

```bash
npm install
npm run build
npm start
```

### npm scripts reference

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `next dev` | Development server with hot reload |
| `build` | `next build` | Create an optimized production build |
| `start` | `next start` | Serve the production build |
| `lint` | `next lint` | Run ESLint |

Equivalent commands with other package managers:

```bash
# yarn
yarn install && yarn dev

# pnpm
pnpm install && pnpm dev

# bun
bun install && bun dev
```

---

## Project Structure

```
app/
├── components/     # React sections (intro, education, experience, etc.)
├── data/           # Static JSON content
├── fonts/          # Geist local font files
├── types/          # Shared TypeScript types
├── globals.css     # Tailwind directives and custom styles
├── layout.tsx      # Root layout, fonts, metadata
└── page.tsx        # Home page
```

---

## Deployment

The site is configured for [Vercel](https://vercel.com/) (`vercel.json` sets `"framework": "nextjs"`). Connect the GitHub repository to Vercel and deploy; no extra backend or database configuration is needed.

For manual deployment, run `npm run build` and deploy the output according to [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
