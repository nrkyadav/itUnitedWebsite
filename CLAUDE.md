# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

- **Next.js 16.1.1** with the **Pages Router** (`src/pages/...`, `getStaticProps`/`getServerSideProps`), not the App Router. Do not introduce App-Router APIs (`app/`, `loading.js`, server components, route groups).
- **React 19**, **JavaScript only** (no TypeScript). Path alias `@/*` → `./src/*` (see `jsconfig.json`).
- **CSS Modules** per component (`*.module.css`) plus a single global stylesheet at `src/styles/globals.css`.
- Uses **Turbopack** (Next.js 16's only dev bundler — webpack support was removed). The `babel-plugin-react-compiler` dependency exists but is **disabled** in `next.config.mjs` (`reactCompiler: false`); leave it disabled unless validating Next 16 + Turbopack interactions, since enabling it has caused SSR/CSR hydration mismatches in this codebase.

## Commands

```
npm run dev          # Turbopack dev server on :3000
npm run dev:clean    # Deletes .next then runs dev — use when Turbopack serves stale code
npm run build        # Production build (uses webpack internally)
npm run start        # Serve the production build
npm run lint         # next lint
```

There are **no tests** in this repo and no test runner is configured.

### Development cache troubleshooting

Turbopack's incremental-compilation cache in 16.1.1 frequently serves stale modules after rapid edits, causing **hydration mismatches** that look like "server rendered X, client rendered Y" — where Y is the current source and X is from before. The recovery sequence:

1. `Stop-Process -Name node -Force` (PowerShell) — kills *every* node process; the dev server's compiled-module cache lives in process RAM and survives `.next` deletion.
2. `Remove-Item -Recurse -Force .next` (or `npm run dev:clean`).
3. `npm run dev`.
4. In the browser: open DevTools first, tick **Network → Disable cache**, then load. Better yet, test in an **incognito window** — Next dev sends very long-lived cache headers for `_next/static/*` in production mode.

`next.config.mjs` is wired to send `Cache-Control: no-store, no-cache` on every request **only when `NODE_ENV !== "production"`**, but those headers only apply after a dev-server restart picks up the config change. Production preserves the long-lived `max-age=31536000, immutable` headers for `/_next/static/*` and `/images/*`.

## Architecture

### Page → Components → Content data

Every top-level route under `src/pages/` follows the same three-folder triad:

```
src/pages/<route>/...                    page entry, calls getStaticProps
src/components/<RouteName>Components/    JSX + CSS Module per section
src/constants/<RouteName>Content/        page-specific data (JSON or .jsx exporting plain objects)
```

Pages are thin: they `await import()` a JSON/JSX file from `src/constants/<RouteName>Content/` inside `getStaticProps`, then pass `components` and `seoData` props through to a layout-wrapped tree of section components. To add a new section, edit both the corresponding `*Content` file (data) and add/edit a component in `*Components` (presentation). Heading text, stat values, card descriptions, schema-org metadata — all of these live in `constants/`, not in JSX.

### Shared layout

Every page wraps its content in `src/components/CommonComponents/Layout.jsx`, which renders `<SEO />` (head metadata), `<Header />`, `<main>{children}</main>`, `<Footer />` in that order. SEO data flows from each page's content file → `seoData` prop → `<SEO />`.

### Global providers (`src/pages/_app.js`)

- **AntD `<ConfigProvider>`** wraps everything (form widgets and modals use Ant).
- **`AOSProvider`** (`src/helpers/AOSProvider/AOSProvider.js`) initializes AOS scroll animations once on mount.
- **Lenis smooth scroll** is set up in a `useEffect` on the App component; `window.__lenis` is exposed for components that need to pause/resume scrolling (e.g., the country-list dropdown inside `react-phone-input-2`).
- `react-toastify`'s `<ToastContainer />` is mounted globally.

### Design system (IBM/Accenture-inspired)

`src/styles/globals.css` defines the entire token system as CSS custom properties on `:root`: color (`--color-fg`, `--color-accent` `#0066CC`, `--color-accent-bright` `#00C8FF`), type scale (`--fs-display` through `--fs-eyebrow` with `clamp()`), spacing (`--space-1` ... `--space-10`), section rhythm (`--section-py`, `--container-max`, `--container-px`), radii (intentionally **`--radius-none: 0`** by default — sharp corners are the brand), and motion tokens. **All component CSS should reference these variables** rather than hardcoding values; this is what keeps the visual language consistent across the dozens of section components.

`globals.css` also defines a `.button` utility with `.primary`, `.secondary`, `.ghost` variants and a `.card` utility — prefer these over inventing new button/card systems per component.

Brand fonts (`IBM Plex Sans` + `IBM Plex Serif` + `Outfit`) are loaded via `<link>` in `_document.js`.

### Forms / contact

Forms use **react-hook-form + Yup resolver** for validation. The contact form on the homepage and the standalone Contact page POST to `/api/sendEmail` (`src/pages/api/sendEmail.js`), which uses **nodemailer with Gmail OAuth2**. Required env vars (loaded by `dotenv` in `next.config.mjs`):

- `EMAIL_ADDRESS` — sender Gmail address
- `CLIENT_ID`, `CLIENT_SECRET`, `REFRESH_TOKEN` — Gmail OAuth2 credentials

The recipient is hard-coded to `theitunited@gmail.com` in the handler.

### Images

- **All raster assets** live under `public/assets/Images/` (older organization) or `public/assets/` (newer additions). Some logo files have **spaces in filenames** (e.g., `BLF Group .png`) — paths must be the literal string in JSX `src=` attributes; the browser URL-encodes spaces automatically.
- **`Header.jsx`** uses `next/image` with the brand logo at `/assets/itUnitedBlacklogo.png` (light header). **`Footer.jsx`** uses `/assets/itUnitedWhitelogo.png` (dark footer). Heads-up: the white file currently contains only the cyan "iT" mark, not the full "UNITED" wordmark — this is a known asset gap.
- The hero section (`HomeBanner`) uses a CSS background image (`/assets/Images/hero.jpeg`) with a layered dark gradient overlay, not `next/image`.

### Header mega-menu

`src/components/CommonComponents/Header/Header.jsx` is one of the more complex components. The desktop header has a 5-tab mega dropdown (Services / Industries / Solutions / Resources) whose contents are sourced from `src/constants/HeaderContent/HeaderContent.js`. The same content also feeds the mobile drawer (slide-in from right), which uses an accordion pattern with `useState`-driven `expanded` and `megaMenuOpen` keys. The active-page indicator (`getActiveMenu()`) compares `usePathname()` against route prefixes — if you add a new top-level route that should highlight in the nav, add a branch there.

### Carousels

Two carousel libraries are in use:

- **Swiper** for testimonials (`SuccessStories`), partner logos (`BrandPartners` uses a CSS-only marquee instead of Swiper), and most card decks. Pagination dots are restyled in CSS Modules to be thin underscores (24px → 40px on active) for the editorial feel.
- **react-slick** is in dependencies but most active sections use Swiper — prefer Swiper for new work.

### Brand-name caveats (legacy from rename)

The site was rebranded from "Samyotech" to "IT United". User-visible text and URLs are now all `theitunited.com`, but several **code identifiers were intentionally preserved** to avoid a high-blast-radius refactor:

- React component name `AboutSamyotechComponent` (folder, file, JSX, import)
- JSON key `aboutSamyotechData` in `Homepage.json`
- URL slug `/careers-at-samyotech` (folder under `src/pages/`)
- Image asset filename `career-at-samyotech.png`

Don't blindly rename these — they're load-bearing. Only rename if explicitly asked, and update all import paths, route references, and image paths atomically.

## Notable conventions

- Pages render through `getStaticProps` whenever possible — this site is mostly static content. New pages should follow that pattern (the `[slug]` dynamic routes under `solutions/`, `industries/`, `software-services-company/...` use `getStaticPaths` + `getStaticProps`).
- When a section needs to read structured data, it accepts a `data` prop and the parent page provides it from a content file — do not hardcode copy/labels in JSX.
- `src/components/SeoComponent/SEO.jsx` consumes a `seoData` shape (metadata + openGraph + twitter + jsonLd) — every content file in `constants/` includes a top-level `seoData` block matching this shape.
