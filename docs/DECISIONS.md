# Implementation Decisions

- Used Tailwind utility-first styling to move quickly while keeping typography/spacing consistent with the design docs.
- Used placeholder resume/project content because no canonical personal data was provided; files are structured for easy replacement.
- Implemented modal focus trapping manually (no third-party dependency) to keep bundle size lean.
- Added SVG placeholder images and SVG favicon to avoid binary asset tooling in this environment.
- Deploy script uses explicit placeholders for AWS bucket/distribution, aligned to static hosting on S3 + CloudFront.
