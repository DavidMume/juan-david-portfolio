# Juan David Portfolio — juandamunoz.com

Live: **https://juandamunoz.com**

Personal bilingual portfolio for Juan David Muñoz Mendivelso, built with React, Vite and Tailwind CSS. The first visit opens a language gate, saves the selected language in `localStorage`, and then shows the portfolio in English or Spanish.

---

## Brand identity

### Primary red
```
#B00020
```
Used consistently for: logo areas, active buttons, hover states, section accents, links, badges, language selector, editorial rules and borders.

Do not introduce other reds, pinks, purples, blues or gradients. Every tint of red on the site is derived from `#B00020`.

### Color tokens (CSS `:root` in `src/styles.css`)

| Token | Value | Use |
|---|---|---|
| `--crimson` | `#B00020` | Primary brand red |
| `--crimson-dark` | `#87001A` | Darker red for depth |
| `--crimson-deep` | `#3D0009` | Near-black red for extremes |
| `--gold` | `#C9A227` | Secondary accent |
| `--cream` | `#FFFDF7` | Main background |
| `--cream-2` | `#F7F0DF` | Secondary background |
| `--ink` | `#111111` | Text color |

### Brand assets

All brand assets are stored in:

```text
public/images/brand/
```

| File | Use |
|---|---|
| `01-logo-m-red-square-1024.png` | Primary logo — navbar (38px), hero brand mark (52px), language gate (80px) |
| `02-logo-m-red-square-transparent.png` | Hero background watermark (opacity 0.05) |
| `03-logo-m-red-square-with-border.png` | Alternative logo with border |
| `04-logo-m-rounded-app-icon.png` | Rounded app icon variant |
| `07-horizontal-lockup-ivory.png` | Horizontal brand lockup (ivory background) |
| `08-vertical-lockup-ivory.png` | Vertical brand lockup (ivory background) |
| `09-og-social-banner.png` | OG/Twitter social preview image (1200×630) |
| `10-editorial-section-divider-transparent.png` | Editorial section divider accent |
| `11-project-placeholder-editorial.png` | Project card placeholder for projects without a screenshot |

### Favicon / browser icon

Favicon files are stored directly in `public/`:

```text
public/favicon.png          ← 32×32, used as default
public/favicon-16x16.png
public/favicon-32x32.png
public/favicon-48x48.png
public/favicon-64x64.png
public/favicon-180x180.png  ← Apple touch icon
public/favicon-192x192.png
public/favicon-512x512.png
```

All referenced in `index.html`. To update the favicon, replace the files and rebuild.

### Updating the logo

Logo references live in three component files:

| Component | Logo use |
|---|---|
| `src/components/Navbar.jsx` | `01-logo-m-red-square-1024.png` at 38×38px |
| `src/components/Hero.jsx` | Brand mark at 52×52px + watermark `02-logo-m-red-square-transparent.png` |
| `src/components/LanguageGate.jsx` | `01-logo-m-red-square-1024.png` at 80×80px |

---

## Project link strategy

The main site is `https://juandamunoz.com/`. It is the editorial hub and the canonical home for every portfolio case study.

- Internal case studies use short, descriptive paths under the main domain.
- `internalPath` is the React Router path; `caseStudyUrl` is its absolute public equivalent.
- `liveUrl` is reserved for a separately deployed tool or report and is set only after the deployment is verified.
- `repoUrl` remains the verified GitHub repository URL.
- `articleUrl` is used only for a verified published article.
- A broken, unavailable or unverified deployment must use `liveUrl: null`. The UI does not render a Live tool button for `null` or `TODO` values.

### Main portfolio

| URL | Content |
|---|---|
| `https://juandamunoz.com` | Main portfolio hub |
| `https://juandamunoz.com/impuesto-saludable` | Full Colombia healthy-tax data-journalism report |
| `https://juandamunoz.com/chocorramo-index` | Índice Chocorramo — case study page |
| `https://juandamunoz.com/votar-desde-lejos` | Votar desde lejos — case study page |
| `https://juandamunoz.com/seq-transit` | SEQ Transit Predictor — case study page |
| `https://juandamunoz.com/cepeda-program` | Redirect to the standalone Iván Cepeda interactive NLP analysis |
| `https://juandamunoz.com/cepeda-context` | Colombia 2026 context evaluation — case study page |
| `https://juandamunoz.com/patria-milagro` | Patria Milagro Analysis — case study page |
| `https://juandamunoz.com/travel-planner` | Colombia–Australia Travel Planner — case study page |
| `https://juandamunoz.com/studenthelper` | StudentHelper AI — case study page |
| `https://juandamunoz.com/waterbuilt-vision` | SiteGuard / WaterBuilt Vision — case study page |
| `https://juandamunoz.com/fracking-papers` | Fracking Papers NLP — case study page |
| `https://juandamunoz.com/digital-discourse` | Colombia 2026 Digital Discourse — case study page |
| `https://juandamunoz.com/inclusive-alert` | Inclusive Alert System — case study page |

These are React Router routes inside the portfolio SPA. Legacy short routes remain as aliases so existing links continue to work.

The healthy-tax report is the exception: it is a self-contained production
bundle served from `public/impuesto-saludable/`. This preserves its bilingual
research interface and charts while keeping the canonical URL on the portfolio
domain. Its standalone Pages deployment remains a backup.

### Live project URLs

