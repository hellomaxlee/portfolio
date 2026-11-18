# AGENTS.md

## Project
portfolio: Max's personal website. A small, fast, static site that says who he is, shows selected
work, and gives a visitor one clear way to get in touch. Clean means one page, colour only where it
carries meaning, a strict grid, and nothing on the page that does not earn its place.

**Look:** professional, refined, and concise. Simple beats clever. Colour and a real transit
network drawing are wanted; shouting type, gimmicky labels, jokes, and captions are not. The name
stays small. Creative features are welcome when they are well integrated and show technical
fluency. The page is not a resume: it says less than a profile would and says it better.

**Copy:** short, specific, natural sentences written for a stranger. Explain anything an outsider
would not know. Nothing flowery, general, or transplanted from another document.

**Audience:** assume the public is looking, at the site and at this repository. Nothing private
goes in either: no unpublished projects, no personal commentary, no details that locate a home.

**Done means:**
1. A visitor on a phone learns who Max is and what he does without scrolling.
2. Software projects are cards and travel side quests are a short list, each led by one number
   and one or two plain sentences. The hero network map links to every one of them.
3. The site is self-contained: the only outside links are LinkedIn, GitHub, Max's own live
   apps, his cooking account on Instagram, and the organisations named in the work paragraph.
4. The site builds from a clean clone with one command and deploys on push to `main`.
5. Lighthouse scores 95 or higher on performance, accessibility, best practices, and SEO, on
   mobile, for every page.

**Non-goals:** a blog engine or CMS; comments; user accounts; a backend or database; analytics that
set cookies; client-side JavaScript; a component library; a resume-style experience list; animation that loops
or delays reading. Subtle CSS animation is welcome.

## Stack
TypeScript · Astro 7 (static output) · plain CSS with custom properties · bun · GitHub Pages
- Fonts are self-hosted through Fontsource: Newsreader Variable (headings and numerals) and
  Instrument Sans Variable (text and map labels). Sentence case everywhere; no all-caps, no mono.
- Astro runs on the bun runtime (`bunx --bun astro`), because the local Node is older than Astro 7
  accepts. The package scripts already do this.
- Astro over Next.js: the site is content, not an app. Pages ship as HTML with no client
  JavaScript unless a page asks for it.
- Plain CSS over Tailwind: a handful of pages and one design-token file do not need a framework.
- Content lives in Markdown under `src/content/`, so adding a project is adding a file.
- GitHub Pages deploys from `.github/workflows/deploy.yml` on push to `main`. The repo is public
  (2026-11-17). The site is served under `/portfolio`, so every internal URL goes through
  `import.meta.env.BASE_URL`.

## Commands
| Task | Command |
|------|---------|
| Install | `bun install` |
| Dev server (port 4321) | `bun run dev` |
| Type and template check | `bun run check` |
| Production build | `bun run build` |
| Preview the build | `bun run preview` |

## Code Style
- Semantic HTML first: `header`, `nav`, `main`, `article`, `footer`, one `h1` per page, headings in
  order. A `div` is the last choice.
- All colour, spacing, and type sizes come from custom properties in `src/styles/tokens.css`. No
  literal hex value in a component. Every colour has a role before it has a value.
- TypeScript strict. `const` by default, arrow functions, explicit types on exports.
- Components stay small and are named for what they show (`ProjectCard.astro`).
- No comments where the name says it.
- Docs and site copy: plain sentences, no em dashes, no themed jokes or captions.

## Invariants
Rules that outrank any design idea or feature request.
- **Every claim is true.** Titles, dates, employers, metrics, and project outcomes come from Max.
  Nothing is invented, rounded up, or implied. If a fact is missing, ask; do not fill the gap.
  Career facts follow Max's public LinkedIn profile.
- **No placeholder ships.** No lorem ipsum, stock photo, dead link, or "coming soon" reaches `main`.
  A section without real content is left out.
- **Private details stay private.** No home address, phone number, or date of birth anywhere in the
  repo or the built site. Contact is an email link and profile links only.
- **Readable without JavaScript.** Every page's content and navigation work with scripts disabled.
- **Accessible.** WCAG 2.2 AA: text contrast 4.5:1 or better, visible focus states, alt text on
  every meaningful image, full keyboard navigation, `prefers-reduced-motion` respected.
- **Light and dark.** Both themes follow `prefers-color-scheme` and both pass the contrast rule.
- **Fast.** The page ships no client JavaScript. Images are sized and compressed for their slot.
  Fonts are self-hosted; no third-party font request.
- **Motion is optional.** Every animation is CSS, sits behind `prefers-reduced-motion`, and leaves
  the page complete and readable when it does not run.
- **No tracking.** No cookies, no third-party scripts, no pixels. If analytics is ever wanted, it
  is cookieless and Max asks for it.
- **Restraint.** Two type families, one colour per line (work wheat, build terracotta, quest lake
  blue), one pine-green ground for the hero, footer, and featured card, one layout width. A new
  colour needs a job; a new visual element needs a reason a visitor would notice.

## Working Rules
- Verify by looking. A layout change is checked in the browser at 375 px and 1280 px, in light and
  dark, before it is called done. Name the widths and themes checked.
- Verify by building. `bun run astro check` and `bun run build` pass before any push.
- Design before code on anything visual: state the intent in a sentence, then build it.
- Report outcomes faithfully. Failed output goes in the message; skipped steps are named.

## Agent Behavior
- Work agentically. Make changes directly, no step-by-step narration (exception: plan mode).
- Deploy agents in parallel when tasks are independent and file sets are disjoint.
- Never stop mid-task for permission. Summarize in bullets at the end.
- Commit and push when work is complete. Be concise; no unrequested features.

## Workflow
- `dev` is the working branch. `main` is the deployed site and is never committed to directly;
  promote with a `dev` to `main` pull request when Max asks.
- One `CHANGELOG.md` entry per push.

## Structure
- `src/pages/`: `index.astro` (the whole site) and `404.astro`
- `src/content/projects/`: one Markdown file per fact card; the schema is `src/content.config.ts`.
  Adding a project is adding a file here.
- `src/components/`: `NetworkMap` (hero diagram) and `ProjectCard`
- `src/layouts/Base.astro`: the document shell
- `src/styles/tokens.css`: the design tokens; `src/styles/global.css`: base styles
- `public/`: favicon, portrait, and the Life Dashboard screens image
- `.github/workflows/deploy.yml`: build and deploy to GitHub Pages
- `notes.txt`: design decisions and critical assumptions; document every one here
- `CHANGELOG.md`: one dated entry per push, newest first

## GitHub
Remote: `https://github.com/hellomaxlee/portfolio.git` (public), `origin`. Use the `gh` CLI
against it. Issue closure: the last comment states testing extent, verification method, and reason
for closure.
