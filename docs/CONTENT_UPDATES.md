# Content Update Notes

## Updating project metadata
1. Edit `src/app/data/projects.ts`.
2. Follow the `Project` type from `src/app/models/resume.models.ts`.
3. Keep `slug` unique and URL-safe because `/work?project=<slug>` drives modal deep-linking.
4. Add screenshots under `src/assets/images/projects/` and reference absolute asset paths.

## Updating resume/profile data
- Edit `src/app/data/resume.ts` for profile, strengths, experience, education, and contact links.
- The pages read directly from these typed exports, so changes are reflected immediately.

## Deep-link behavior
- Opening a project updates query param: `project=<slug>`.
- Loading `/work?project=<slug>` auto-opens matching modal.
- Closing modal removes query param without changing routes.
- Browser back/forward works with open/close states because state is URL-driven.
