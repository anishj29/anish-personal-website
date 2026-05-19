# Anish Jha — Personal Website

A single-page personal portfolio built with Next.js. The site showcases education, experience, volunteer work, and projects, with an interactive 3D hero section and static content loaded from JSON files.

## Tech Stack

### 1. UI

| Technology | Role |
|------------|------|
| [Tailwind CSS](https://tailwindcss.com/) 3.4 | Utility-first styling, layouts, gradients, and responsive breakpoints |
| [Material UI (MUI)](https://mui.com/) 6 | Icons (`@mui/icons-material`) and component primitives |
| [Emotion](https://emotion.sh/) | CSS-in-JS styling layer used by MUI |
| [Spline](https://spline.design/) | Interactive 3D hero background (`@splinetool/react-spline`) |
| [Geist](https://vercel.com/font) | Local variable fonts (`GeistVF`, `GeistMonoVF`) via `next/font/local` |
| Custom CSS | Global theme variables, scroll animations, and section transitions in `app/globals.css` |

### 2. Frontend

| Technology | Role |
|------------|------|
| [Next.js](https://nextjs.org/) 15.1 | App Router, SSR/SSG, routing, and production builds |
| [React](https://react.dev/) 18 | UI components (client components with `"use client"`) |
| JavaScript | Application code (`.js` files, no TypeScript) |
| [PostCSS](https://postcss.org/) | Processes Tailwind via `postcss.config.mjs` |
| Static JSON | Content for education and experience in `app/data/` |
| Path aliases | `@/*` maps to `./app/*` (see `jsconfig.json`) |

### 3. Backend

This project does **not** run a separate backend service. Server responsibilities are handled entirely by Next.js:

- **Rendering**: Server and client components via the Next.js App Router
- **Static assets**: Built-in static file serving from `public/` (if used) and the Next.js build output
- **No API routes**: There is no `app/api/` directory; the site does not expose custom REST or GraphQL endpoints

**External services** (not run locally):

- **Spline CDN** — hosts the 3D scene (`prod.spline.design`)
- **AWS S3** — profile image, resume PDF, and other media (`anish-jha-personal-site.s3.us-east-1.amazonaws.com`)

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
├── globals.css     # Tailwind directives and custom styles
├── layout.js       # Root layout, fonts, metadata
└── page.js         # Home page
```

---

## Deployment

The site is configured for [Vercel](https://vercel.com/) (`vercel.json` sets `"framework": "nextjs"`). Connect the GitHub repository to Vercel and deploy; no extra backend or database configuration is needed.

For manual deployment, run `npm run build` and deploy the output according to [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
