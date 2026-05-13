# Lively Worldwide — Production Site

Static site for **livelyww.com**. Built as a single HTML page with inline CSS, optimized for SEO + AEO.

## Quick start

This folder is **production-ready**. Drop it into a GitHub repo and connect that repo to Netlify with:
- **Publish directory:** `/` (or `deploy/` if you keep the parent structure)
- **Build command:** *none* (static)

## What's in here

```
deploy/
├── index.html            ← The site
├── netlify.toml          ← Headers + www→root redirect
├── robots.txt            ← Allow all + sitemap pointer
├── sitemap.xml           ← Single URL (homepage)
├── og-image.jpg          ← 1200×630 social card
├── *.svg / *.png / *.jpg ← Brand logos + Mike's headshot
└── assets/               ← Case-study photos + quote graphics
    ├── logos/            ← Brand row + testimonial logos
    └── work/             ← Case-study imagery
```

## What's already configured

### SEO + AEO
- Unique `<title>`, meta description, canonical
- Open Graph + Twitter Card (image: `/og-image.jpg`)
- JSON-LD: Organization, Person (Mike), WebSite, Services (×2), Reviews (×2), FAQ (×5)
- Semantic HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- One H1, logical H2/H3 hierarchy
- All images carry descriptive `alt` text

### Accessibility
- WCAG AA contrast on hero
- `:focus-visible` styled
- `prefers-reduced-motion` honored
- Keyboard navigable

### Performance
- Tweaks panel (React/Babel dev triplet) stripped — design tooling, not production
- Only one Google Fonts request (Poppins, used everywhere)
- Case-study `<img>` tags have explicit `width/height` to prevent CLS
- `loading="lazy"` on off-screen imagery
- Asset caching via `netlify.toml` headers (1-year immutable on `/assets/*`)

### Security
- `netlify.toml` sets `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`

## To do after deploy

1. **DNS / SSL** — point `livelyww.com` at Netlify; Netlify auto-provisions SSL.
2. **Confirm www redirect** — `netlify.toml` already redirects `www.livelyww.com` → `livelyww.com`. Adjust direction if you'd rather keep `www`.
3. **Submit sitemap** — Google Search Console + Bing Webmaster Tools.
4. **Add Google Analytics (GA4)** — paste the snippet just before `</head>` in `index.html`.
5. **Cookie/privacy banner** — required if GA is added and you have EU/UK visitors.

## Calendar + newsletter links

Update these if either URL changes:
- Calendar: `https://calendar.app.google/8BD4viZodJMxfCtB9`
- Newsletter: `https://newsletter.audience101.co`

Both appear in `index.html` (search for the URLs to find all instances).

## Pricing

Current pricing in three places — keep them aligned:
- Visible pricing cards (Executive Partnership $5,000/mo + $10,000 set-up · Delivery $7,500/mo)
- JSON-LD Service schemas at `5000` and `7500`
- FAQ schema "What does it cost?" answer

---

Built May 2026. Questions: hi@livelyww.com
