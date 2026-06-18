# Juan David Portfolio

Personal bilingual portfolio for Juan David Muñoz Mendivelso, built with React, Vite and Tailwind CSS. The first visit opens a language gate, saves the selected language in `localStorage`, and then shows the portfolio in English or Spanish.

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

Add a new object to the `projects` array and create a unique `slug`. The detail page route is generated automatically:

```text
/projects/your-project-slug
```

Current project routes:

- `/projects/chocorramo-index`
- `/projects/colombia-2026-discourse`
- `/projects/ai-school-assistant`
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

## Future Contact Form Options

The contact form is visual only for now. It can later be connected to:

- Cloudflare Forms or Workers
- Formspree
- Resend
- EmailJS
- A custom backend endpoint

Update `src/components/Contact.jsx` when you are ready to connect the form.
