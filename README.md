# Jack — 3D Creator Portfolio

React + TypeScript + Tailwind CSS + Framer Motion single-page portfolio.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs a static site into `dist/`.

## Deploy

**Vercel (recommended for Vite projects)**
1. Push this folder to a GitHub repo (or drag-and-drop the folder at vercel.com/new).
2. Vercel auto-detects Vite — just click Deploy.

**Netlify**
1. Run `npm run build` locally first.
2. Drag the generated `dist/` folder onto netlify.com/drop.

**GitHub Pages**
1. Run `npm run build`.
2. Push the contents of `dist/` to a `gh-pages` branch, or use the `gh-pages` npm package.

## Notes
- All images (hero portrait, decorative 3D icons, marquee GIFs, project shots) are hotlinked from their original hosts. Replace with your own assets before a real launch if you don't control those URLs long-term.
- Google Font "Kanit" is loaded via a CDN link in `index.html`.
