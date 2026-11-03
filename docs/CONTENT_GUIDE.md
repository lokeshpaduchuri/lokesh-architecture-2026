# Content Guide

Use the typed data files in `src/app/data/` for public-facing content.

## Labels and Template Copy

- Edit `src/app/content/ui-text.enums.ts` for labels, buttons, accessibility copy, and static presentation text.
- Bind copy through each component's `text` property. Do not place authored display or accessibility strings directly in templates.
- Structural HTML values (classes, route paths, IDs, roles, and layout sizes) remain in templates.
- `npm run lint` includes the Angular-parser template audit. `npm run test:content` tests the rule against accepted and rejected examples.
- Initial document title and descriptions use enum tokens in `src/index.html`. `npm start` and `npm run build` render these into `.generated/index.html` automatically. Run `npm run prepare:index` first when using the Angular CLI directly.

## Profile and Links

- Edit `src/app/data/profile.data.ts` for name, titles, summary, site URL, LinkedIn, and GitHub.
- Keep `emailIsPublic` false unless Lokesh explicitly decides to publish an email address later.
- The current public contact channels are LinkedIn and GitHub.

## Resume and Experience

- Edit `src/app/data/experience.data.ts` for roles, bullets, technologies, dates, education, and employer display preferences.
- Employer labels support `publicCompanyName`, `anonymizedCompanyName`, and `usePublicCompanyName`.
- Current employer visibility is public.
- Education dates are intentionally labeled private because the provided resume confirms institutions and degrees but not dates.

## Work and Case Studies

- Edit `src/app/data/projects.data.ts`.
- Keep each `slug` unique and URL-safe because `/work?project=<slug>` opens the modal.
- Use public-safe summaries only. Do not include private client details, internal URLs, proprietary implementation details, or unverified metrics.
- Add architecture images under `src/assets/images/projects/` and reference originals from `screenshots`. Configure responsive image metadata in `project-images.data.ts`.
- `architectureFlow` supports a text-based architecture sequence when an illustration would repeat obsolete evidence. The legacy `diagrams` field is not rendered by the modal.
- Use `visibilityLabel` for `Confidential Case Study` or `Public Project`. Omit optional `yearLabel` unless a year is verified.
- Keep unverified evidence in review documentation rather than published content. Do not turn a proposed architecture or assessment into a completed-work claim.

## About Content

- Edit `src/app/data/about.data.ts` for the narrative, operating principles, process flow, and beyond-code section. The three AI perspective blocks use `UiText`.

## Skills and Approach

- Edit `src/app/data/skills.data.ts` for core strengths, grouped skills, and homepage approach cards.

## TODO_CONFIRM Cleanup

Before publishing, search for `TODO_CONFIRM`. Resolve or omit unverified content; do not leave placeholders in rendered pages.
