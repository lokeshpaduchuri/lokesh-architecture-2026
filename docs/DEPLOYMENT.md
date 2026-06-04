# Deployment

The site is a static Angular build suitable for manual upload to S3, CloudFront-backed hosting, or another static host.

## Build

```bash
npm run build
```

The production output is expected under:

```text
dist/lokesh-architecture-2026/browser
```

## Manual Upload

This project does not store AWS credentials or include an automated AWS deploy script. Build the site locally:

```bash
npm run build
```

Then upload the contents of:

```text
dist/lokesh-architecture-2026/browser
```

If hosting behind CloudFront or another CDN, confirm the distribution serves `index.html` for Angular routes such as `/work`, `/resume`, `/about`, and `/contact`.

## Required Placeholders

Search for `TODO_CONFIRM` before production deployment. At minimum, confirm:

- Any remaining screenshot, diagram, or external case-study link placeholders
- Whether direct contact form delivery should be wired to a backend
- Whether a downloadable resume should be added later; the current site intentionally has no download action
