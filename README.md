# Oil and Gas Construction (Pty) Ltd — Website

A production-ready marketing website built with **Vite + React + React Router**, for a turnkey mechanical
engineering contractor operating across Africa.

## Tech stack

- **Vite 5** — build tool / dev server
- **React 18** — UI
- **react-router-dom 6** — client-side routing (`BrowserRouter`)
- **lucide-react** — icon set
- Plain CSS (no framework) — design tokens live in `src/styles/index.css`

No CMS, no backend. All copy and project data lives in `src/data/content.js` so non-developers can update
text without touching component code.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build     # outputs to /dist
npm run preview   # serve the production build locally to sanity-check it
```

```bash
npm run lint      # ESLint
```

Requires Node 18+ (Node 20/22 recommended).

## Project structure

```
├── index.html                 # HTML shell + default SEO/OG/Twitter/schema tags
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg           # default social share image (replace with a real photo)
│   ├── robots.txt
│   └── sitemap.xml            # static sitemap — update if routes change
├── src/
│   ├── main.jsx                # React root + BrowserRouter
│   ├── App.jsx                 # route table
│   ├── components/             # Navbar, Footer, SEO, Reveal, Icon, Lightbox, etc.
│   ├── hooks/
│   │   └── useReveal.js        # scroll-reveal IntersectionObserver hook
│   ├── data/
│   │   ├── content.js          # ALL site copy: services, projects, industries, stats...
│   │   └── images.js           # central Vite image import map
│   ├── assets/images/          # source project photography + logo
│   ├── pages/                  # one file per route
│   └── styles/index.css        # design tokens + all component styles
├── vercel.json                 # SPA rewrite rules + asset caching headers
└── vite.config.js
```

## Editing content

Almost everything editorial (service descriptions, project case studies, industries, stats, the
director's contact details) lives in **`src/data/content.js`**. Update it there and every page that
references it updates automatically — no need to hunt through JSX.

To add a new project or service, add an object to the relevant array in `content.js` (see the existing
entries for the shape) — a dedicated detail page is generated automatically by the `:id` route.

Icons are referenced by their [lucide-react](https://lucide.dev/icons/) name as a string (e.g. `'Wrench'`).
`src/components/Icon.jsx` resolves the name at render time and falls back to a generic icon if a name is
ever mistyped, so a typo can't break the build.

## Routing & deployment (Vercel)

This is a single-page app using `react-router-dom`'s `BrowserRouter`, which means every route
(`/services/welding`, `/projects/namdock-repairs`, etc.) needs to be served `index.html` and let React
Router take over client-side. `vercel.json` already includes the required rewrite:

```json
{
  "rewrites": [
    { "source": "/((?!assets/|favicon|robots.txt|sitemap.xml|og-image).*)", "destination": "/index.html" }
  ]
}
```

**To deploy:** push this project to a Git repository and import it in Vercel, or run `vercel` from this
directory with the Vercel CLI. No additional configuration is required — Vercel auto-detects the Vite
framework preset (build command `vite build`, output directory `dist`).

Before going live, update:
- `index.html` — swap `https://www.oilandgasconstruction.co.za` for the real production domain (canonical, OG, Twitter tags) and the JSON-LD block.
- `public/robots.txt` and `public/sitemap.xml` — same domain swap.
- `public/og-image.jpg` — replace the placeholder with a real 1200×630 project photo.
- `src/components/SEO.jsx` — `SITE_URL` constant at the top.

## Forms

The contact form (`src/pages/Contact.jsx`) currently shows a client-side "message received" confirmation
but does **not** send anywhere — there's no backend. Before launch, wire `handleSubmit` up to a real
endpoint (a Vercel serverless function, Formspree, EmailJS, etc.).

The "Download Company Profile" button on the homepage falls back to a `mailto:` link until a real PDF is
placed at `public/oil-and-gas-construction-company-profile.pdf` (see the comment in `src/pages/Home.jsx`).

## Notes on this build environment

This project was authored in a sandboxed environment without npm registry access, so `npm install` /
`npm run build` could not be executed here to produce a live build log. The code has been checked for
syntax correctness (TypeScript compiler run in `--allowJs --checkJs false` mode across every `.js`/`.jsx`
file) and every import path/file was verified to exist. Please run `npm install && npm run build` as your
first step after downloading — if anything surfaces, it's most likely a dependency version nuance rather
than a structural issue, and the flat, well-commented file layout should make it quick to trace.

## License / credits

Project photography and the company logo are the property of Oil and Gas Construction (Pty) Ltd, supplied
for this build. Fonts (Archivo, Inter, IBM Plex Mono) are loaded from Google Fonts under the SIL Open Font
License / Apache License.
