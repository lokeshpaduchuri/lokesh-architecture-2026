# Content Guide

Use the typed data files in `src/app/data/` for public-facing content.

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
- Add screenshots or diagrams under `src/assets/images/projects/` and reference them from `screenshots` or `diagrams`.
- Case-study year labels are intentionally marked `Private`.
- Use `TODO_CONFIRM` for unverified screenshots, diagrams, links, and metrics.

## About Content

- Edit `src/app/data/about.data.ts` for the narrative, operating principles, process flow, AI working model, and beyond-code section.

## Skills and Approach

- Edit `src/app/data/skills.data.ts` for core strengths, grouped skills, and homepage approach cards.

## TODO_CONFIRM Cleanup

Before publishing, search the repo for `TODO_CONFIRM` and either verify the value or intentionally leave it if the site should continue hiding the fact.