| URL | Live project |
|---|---|
| `https://impuesto-saludable.pages.dev/` | Colombia’s healthy tax — live report |
| `https://careerops-d7y.pages.dev` | CareerOps — public product site |
| `https://indice-chocorramo.pages.dev` | Índice Chocorramo — live tool |
| `https://votar-desde-lejos.pages.dev` | Votar desde lejos — live tool |
| `https://seq-transit-predictor.onrender.com` | SEQ Transit Predictor — Render lite demo |
| `https://analisis-plan-gobierno-ivan-cepeda-2026-web.pages.dev` | Iván Cepeda NLP Analysis — live analysis |
| `https://patria-milagro-analysis-web.pages.dev` | Patria Milagro Analysis — live analysis |
| `https://colombia-australia-travel-planner.juan-mu-me.workers.dev` | Colombia–Australia Travel Planner — live tool |
| `https://siteguard-vision.pages.dev` | SiteGuard Vision — live case-study site |
| `https://inclusive-alert-system.pages.dev` | Inclusive Alert System — live case-study site |

These URLs were verified during the July 2026 link audit. The SEQ URL is documented in its public repository README; Render free services can take time to wake from a cold start.

### Where project data is stored

| What | File |
|---|---|
| Project metadata and all link fields | `src/data/projects.js` |
| Card title / image / View analysis target | `project.internalPath` |
| Absolute canonical case-study URL | `project.caseStudyUrl` |
| "Live tool" button URL | `project.liveUrl` in `src/data/projects.js` |
| GitHub and article buttons | `project.repoUrl` and `project.articleUrl` |
| Editorial article links | `src/data/articles.js` |
| Editorial article routes | `src/App.jsx` → `/articulos/:id` (canonical) and `/articles/:id` (legacy alias) |
| Footer quick-links | `src/data/translations.js` → `footer.projectLinks` (EN + ES) |
| React Router routes | `src/App.jsx` |

### Cloudflare Pages: connect juandamunoz.com

The portfolio is deployed under the Cloudflare Pages project `juan-david-portfolio`. To connect the custom domain:

1. **Cloudflare Dashboard → Workers & Pages → `juan-david-portfolio` → Custom domains**
2. Add `juandamunoz.com`
3. Add `www.juandamunoz.com`

Cloudflare adds DNS records automatically and issues SSL within seconds.

### SPA routing

`public/_redirects` contains a single catch-all:

```text
/impuesto-saludable     /impuesto-saludable/index.html   200
/impuesto-saludable/    /impuesto-saludable/index.html   200
/*                      /index.html                       200
```

The two specific rules make direct navigation and refresh work for the embedded
report. The final catch-all keeps normal React Router routes working.

### Refreshing the healthy-tax report

Keep `impuesto-saludable` and `juan-david-portfolio` as sibling folders, then
run:

```bash
npm run sync:impuesto-saludable
npm run build
```

The sync command builds the research site with
`/impuesto-saludable/` as its Vite base and copies only the compiled web bundle
into `public/impuesto-saludable/`. Raw DANE/DIAN files, processing scripts and
research documentation remain in the source repository.

### Adding a new project path

1. Add the project object to `src/data/projects.js` with `internalPath`, `caseStudyUrl`, `liveUrl`, `repoUrl` and `articleUrl`.
2. Add the route to `src/App.jsx`: `<Route path="/myproject" element={<ProjectDetail slug="my-project-slug" />} />`
3. Add a footer link in `src/data/translations.js` under `footer.projectLinks` (both `en` and `es`)
4. `npm run build` and push

---

## Tech Stack

- React + Vite
- JavaScript
- Tailwind CSS
- React Router
- Local translation context, without a heavy i18n library
- Ready for Cloudflare Pages SPA deployment

## Project Structure

```text
juan-david-portfolio/
├── public/
│   ├── _redirects
│   ├── favicon.png
│   ├── favicon-*.png
│   └── images/
│       ├── brand/       ← all M brand assets
│       ├── portfolio/   ← project screenshots
│       └── profile.png
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Vite will print a local URL, usually:

```text
http://localhost:5173
```

## Build

```bash
npm run build
```

The production files are generated in:

```text
dist/
```

## Cloudflare Pages build settings

```text
Framework preset: Vite
Build command:    npm run build
Build output:     dist
Root directory:   /
Node.js version:  20 or newer
```

## Profile Photo

```text
public/images/profile.png
```

The app points to `/images/profile.png`. If the image is missing, the hero shows a clean initials placeholder.

## Editing Projects

Projects live in:

```text
src/data/projects.js
```

Each project has bilingual fields:

```js
{
  slug: 'seq-transit-predictor',
  internalPath: '/seq-transit',
  caseStudyUrl: 'https://juandamunoz.com/seq-transit',
  liveUrl: 'https://seq-transit-predictor.onrender.com',
  repoUrl: 'https://github.com/DavidMume/seq-transit-predictor',
  articleUrl: null,
  status: 'published',
  category: 'data-science',
  title: { en: '...', es: '...' },
  subtitle: { en: '...', es: '...' },
  description: { en: '...', es: '...' },
  technologies: ['...'],
  tags: ['...'],
}
```

Never put an internal route in `liveUrl`. Use `null` until an external deployment is verified.

## Editing Translations

Interface text lives in:

```text
src/data/translations.js
```

Language state is handled in:

```text
src/context/LanguageContext.jsx
```

The selected language is saved to:

```text
localStorage["juan-david-portfolio-language"]
```

## Contact Form

The contact form opens the visitor's email client addressed to `juan.mu.me@hotmail.com`.

## StudentHelper Case Study

Full bilingual case-study page at `/studenthelper` (with `/projects/studenthelper` retained as a legacy alias). Content and translations live in `src/data/studentHelper.js`. Screenshots live in `public/images/studenthelper/`.
