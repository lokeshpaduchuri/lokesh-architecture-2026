# Implementation Decisions

- Used Tailwind utility-first styling to move quickly while keeping typography/spacing consistent with the design docs.
- Replaced placeholder content with a typed public-safe content layer. Unverified facts are tracked as TODO_CONFIRM in CONTENT_AUDIT.md, not published as placeholders.
- Retained the restrained black-and-green identity with the current neutral charcoal palette and muted green accents for actions, focus, filters and markers.
- Made dark mode the first impression while preserving the existing theme toggle and `localStorage` persistence. This better supports a premium architecture portfolio tone while keeping light mode polished.
- Redesigned `/resume` as a web-native career timeline with a compact profile sidebar, configurable employer labels, semantic sections, and print-friendly styles.
- Updated employer visibility to public after confirmation and populated public role history from the attached resume.
- Kept email unpublished; Contact uses LinkedIn and GitHub without an inactive form.
- Removed resume download and print actions from the public resume page to keep the experience focused on the web-native timeline.
- Kept case studies anonymized and executive-readable. The project schema now supports architecture problem, challenge, decisions, leadership approach, outcomes, measurable impact, technologies, visual placeholders, links, display ordering, and confidentiality notes.
- Implemented modal focus trapping manually (no third-party dependency) to keep bundle size lean.
- Consolidated Work into four source-backed narratives with three enterprise featured entries; quality supports modernization. Preserved the former quality deep link via an alias.
- Replaced rendered enterprise infographics with accessible typed HTML flows and the public infographic with an actual homepage screenshot. Original artwork remains retained but unlinked.
- Deployment cleans browser output, builds production assets, syncs to the site S3 bucket and invalidates CloudFront using an environment-provided distribution ID. Credentials remain outside the repository.
- See CONTENT_AUDIT.md for the pre-edit achievement ledger, evidence boundaries and unresolved personal retrospectives/rejected alternatives.
