# Content Update Notes

## Updating project metadata

1. Edit `src/app/data/projects.data.ts` (the compatibility export is not the content source).
2. Follow the `Project` type from `src/app/models/resume.models.ts`.
3. Keep `slug` unique and URL-safe because `/work?project=<slug>` drives modal deep-linking.
4. Add screenshots under `src/assets/images/projects/` and reference absolute asset paths.

## Updating resume/profile data

- Edit profile.data.ts, experience.data.ts and skills.data.ts under `src/app/data/` for profile, experience, education, skills and contact content.
- The pages read directly from these typed exports, so changes are reflected immediately.

## Deep-link behavior

- Opening a project updates query param: `project=<slug>`.
- Loading `/work?project=<slug>` auto-opens matching modal.
- Closing modal removes query param without changing routes.
- Browser back/forward works with open/close states because state is URL-driven.
- The former performance-governance slug opens modernization, where its verified quality contribution is preserved.

## Evidence and review

- Read CONTENT_AUDIT.md before adding claims or splitting initiatives.
- Keep four differentiated stories, three enterprise featured entries, and all eight narrative fields.
- Keep unresolved TODO_CONFIRM items in the editorial audit, not as public placeholders.
- Run `npm run test:content`, `npm run lint` and `npm run build`.
