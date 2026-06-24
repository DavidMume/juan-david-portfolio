# Juan David Portfolio — juandamunoz.com

Live: **https://juandamunoz.com**

Personal bilingual portfolio for Juan David Muñoz Mendivelso, built with React, Vite and Tailwind CSS. The first visit opens a language gate, saves the selected language in `localStorage`, and then shows the portfolio in English or Spanish.

## Domain Structure

The domain `juandamunoz.com` is registered on Cloudflare. All projects use subdomains under this root.

### Main site

| URL | Cloudflare Pages project |
|---|---|
| `https://juandamunoz.com` | `juan-david-portfolio` |
| `https://www.juandamunoz.com` | same — add both in Pages > Custom domains |

### Project subdomains

| Subdomain | Project | Cloudflare type | Pages project / Worker name |
|---|---|---|---|
| `chocorramo.juandamunoz.com` | Índice Chocorramo | Pages | `indice-chocorramo` |
| `votar.juandamunoz.com` | Votar desde lejos | Pages | `votar-desde-lejos` |
| `cepeda.juandamunoz.com` | Cepeda NLP Analysis | Pages | `analisis-plan-gobierno-ivan-cepeda-2026-web` |
| `patria-milagro.juandamunoz.com` | Patria Milagro Analysis | Pages | `patria-milagro-analysis-web` |
| `travel.juandamunoz.com` | Colombia–Australia Travel Planner | Workers | `colombia-australia-travel-planner` |
| `transit.juandamunoz.com` | SEQ Transit Predictor | External (Render) | set CNAME → `seq-transit-predictor.onrender.com` + configure in Render |
| `studenthelper.juandamunoz.com` | StudentHelper (case study) | Redirect rule | redirect to `juandamunoz.com/projects/studenthelper` |
| `waterbuilt.juandamunoz.com` | WaterBuilt Site Vision | — | no live site yet |
| `fracking.juandamunoz.com` | Fracking Papers NLP | — | no live site yet |
| `discurso2026.juandamunoz.com` | Colombia 2026 Discourse | — | no live site yet |

### Where project links are stored

The URL shown on each portfolio card is the `liveUrl` field in:

```text
src/data/projects.js
```

The footer quick-links are in:

```text
src/data/translations.js  →  footer.projectLinks  (both en and es)
```

### Adding a new project subdomain (Cloudflare Pages)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages**
2. Open the correct Pages project
3. **Custom domains** → **Set up a domain**
4. Enter the subdomain (e.g. `chocorramo.juandamunoz.com`)
5. Cloudflare adds the CNAME automatically (domain is already on Cloudflare)
6. SSL issues within seconds
7. Update `liveUrl` in `src/data/projects.js` and redeploy

### Adding a new Workers custom domain

1. **Workers & Pages** → open the Worker
2. **Settings** → **Triggers** → **Custom Domains** → **Add Custom Domain**
3. Enter the subdomain (e.g. `travel.juandamunoz.com`)

### Adding a custom domain for Render (SEQ Transit)

