# Article Integration Handbook

This handbook is mandatory for Claude Code and any coding agent that adds or modifies portfolio articles.

## Why this exists

The maintainer has experienced two blank-site incidents after article integrations. The repository history provides direct evidence for the first root cause and shows why the general workflow was unsafe:

- `ArticleDetail.jsx` called `article.sources.map(...)` without first checking that `sources` existed and was an array.
- The newly integrated article did not provide `sources`, so opening it caused a runtime render exception.
- The change reached `main` without an end-to-end preview check of the home, the new article, aliases, and existing articles.
- A global `ErrorBoundary` was added later, but an error boundary cannot rescue a JavaScript syntax/import failure. Valid source and a successful production build remain mandatory.

The second blank-site recurrence reported by the maintainer belongs to the same class of failure: article content or metadata was treated as isolated copy instead of executable data consumed by the entire SPA. Do not guess that Cloudflare or caching is responsible until the source, build, and preview are proven healthy.

## Non-negotiable data contract

Every article must have stable `id`, `slug`, bilingual `title`, `excerpt`, `date`, `category`, `author`, and `content` fields. Links must be verified; never invent a URL.

Before rendering or mapping values, keep these protections in `ArticleDetail.jsx`:

```js
const sourcesValue = article.sources ?? [];
const highlightsValue = article.highlights?.[language]
  ?? article.highlights?.es
  ?? article.highlights?.en
  ?? [];
const contentValue = article.content?.[language]
  ?? article.content?.es
  ?? article.content?.en
  ?? [];

const sources = Array.isArray(sourcesValue) ? sourcesValue : [];
const highlights = Array.isArray(highlightsValue) ? highlightsValue : [];
const content = Array.isArray(contentValue) ? contentValue : [];
```

Rules:

1. Never call `.map`, `.slice`, or `.length` on unvalidated article fields.
2. If `sources` or `highlights` is empty, do not render that section.
3. If content is unavailable, show a controlled fallback instead of throwing.
4. Localized fields must fall back in this order: requested language, Spanish, English, controlled empty value.
5. Keep the global `ErrorBoundary`, but never treat it as a substitute for valid JavaScript.
6. Do not leave duplicate object keys such as two `articleUrl` fields.
7. Do not reference an image until the file exists under `public/` and its production URL has been checked.

## Preserving the author's text

Search local repositories and existing data before using a public page. Copy the confirmed source verbatim. Do not rewrite, summarize, soften, translate freely, remove paragraphs, or silently repair prose. Only convert it into supported blocks:

```js
'Paragraph text'
{ type: 'heading', text: 'Heading text' }
{ type: 'quote', text: 'Quote text', attribution: 'Optional attribution' }
```

For long articles, prefer a dedicated data module rather than editing a very large inline object. Confirm the generated or copied data matches the source programmatically when possible.

## Required pre-push workflow

Run these checks before committing:

```bash
npm install
npm run build
npm run lint
npm audit --omit=dev
npm run preview
```

With the preview running, verify at minimum:

- `/`
- `/articulos/<slug>`
- `/articulos/<slug>/`
- `/articles/<slug>`
- `/articles/<slug>/`
- the related internal project route and every legacy alias
- at least one existing article
- every new image URL

Also verify both ES and EN data arrays, all CTA destinations, canonical metadata, and that the new article appears in the home/listing. Do not push when build or lint fails. Do not use `--force` to bypass a dependency or audit failure during an editorial repair.

## Cloudflare deployment verification

Only investigate Cloudflare after local source, build, lint, and preview checks pass.

After pushing `main`:

1. Confirm Cloudflare Pages deployed the exact commit SHA.
2. Confirm the custom domain serves the new hashed JS and CSS bundle, not merely that it returns HTTP 200.
3. Verify the production routes and image URLs.
4. When practical, compare local and production bundle/image hashes.
5. Treat an existing edge redirect separately from application routing; record it instead of masking it in React.

## Git discipline

- Preserve unrelated working-tree changes and untracked repositories.
- Stage only the files belonging to the requested article integration.
- Use the configured GitHub identity `DavidMume <144786825+DavidMume@users.noreply.github.com>`.
- Never push before the required checks have passed and their results have been observed.

## Stop conditions

Stop and request the missing source instead of improvising when the exact article text cannot be found. Stop before push when a route is blank, a required field has the wrong type, an asset is missing, or production output cannot be tied to the intended commit.
