# Testing portfolio performance

`npm start` serves the Angular development configuration. It includes unoptimized JavaScript, development tooling, and source maps. Use it for implementation, not for a production Lighthouse baseline.

Run:

```sh
npm run preview
```

This builds the production artifact and serves it at `http://127.0.0.1:4300` with text compression, correct asset MIME types, and route-only SPA fallback. It introduces no dependency or deployment change. Set `PORTFOLIO_PREVIEW_PORT` to choose another port.

For a meaningful comparison:

- Audit the same route before and after, using the same Lighthouse preset, throttling, and viewport.
- Use a clean browser profile without extensions and avoid concurrent builds or heavy applications.
- Run several times and compare the median rather than a single score.
- Inspect the expanded LCP, dependency-tree, and image-delivery details rather than inferring a cause from the score alone.
- Repeat against the deployed site; local compression does not prove CloudFront cache/compression settings or real-network latency.

## Image delivery

The public portfolio case study now uses an actual 1280-by-650 homepage screenshot with intrinsic dimensions reserved by ArchitectureImageComponent. Enterprise architecture flows are semantic HTML, not raster infographics. Earlier responsive JPEG infographic candidates remain retained but are no longer referenced by the rendered stories.

No Lighthouse score improvement is claimed until a fresh production audit is collected. An 80 score on `/work` and a 64 score on `/` are different pages, not a controlled before/after comparison.

## Initial layout-shift investigation (2026-11-03)

- User-reported Lighthouse CLS: 0.157. The full report/preset was not supplied, so this is not a controlled before/after benchmark.
- A temporary local PerformanceObserver trace against production output at 1280-by-720 recorded a 0.1041667 shift: the footer painted at y=645 with 75px visible height, then moved outside the viewport when the lazy route activated.
- Enabled Angular withEnabledBlockingInitialNavigation so the initial lazy route resolves before the app shell is rendered. Kept route splitting, in-memory scrolling, page layouts, images and motion unchanged.
- Subsequent initial-load traces on Home, Work, Resume, About and Contact at 1280-by-720 and 390-by-720 recorded no unexpected layout-shift entries during the observed load windows. These are local browser traces, not Lighthouse scores or field CLS.
- Checked direct case-study loading, modal Back behavior, and normal route navigation after the bootstrap change. Production build, lint and eleven regression tests pass.
- The observer ran only through a temporary local diagnostic proxy, not in production assets. Rerun Lighthouse on the same 4300 route and preset, then repeat after deployment.

If the preview server is already running, use `npm run build` and refresh it instead of starting another listener on port 4300.
