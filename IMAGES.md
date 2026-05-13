# Image manifest — every `<img src>` and `url()` path in index.html

All references resolve to **existing, lowercase files**. Verified case-sensitive against the actual filesystem.

## Root-level
- `livelylogo.svg` — nav + footer logo
- `mikewhite.jpg` — Mike White headshot in story section
- `og-image.jpg` — social card (referenced via absolute URL in `<head>`)

## /assets
- `assets/lively-pink.svg` — "How we work" Lively mark (pink)
- `assets/casi-red-i.svg` — "How we work" CASi mark
- `assets/quote-open.png` — testimonial quote-open graphic (CSS)
- `assets/quote-close.png` — testimonial quote-close graphic (CSS)

## /assets/logos (brand strip + testimonial card logos)
- `assets/logos/virgin-color.png`
- `assets/logos/spotify.png`
- `assets/logos/coinbase.png`
- `assets/logos/twitter-x-color.png`
- `assets/logos/ericsson-color.png`
- `assets/logos/ericsson-quote-new.png` — used in Sally Croft testimonial card
- `assets/logos/mazda.avif`
- `assets/logos/polkadot-color.png`
- `assets/logos/hostelworld-color.png`
- `assets/logos/observer.png` — Nico Sarti testimonial
- `assets/logos/tiktok.png` — Stephanie Jeanmougin testimonial

## /assets/work (case study tiles)
- `assets/work/mazda.jpg`
- `assets/work/spotify.jpg`
- `assets/work/coinbase.jpg`
- `assets/work/ericsson-5g.jpg`
- `assets/work/ericsson-silhouette.jpg` — referenced from a hidden tile (kept for restore)
- `assets/work/hostelworld.jpg`
- `assets/work/polkadot.jpg`
- `assets/work/twitter-sheinspires-new.jpeg`

---

**Important when pushing to GitHub:** Some Git clients (especially on macOS with `core.ignorecase=true`) will not detect filename case changes. If you previously pushed any files with different casing (e.g. `CASi_2q26.png`, `Coinbase.png`), Netlify may still serve them at the old path. After pushing this build, double-check the GitHub web UI shows lowercase filenames in every folder above. If anything still looks uppercase in the repo, delete it from GitHub manually, then re-upload.
