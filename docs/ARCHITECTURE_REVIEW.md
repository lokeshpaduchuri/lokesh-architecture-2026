# Portfolio architecture and content review

## Source boundaries

- Frontend Platform Lab: **Design shared NPM architecture**, thread `01a05eac-0f41-7652-8cc8-b2e69feed895`. This is a read-only assessment of multiple applications, including the older `lokeshpaduchuri/angular-portfolio` application. It is not evidence that shared packages were extracted or that consumer upgrades were completed.
- Career evidence: **Job Application Engine**, thread `01a03f4a-98c2-74e1-9ee8-84771403cf77`, and the approved-evidence change logs in the resume workspace. Later user corrections take precedence over older portfolio copy.
- This repository is already an Angular 20 standalone application. The Angular 17 migration plan for the other portfolio does not apply here.

## Applied architecture decisions

1. Keep navigation, cards, case-study behavior, domain models, and brand presentation local. No shared npm package is introduced.
2. Extract only the repeated responsive architecture-image rendering into a local standalone primitive. Explicit dimensions, responsive source selection, lazy loading, and alt text have a single rendering path.
3. Keep image metadata separate from the image component. App-specific asset URLs do not become a generic component contract.
4. Keep career and case-study content in typed data files. Shared labels, accessibility copy, and presentation text live in `UiText`.
5. Generate initial shell metadata from the same enum before development or production builds. Angular bindings cannot supply the initial static document title to a crawler before bootstrapping.
6. Enforce the template-content boundary using Angular's own template parser, including accessible names and literal fragments in display expressions.

## Career corrections

- Official current title: Principal UI/UX & Front End Architect.
- Current modernization: Angular 16 to Angular 20, with Ionic and Capacitor upgrades.
- Migration scope: 15 features, 20+ workflows, two engineering teams, approximately three months; approximately 60% lower migration effort.
- Component reuse: 15 components across three applications and three consuming teams; approximately 40% fewer duplicate implementations.
- Package governance: four teams and approximately 12 developers. This is a separate scope from the three consuming teams above.
- Automated test coverage: approximately 30% to 70%. These are coverage endpoints, not a latency metric.
- AI workflow: approximately 15 developers, 5–6 initiatives per sprint, approximately 30% less engineering effort; human architecture, implementation, and review gates remain explicit.
- Atlas Air: React and TypeScript for Crew Connect, superseding the older Angular/Firebase wording.
- The unvalidated IHA page-load latency claim is removed. Its old illustration is archived in `docs/reference/performance-governance-unverified.png`, outside the deployable assets, because it repeats that claim.
- Private contact details, compensation, application targets, and work-authorization discussions are not published.

## Editing and verification

- Edit UI copy in `src/app/content/ui-text.enums.ts` and career facts in `src/app/data/`.
- HTML keeps structural values such as classes, routes, IDs, ARIA roles, and layout sizes. Authored display and accessibility copy must be bound.
- `src/index.html` is the shell template. Its `@@UiTextKey@@` placeholders are rendered into ignored `.generated/index.html`.
- Use `npm start`, `npm run build`, or `npm run watch`; each prepares the shell first. If invoking `ng` directly, run `npm run prepare:index` first. Restart the development command after editing initial shell metadata.
- Run `npm run lint` (includes the template audit), `npm run test:content`, and `npm run build`.

## Deliberately deferred

- Cross-repository npm extraction and Angular upgrades in other applications.
- A single shared navigation/card/domain-model package.
- SSR or hydration changes to this static client-rendered portfolio.
- Replacing legacy structural directives, state APIs, or the build toolchain during a content/UX update.
- Semantic token package distribution. Theme values remain local until multiple consumers demonstrate a stable contract; brands should not inherit a single shared palette.
