# lokesh-architecture-2026

Modern “resume on the web” personal site for Lokesh Paduchuri, built with Angular 20.
Focused on _what I do_ and _how I do it_ — with modal-based case studies, strong UX polish, SEO fundamentals, and performance-first delivery.

---

## ✨ Highlights

- Angular 20 (standalone components + router)
- Resume-style layout + print-friendly `/resume`
- Work grid with **modal case studies** and deep-link support
- Dark-first theme toggle with polished light mode and `localStorage` persistence
- SEO fundamentals (per-route tags + JSON-LD)
- Static build output suitable for manual hosting upload
- Four differentiated case studies, with three enterprise stories featured on Home and preserved legacy modal links

## 🧱 Tech Stack

- Angular 20
- Tailwind CSS
- CSS transitions/keyframes only

## 🚀 Run locally

```bash
npm install
npm start
```

## 🧪 Quality checks

```bash
npm run lint
npm run test:content
npm run build
```

For Lighthouse or a production-build preview, run `npm run preview` and use `http://127.0.0.1:4300`. See `docs/PERFORMANCE_TESTING.md` for comparison settings.

## ☁️ Deploy

```bash
npm run build
```

Upload the generated `dist/lokesh-architecture-2026/browser` files to your hosting target manually.
Alternatively, the existing `npm run deploy` script builds, syncs S3 and invalidates CloudFront; see `docs/DEPLOYMENT.md` before running it.

## 📚 Docs

- `docs/ARCHITECTURE_REVIEW.md` — platform-lab findings, content provenance, and enum-based editing workflow
- `docs/CONTENT_AUDIT.md` — consolidation plan, achievement ledger and outstanding evidence questions
- `docs/VISION.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/DATA_SCHEMA.md`
- `docs/CONTENT_GUIDE.md`
- `docs/DEPLOYMENT.md`
- `docs/QA_CHECKLIST.md`
- `docs/DEFINITION_OF_DONE.md`
- `docs/CONTENT_UPDATES.md`
- `docs/DECISIONS.md`
