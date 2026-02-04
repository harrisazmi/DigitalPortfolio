# Harris Azmi Roswadi — Digital Portfolio

Modern, cloud-hosted portfolio showcasing my work across government digital services, personal products, and DevOps experimentation. Built with Next.js 15, React 19, Tailwind CSS v4, and Payload CMS, the site emphasizes accessibility, animation, and CI/CD best practices.

> **Live Demo:** [portfoliocf.harrisviewcodes.uk](https://portfoliocf.harrisviewcodes.uk/)  
> **Legacy v1:** [legacy1portfoliocf.harrisviewcodes.uk](https://legacy1portfoliocf.harrisviewcodes.uk/)  
> **Source:** [github.com/harrisazmi/OnlinePortfolioV2](https://github.com/harrisazmi/OnlinePortfolioV2)  
> **Issues:** [github.com/harrisazmi/OnlinePortfolioV2/issues](https://github.com/harrisazmi/OnlinePortfolioV2/issues)

> 🚧 **Ongoing CI/CD Practice** — Iterated in active sprints; expect frequent deployments, new sections, and fresh content.

---

## Why I Built This

Digital resumes are static snapshots; they rarely capture how I design systems, run infrastructure, or deliver iterative improvements. I wanted a living space that mirrors my workflow and gives collaborators a single link to explore everything.

This portfolio lets me:

- Present my professional journey through interactive, data-driven components
- Centralize experience, tools, and case studies in one navigable hub
- Support both mobile browsing and print-friendly exports
- Ship updates continuously via GitHub Actions and Cloudflare Pages

---

## Portfolio at a Glance

- **Component-first UI** – Modular React components (`Navbar`, `LayoutContent`, `Avatar`, `ProjectDetail`, `HorizontalCard`) separate presentation from data.
- **Data-driven content** – Experiences, projects, testimonials, and tools live in `src/data/*`, enabling rapid content refreshes without JSX edits.
- **Four visual themes** – Light, dark, sepia, and monochrome palettes driven by a custom `ThemeProvider` + CSS tokens.
- **Payload-ready backend** – Users/Media collections, MongoDB adapter, and auto-generated admin routes ship with the repo.
- **Motion storytelling** – Framer Motion animates hero sections, cards, and project detail pages.

---

## Project Structure

```
src/
├── app/
│   ├── (frontend)/         # Public pages, themes, layout, animations
│   └── (payload)/          # Payload admin UI + API routes (GraphQL, REST)
├── components/             # Navbar, Avatar, ThemeToggler, ProjectDetail, etc.
├── data/                   # HomeInfo, ExpInfo, ProjectsData, ProjectInfo, ToolCategories
├── hooks/                  # ThemeProvider + client hooks
├── lib/                    # Utility helpers and motion variants
├── collections/            # Payload collections (Users, Media)
└── payload.config.ts       # Payload bootstrap and Mongo adapter
```

---

## Tech Stack

| Layer            | Tools                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Frontend         | Next.js App Router, React 19, TypeScript 5.7, Tailwind CSS v4, Radix UI, ShadCN UI, custom MYDS-inspired tokens, Framer Motion |
| CMS & Data       | Payload 3 (Users + Media collections), MongoDB, Lexical editor                                                                 |
| Tooling          | ESLint 9, Prettier 3, Vitest 3, Playwright 1.56, tsx, TypeScript path aliases                                                  |
| DevOps & Hosting | Cloudflare Pages (prod), Vercel previews, GitHub Actions, Docker (standalone build), self-hosted Proxmox/Portainer lab         |
| Requirements     | Node.js >=18.20 or >=20.9, pnpm 9/10 (`corepack enable`), `.env` with `DATABASE_URL` + `PAYLOAD_SECRET`                        |

---

## Frontend Architecture

- **Layout System** – `LayoutContent` orchestrates Avatar placement and responsive breakpoints, while `Navbar` renders animated navigation tabs from `NavigationData`.
- **Theming** – `ThemeProvider` + `ThemeToggler` switch between CSS theme files (`light.css`, `dark.css`, `sepia.css`, `monochrome.css`). Typography defaults to Outfit via Next Font.
- **Content Modules** – Pages read from TypeScript data sources (`HomeInfo`, `ExpInfo`, `ProjectsData`, `ProjectInfo`, `ToolCategories`, `AvatarInfo`) so copy changes never require component rewrites.
- **Project Narratives** – `ProjectDetail` handles hero media, Markdown sections, tech stacks, link groups, and CTA buttons for every `/projects/*` route.
- **Animations** – `motionVariants` + Framer Motion power staggered entrances, card hover states, and in-view transitions.

---

## Payload CMS & Data

- **Collections** – `Users` (auth-enabled) and `Media` (upload-enabled with alt text) live in `src/collections/*` and are wired through `payload.config.ts`.
- **Mongo Adapter** – `@payloadcms/db-mongodb` connects via `DATABASE_URL`; `.env` also requires a `PAYLOAD_SECRET`.
- **Admin & APIs** – Next.js routes under `src/app/(payload)` expose `/admin`, GraphQL (`/api/graphql`), and REST endpoints. The first local login bootstraps an admin user.
- **CLI Utilities** – `pnpm payload`, `pnpm generate:types`, and `pnpm generate:importmap` support migrations, types, and import maps.
- **Type Safety** – Generated `src/payload-types.ts` keeps components honest across data boundaries.

---

## Key Features

- **Responsive & accessible UI** – Mobile-first layout, semantic HTML, keyboard navigation, and contrast-aware color tokens.
- **Multi-theme experience** – Toggle between four curated palettes with persisted preferences.
- **Rich project storytelling** – Dedicated case-study pages for government collaborations, DevOps experiments, and personal apps.
- **Animation-first feel** – Framer Motion enhances perceived performance and engagement across sections.

---

## Case Studies & Project Pages

- **Portfolio v2 (CI/CD Playground)** – Live Next.js + Payload experience hosted on Cloudflare Pages with zero-downtime deployments.
- **MYDS** – Malaysia Government Design System contributions documented under `/projects/myds` (components, docs, Storybook, i18n).
- **AskMyGov** – Centralized Q&A platform (pre-launch) with Elasticsearch and multilingual UI (`/projects/askmygov`).
- **Directory.gov.my** – Government staff directory modernization (`/projects/directory`).
- **NumazuScraper** – Disaster-alert tool scraping JMA data, combining Puppeteer, Docker, and hybrid hosting (`/projects/numazuscraper`).
- **ToDoList** – MERN-based realtime task manager deployed on self-hosted infrastructure with Docker + PM2 (`/projects/todolist`).
- **Expense Tracker** – Insight-driven finance dashboard leveraging Next.js, MongoDB Atlas, and Recharts (`/projects/expensetracker`).
- **Terraform AWS** – IaC templates for EC2 provisioning (`/projects/terraformaws`).
- **Smart Home Server** – Proxmox home lab powering websites, backups, and IoT automation (`/projects/homeserver`).

Each page is powered by `ProjectInfo.tsx`, ensuring consistent storytelling, tech stack summaries, and outbound links.

---

## Testing & Quality

- `pnpm test:int` – Vitest integration suite configured via `vitest.config.mts` + `vitest.setup.ts` (jsdom + React Testing Library ready).
- `pnpm test:e2e` – Playwright tests (`playwright.config.ts`) for end-to-end coverage.
- `pnpm lint` – ESLint with `eslint-config-next` for consistent code style.
- `pnpm devsafe` – Cleans `.next` before starting dev server when caches misbehave.
- Recommended: `tsc --noEmit` after schema or type-heavy refactors to ensure generated Payload types stay in sync.

---

## Versioning & Releases

- **Git tags** track milestones: `v1` covers the legacy build, `v2` represents the Payload-powered redesign.
- Tags are managed directly in this repo and mirrored on GitHub (see [Releases](https://github.com/harrisazmi/OnlinePortfolioV2/tags)).
- Each tag ties into CI/CD deployments (Cloudflare Pages + self-hosted services) for reproducible releases.

---

## Deployment & Hosting

- **Cloudflare Pages** – Primary production host; every push to main triggers a fresh build.
- **Vercel Previews** – Automatic preview deployments for pull requests.
- **Self-hosted lab** – Non-`cf` domains (e.g., `https://portfolio.harrisviewcodes.uk/`) run on my Proxmox cluster using Docker, Portainer, PM2, and Cloudflare Tunnel. Servers can be spun up on demand for reviewers.
- **Dockerfile** – Provided standalone build requires `next.config.mjs` to set `output: 'standalone'` before building.
- **Local setup** –
  1. `pnpm install`
  2. `.env` with `DATABASE_URL=mongodb://127.0.0.1/digital-portfolio` (or remote URI) and `PAYLOAD_SECRET=...`
  3. `pnpm dev` → visit `http://localhost:3000/home` and `http://localhost:3000/admin`

---

## Available Scripts

| Script                    | Description                                     |
| ------------------------- | ----------------------------------------------- |
| `pnpm dev`                | Start Next.js + Payload in development mode     |
| `pnpm devsafe`            | Remove `.next` then start dev server            |
| `pnpm build`              | Production build (`next build`)                 |
| `pnpm start`              | Serve the compiled app (`next start`)           |
| `pnpm lint`               | Run ESLint across the project                   |
| `pnpm test`               | Run `test:int` + `test:e2e` sequentially        |
| `pnpm test:int`           | Vitest integration tests                        |
| `pnpm test:e2e`           | Playwright end-to-end tests                     |
| `pnpm payload`            | Access Payload CLI commands                     |
| `pnpm generate:types`     | Regenerate Payload TypeScript definitions       |
| `pnpm generate:importmap` | Rebuild admin import map when adding components |

---

## Roadmap & Documentation

- Publish deeper case-study write-ups on Medium (in progress).
- Expand automated testing coverage (component + E2E) as new features ship.
- Add more Payload collections/globals as the content model grows.
- Continue refining theming, motion, and accessibility with real recruiter feedback.

---

## Impact & Outcomes

- **Accessibility & Engagement** – Replaced static PDFs with an interactive storytelling space.
- **Single Source of Truth** – One URL aggregates projects, credentials, and contact paths.
- **Demonstrated Practice** – Highlights component-driven design, DevOps automation, and infrastructure ownership.
- **Built to Evolve** – Data modules and Payload CMS keep content updates fast without layout rewrites.

---

## License

Released under the [MIT License](LICENSE).

---

## Author

**Harris Azmi bin Roswadi**  
Full-Stack Engineer — React · TypeScript · Next.js · AWS · CI/CD  
[LinkedIn](https://www.linkedin.com/in/harris-azmi-roswadi/) | [GitHub](https://github.com/harrisazmi)

---

## Feedback & Contributions

Ideas, bug reports, or collaboration requests are always welcome. Please open an [issue](https://github.com/harrisazmi/OnlinePortfolioV2/issues) or submit a pull request—and if the portfolio resonates with you, a ⭐️ is appreciated!
