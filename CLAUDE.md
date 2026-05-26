# Project: Gagandeep Singh — Data Engineer Portfolio

## What this is

A personal portfolio site for **Gagandeep Singh**, Data Engineer at Price Industries (Winnipeg, MB). The primary goal is to **land Senior/Intermediate Data Engineer roles**. The audience is recruiters and engineering hiring managers, in that order.

The site replaces an older site currently at https://gdsai4903.github.io. The old site positioned Gagandeep as an ML/student. This rebuild repositions him as a working Data Engineer with production experience on Microsoft Fabric, Azure Databricks, SQL Server, and Oracle.

## Tech stack

- **Framework:** Astro (latest)
- **Styling:** Tailwind CSS via Astro integration
- **Content:** Astro Content Collections for blog/writeups (markdown + frontmatter)
- **Deployment:** GitHub Pages (static only — no SSR, no backend, no APIs at runtime)
- **Repository:** github.com/gdsai4903/gdsai4903.github.io (or whichever default branch GH Pages reads from)
- **Node:** use the latest LTS

## Hard constraints

- **Must build to fully static HTML.** No server-side rendering, no API routes that execute at runtime, no databases. Astro static output only.
- **No client-side JavaScript unless it earns its place.** Astro ships zero JS by default — keep it that way except for genuine interactivity (e.g., a mobile nav toggle, a chart). Page weight matters because recruiters open the site on slow networks.
- **No tracking/analytics** unless explicitly requested.
- **No CSS frameworks beyond Tailwind.** Don't add shadcn, Material, Chakra, etc.
- **Mobile-first.** Many recruiters open links on phones.

## Information architecture

1. **Home** — Hero, About (short), Featured Projects (3–4 cards), latest 2–3 writeups, contact
2. **Projects** — Full project list with filters (optional, later)
3. **Project detail page** — One page per project, markdown-driven
4. **Writeups (blog)** — Index of technical writeups + individual post pages, markdown-driven via Astro Content Collections
5. **About** _(optional separate page later — start with About as a home section)_
6. **Contact** — Section on home, not a separate page

## Design principles

- **Recruiters spend 15–30 seconds.** Above-the-fold must answer: who is he, what does he do, what's the proof, how to contact.
- **Substance over flash.** No parallax, no scroll-jacking, no animated backgrounds. Subtle hover states and clean typography only.
- **Visual identity:** professional, calm, technically credible. Think personal sites of senior engineers at good companies, not agency portfolios.
- **Typography-led.** A single strong sans-serif (e.g., Inter, Geist) + a mono accent for code/labels. Generous whitespace.
- **Color:** monochrome base (white/off-white background, near-black text) with one accent color. No gradients on text. Dark mode is nice-to-have, not Phase 1.
- **Accessibility:** semantic HTML, proper heading hierarchy, contrast ratios that pass WCAG AA, alt text on every image.

## About Gagandeep (for content generation)

- **Role:** Data Engineer at Price Industries, Winnipeg (Jun 2025 – present)
- **Stack:** Microsoft Fabric (Warehouse, Lakehouse, Data Factory), Azure Databricks, SQL Server, Oracle, SSIS, Power BI, Power Automate, Microsoft Graph API
- **Certifications completed:** Microsoft DP-700 (Fabric Data Engineer), DP-900 (Azure Data Fundamentals), Databricks Fundamentals
- **In progress:** Microsoft DP-800 (Fabric Analytics Engineer)
- **Planned next:** Databricks Data Engineer Associate
- **Education:** Diploma, Data Science & ML Engineer, Red River College Polytechnic (Aug 2023 – Apr 2025), GPA 4.37
- **Specialties:** medallion architecture, metadata-driven ingestion, CDC, pipeline performance optimization, Fabric platform engineering
- **Location:** Winnipeg, MB, Canada
- **Contact:** tocontactgagan@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/gagandeep-singh-354567242/
- **GitHub:** https://github.com/gdsai4903

## Content rules (very important)

- **Never reference internal Price Industries codenames** in any generated content. The names "Odyssey", "NOVA", "IFSAPP", "IFS_NOVA", "FRED", "Syteline" must not appear anywhere on this site.
- **External-facing terminology only:** "IFS" (Cloud) and "SQL Server ERP".
- **Do not generate project content from imagination.** All project descriptions must come from Gagandeep directly. If a project file is empty or content is missing, leave a clear `TODO:` placeholder rather than inventing details.

## Workflow conventions

- Small commits. One logical change at a time.
- After any meaningful change, run `npm run build` to catch errors before deploy.
- Don't restructure existing folders or rename files without asking.
- When uncertain about design or content decisions, ask before guessing.
