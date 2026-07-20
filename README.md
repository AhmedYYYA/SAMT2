# SAMT Ultra-Premium New Design v1.0

This package is a **complete visual redesign** of the SAMT website. It uses the programme information and bilingual content from SAMT v4.1, but it does not reuse the v4.1 page layout or component design.

## Included

- `index.html` — semantic bilingual page structure
- `styles.css` — entirely new dark design system and responsive layout
- `app.js` — bilingual content, station data, GSAP, ScrollTrigger, Lenis, particles, modals and interactions
- `assets/stations/` — approved animated UAE, UK, France and USA SVG scenes
- `docs/` — design, content-source and QA documentation

## Required CDN libraries

The exact requested URLs are included in `index.html`:

- `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
- `https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js`

## Run locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/SAMT_Ultra_Premium_New_Design_v1.0/`.

## GitHub Pages

Upload the complete contents of this folder to the repository root. Do not separate the `assets` directory from `index.html`.

## Design intent

- Premium near-black visual system
- Oversized editorial typography
- GSAP-driven narrative movement
- Pinned horizontal leadership journey
- Scroll-controlled international preparation stations
- Approved animated flag scenes
- Arabic RTL and English LTR
- Desktop, tablet and mobile responsiveness
- Reduced-motion accessibility