1. In [Render dashboard](https://dashboard.render.com) → open the service → **Settings** → **Custom Domains** → add `transit.juandamunoz.com`
2. In Cloudflare DNS: add **CNAME** `transit` → `seq-transit-predictor.onrender.com` with proxy **off** (grey cloud)
3. Render will issue its own SSL certificate

### Cloudflare Pages build settings (for all Vite projects)

```text
Framework preset:      Vite
Build command:         npm run build
Build output directory: dist
Root directory:        /
Node.js version:       20 or newer
```

SPA routing is handled by `public/_redirects`:

```text
/*    /index.html   200
```

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
│   └── images/
│       └── README.md
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

## Preview Production Build

```bash
npm run preview
```

## Profile Photo

Add your real profile image here:

```text
public/images/profile.png
```

The app already points to `/images/profile.png`. If that image is not present, the hero shows a clean initials placeholder.

## Editing Projects

Projects live in:

```text
src/data/projects.js
```

Each project has bilingual fields:

```js
title: { en: '...', es: '...' },
description: { en: '...', es: '...' }
```

Cards can also include `subtitle`, `date`, `category`, `status`, `collection`,
`tags`, `technologies`, `liveUrl`, `repoUrl` and `articleUrl`. Use clean canonical
URLs in these fields (without tracking parameters such as `fbclid`). The
Colombia–Australia Travel Planner card is an example with the complete shape.

Add a new object to the `projects` array and create a unique `slug`. The detail page route is generated automatically:

```text
/projects/your-project-slug
```

Current project routes:

- `/projects/chocorramo-index`
- `/projects/colombia-2026-discourse`
- `/projects/studenthelper`
- `/projects/travel-planner-colombia-australia`
- `/projects/lockdown-app`

## Editing Translations

Interface text lives in:

```text
src/data/translations.js
```

Supported language keys:

- `en`
- `es`

Language state is handled in:

```text
src/context/LanguageContext.jsx
```

The selected language is saved to:

```text
localStorage["juan-david-portfolio-language"]
```

## Deployment

Run locally:

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Deploy to Cloudflare Pages with these settings:

Recommended Cloudflare Pages settings:

```text
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: /
Node.js version: 20 or newer
```

The complete Cloudflare Pages workflow is:

```bash
npm install
npm run dev
npm run build
```

This project includes:

```text
public/_redirects
```

with:

```text
/*    /index.html   200
```

That keeps React Router project detail URLs working after refresh on Cloudflare Pages.

## Deploy From GitHub

1. Push this folder to a GitHub repository.
2. In Cloudflare Pages, choose **Create a project**.
3. Connect the GitHub repository.
4. Use the build settings above.
5. Deploy.

## Migrating Later To Your Own Server

This is a static frontend. After running:

```bash
npm run build
```

you can serve the `dist/` folder from any static web server, CDN or reverse proxy.

For clean project URLs on your own server, configure SPA fallback so unknown routes serve `index.html`.

Example Nginx location:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Contact Form

The contact form opens the visitor's email application with a message addressed to `juan.mu.me@hotmail.com`.

## StudentHelper Case Study

The portfolio includes a full bilingual case-study page at:

```text
/projects/studenthelper
```

It presents **StudentHelper – AI Learning Assistant for Schools** as a technical prototype / proof of concept. Claims on the page were checked against the source repository; the page intentionally makes no commercial-readiness, compliance, usage, cost or performance claims.

### Content and translations

All English and Spanish case-study copy, architecture labels, comparison rows, metrics and repository URL live in:

```text
src/data/studentHelper.js
```

Edit the `en` and `es` objects together so the experience remains complete in both languages. The global ES/EN switch uses the existing `LanguageContext` and persists the selection in `localStorage`.

### Project index data

The StudentHelper card lives in:

```text
src/data/projects.js
```

Its `collection` field contains the bilingual index label, its `status` is `Prototype / Proof of concept`, and `articleUrl` remains an empty placeholder until an article exists. To add another project, copy an object in the exported `projects` array, assign a unique `slug`, add bilingual content and create a dedicated route only if it needs more than the generic project detail page.

### Screenshots

The four source screenshots are stored at:

```text
public/images/studenthelper/
├── 01-loading.png
├── 02-login.png
├── 03-chat.png
└── 04-admin.png
```

They were copied from `docs/screenshots` in the StudentHelper repository. Replace files using the same names to update the page without changing code. Screenshot labels are translated in `src/data/studentHelper.js`.

### Data and cost placeholders

The cost card is deliberately labelled **Pending real usage data / Pendiente de datos reales de uso**. Update it only after collecting measured request volume, input/output tokens, selected model pricing, active-student counts and infrastructure overhead. No invented KPI is used; the metric strip lists repository-demonstrated capabilities only.

### Cloudflare Pages

This case study is part of the existing Vite SPA and needs no separate build configuration:

```text
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: /
Node.js version: 20 or newer
```

`public/_redirects` provides SPA fallback for direct visits to `/projects/studenthelper`. Connect this GitHub repository in Cloudflare Pages, use the settings above and deploy. No Cloudflare production URL is documented until a real deployment has been completed.
