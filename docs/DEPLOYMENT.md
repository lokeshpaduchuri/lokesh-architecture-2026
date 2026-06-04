# Deployment

The site is a static Angular build suitable for S3 and CloudFront.

## Build

```bash
npm run build
```

The production output is expected under:

```text
dist/lokesh-architecture-2026/browser
```

## S3 and CloudFront

`package.json` includes a placeholder deployment command:

```bash
npm run deploy
```

Before using it, replace:

- `YOUR_BUCKET_NAME`
- `YOUR_DISTRIBUTION_ID`

Confirm the CloudFront distribution serves `index.html` for Angular routes such as `/work`, `/resume`, `/about`, and `/contact`.

## Required Placeholders

Search for `TODO_CONFIRM` before production deployment. At minimum, confirm:

- Any remaining screenshot, diagram, or external case-study link placeholders
- Whether direct contact form delivery should be wired to a backend
- Whether a downloadable resume should be added later; the current site intentionally has no download action
