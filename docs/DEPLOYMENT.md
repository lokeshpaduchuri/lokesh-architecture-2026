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

This project does not store AWS credentials. Manual upload remains supported. Build the site locally:

```bash
npm run build
```

Then upload the contents of:

```text
dist/lokesh-architecture-2026/browser
```

If hosting behind CloudFront or another CDN, confirm the distribution serves `index.html` for Angular routes such as `/work`, `/resume`, `/about`, and `/contact`.

## Scripted Deployment

The existing `npm run deploy` script cleans browser output, builds with the production configuration, syncs the browser directory to `s3://lokeshpaduchuri.com` with `--delete`, then requests a CloudFront `/*` invalidation. Set `CLOUDFRONT_DISTRIBUTION_ID` and use an authenticated local AWS CLI profile. Distribution IDs are configuration, not credentials.

This changes live hosting and removes remote objects absent from the build. Review the output directory and target bucket before running it. The content audit does not run deployment.

## Editorial Verification

Search for `TODO_CONFIRM` before production deployment. At minimum, confirm:

- Any remaining screenshot, diagram, or external case-study link placeholders
- Measurement methodology and personal retrospectives listed in CONTENT_AUDIT.md
- Whether a downloadable resume should be added later; the current site intentionally has no download action
