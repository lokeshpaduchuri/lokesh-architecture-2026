# Implementation Decisions

- Used Tailwind utility-first styling to move quickly while keeping typography/spacing consistent with the design docs.
- Replaced placeholder resume/project content with a typed public-safe content layer. Unverified facts use `TODO_CONFIRM` rather than invented dates, employer names, screenshots, links, or metrics.
- Adopted a restrained black-and-green identity: dark mode defaults to `#020617`, elevated surfaces use slate tones, and green is reserved for CTAs, focus states, active filters, timeline markers, subtle hover borders, and small proof/impact highlights.
- Made dark mode the first impression while preserving the existing theme toggle and `localStorage` persistence. This better supports a premium architecture portfolio tone while keeping light mode polished.
- Redesigned `/resume` as a web-native career timeline with a compact profile sidebar, configurable employer labels, semantic sections, and print-friendly styles.
- Updated employer visibility to public after confirmation and populated public role history from the attached resume.
- Kept public email unpublished to reduce spam exposure. Contact currently uses LinkedIn and GitHub, with direct form delivery documented as a future backend integration point.
- Removed resume download and print actions from the public resume page to keep the experience focused on the web-native timeline.
- Kept case studies anonymized and executive-readable. The project schema now supports architecture problem, challenge, decisions, leadership approach, outcomes, measurable impact, technologies, visual placeholders, links, display ordering, and confidentiality notes.
- Implemented modal focus trapping manually (no third-party dependency) to keep bundle size lean.
- Added SVG placeholder images and SVG favicon to avoid binary asset tooling in this environment.
- Deploy script uses explicit placeholders for AWS bucket/distribution, aligned to static hosting on S3 + CloudFront.
