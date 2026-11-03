import type { Project } from '../models/resume.models';

export const PROJECTS: Project[] = (
  [
    {
      slug: 'frontend-platform-modernization',
      title: 'Modernizing Enterprise Frontend Platforms',
      shortTitle: 'Enterprise Platform Modernization',
      visibilityLabel: 'Confidential Case Study',
      domain: 'Enterprise Healthcare',
      category: 'Platform Architecture',
      summary:
        'Retired 15 remaining AngularJS features across 20+ customer workflows while advancing a shared Angular, Ionic, and Capacitor platform.',
      context:
        'Two engineering teams supported customer-facing web and mobile workflows on a mixed legacy and modern frontend foundation.',
      architectureProblem:
        'The remaining AngularJS surface and an aging Angular/mobile baseline increased upgrade coordination and regression risk. Modernization needed a bounded scope without losing sight of product delivery.',
      challenge: [
        'Preserve behavior across 20+ customer workflows while migrating 15 AngularJS features.',
        'Coordinate Angular, Ionic, Capacitor, and deprecated native-plugin changes across web and mobile.',
        'Keep architecture decisions, testing, and cross-team delivery reviewable.',
      ],
      leadershipApproach: [
        'Led hands-on frontend architecture and migration work, coordinating scope across two engineering teams.',
        'Partnered with UX, Product, QA, Backend, and DevOps; retained human architecture, implementation, and review gates.',
      ],
      architectureDecision: [
        'Completed the bounded AngularJS sunset and advanced Angular 16 to Angular 20, addressing both the legacy feature surface and shared platform baseline.',
        'Coordinated Ionic and Capacitor upgrades with deprecated-plugin replacement so web and native dependencies were treated together.',
        'Used reusable Angular/TypeScript patterns and regression validation to make behavior and review expectations explicit during migration.',
      ],
      implementation: [
        'Scoped the remaining 15 AngularJS features across two teams and completed their migration in approximately three months.',
        'Upgraded the shared Angular/mobile foundation and replaced deprecated native plugins.',
        'Combined component validation, automated checks, and human review with delivery work rather than treating quality as a separate story.',
      ],
      supportingSections: [
        {
          title: 'Supporting practice: quality and performance',
          items: [
            'Established WCAG 2.1 AA-aligned accessibility practices, unit/smoke/regression testing, ESLint, and pull-request checks.',
            'Contributed to broader platform test coverage growth from approximately 30% to 70%. This is a platform-quality contribution, not a measured effect attributed solely to this migration.',
            'Regression checks supported continuity; no independently verified IHA page-load improvement or performance-budget result is claimed.',
          ],
        },
      ],
      outcomes: [
        'Retired 15 remaining AngularJS features supporting 20+ workflows across two engineering teams in approximately three months.',
        'Reduced migration effort by approximately 60%.',
        'Established an Angular 20 baseline with Ionic/Capacitor upgrades and replacement of deprecated native plugins.',
      ],
      lessons: [
        'Architecture takeaway: a migration spans feature behavior and framework/native dependencies; validating only the framework upgrade leaves important risks unaddressed.',
        'Architecture takeaway: broader quality gains and migration-specific results need separate scopes to avoid overstating causality.',
      ],
      measurableImpact: '15 features · 20+ workflows · ~3 months',
      technologies: [
        'Angular 20',
        'TypeScript',
        'AngularJS Migration',
        'Ionic',
        'Capacitor',
        'WCAG 2.1 AA',
        'Component Testing',
        'ESLint',
        'CI/CD',
      ],
      screenshots: [],
      architectureFlow: [
        '15 legacy AngularJS features / 20+ workflows',
        'Angular 16-to-20 shared baseline',
        'Ionic / Capacitor and native-plugin compatibility',
        'Unit, smoke, regression and accessibility checks',
        'Cross-team implementation and human review',
      ],
      links: [],
      featured: true,
      displayOrder: 1,
      confidentialityNote:
        'Public-safe summary. Proprietary implementation details omitted; approximate metrics are user-reported.',
    },
    {
      slug: 'design-system-governance',
      title: 'Building a Shared UI Platform Across Teams',
      shortTitle: 'Shared UI Platform',
      visibilityLabel: 'Confidential Case Study',
      domain: 'Enterprise Product Platform',
      category: 'Design Systems',
      summary:
        'Turned reusable Angular components into a governed platform through explicit contracts, Storybook validation, and private npm release policies.',
      context:
        'Multiple product teams needed shared UI behavior across Angular web and Ionic mobile applications rather than repeated application-specific implementations.',
      architectureProblem:
        'A component library alone could not define compatibility, publication rights, or supported behavior. Consumers needed a dependable platform contract as well as reusable code.',
      challenge: [
        'Support shared behavior and application variation without duplicating components.',
        'Keep three consuming teams and three applications aligned while governing packages across a broader four-team, approximately 12-developer scope.',
        'Translate UX intent into APIs that engineers could validate and reuse.',
      ],
      leadershipApproach: [
        'Built shared Angular/TypeScript components and defined component contracts with UX through Figma and feasibility reviews.',
        'Governed package adoption across four teams and approximately 12 developers; embedded architecture review in backlog grooming and required approval before publication.',
      ],
      architectureDecision: [
        'Defined inputs, outputs, events, states, extension points, composition, and responsive behavior in Storybook so consumers could inspect the contract.',
        'Used private npm packages, Semantic Versioning, and supported-version policies to make compatibility and publication expectations explicit.',
        'Made web/mobile variation configurable in a shared input component, including icons, dropdowns, and validation states.',
      ],
      implementation: [
        'Standardized 15 reusable Angular and TypeScript components across three applications and three consuming teams.',
        'Validated component behavior in Storybook and used architecture approval before publishing shared packages.',
        'Connected design feasibility, component contracts, and package governance to normal team planning rather than treating reuse as code distribution alone.',
      ],
      outcomes: [
        'Reduced duplicate implementations by approximately 40%.',
        'Delivered 15 shared components used across three applications and three consuming teams.',
        'Established explicit compatibility, supported-version, and publishing expectations across the broader governance scope.',
      ],
      lessons: [
        'Architecture takeaway: reusable components solve implementation repetition; platform governance also needs contracts, supported versions, and publication decisions.',
        'Architecture takeaway: distinguish consuming-team adoption from the larger governance population when reporting reach.',
      ],
      measurableImpact: '15 components · 3 applications · ~40% less duplication',
      technologies: [
        'Angular',
        'TypeScript',
        'Ionic',
        'Private npm Packages',
        'Semantic Versioning',
        'Storybook',
        'Figma',
        'Accessibility',
      ],
      screenshots: [],
      architectureFlow: [
        'UX feasibility and shared behavior',
        'Inputs / outputs / states / composition contracts',
        'Storybook validation',
        'Architecture approval and semantic version',
        'Private npm publication and supported versions',
        'Three applications / three consuming teams',
      ],
      links: [],
      featured: true,
      displayOrder: 2,
      confidentialityNote:
        'Public-safe summary. Internal component and product names omitted; approximate metrics are user-reported.',
    },
    {
      slug: 'ai-assisted-engineering-workflows',
      title: 'AI-Assisted Engineering at Team Scale',
      shortTitle: 'AI-Assisted Engineering',
      visibilityLabel: 'Confidential Case Study',
      domain: 'Engineering Enablement',
      category: 'Developer Experience',
      summary:
        'Grounded AI-assisted delivery in requirements, design context, and versioned frontend skills, with human decision gates for approximately 15 developers.',
      context:
        'Developers were applying AI assistance to feature and migration work. The opportunity was a repeatable engineering workflow, not an autonomous shipping system.',
      architectureProblem:
        'Ungrounded assistance could produce plausible changes without the product context or architectural judgment needed for reviewable implementation.',
      challenge: [
        'Bring requirements, design intent, and existing implementation context into the local development workflow.',
        'Reduce repeated engineering effort without transferring architecture or release accountability to AI.',
        'Make testing, documentation, and review part of execution rather than optional follow-up.',
      ],
      leadershipApproach: [
        'Designed a staged, human-in-the-loop workflow and versioned frontend skills for team use.',
        'Kept architecture, implementation, and review approval human-owned; engineers remained responsible for release decisions.',
      ],
      architectureDecision: [
        'Grounded local Visual Studio Code work in Azure DevOps work items, Figma MCP, and prior implementation context rather than using a prompt without project context.',
        'Used versioned HTML, TypeScript, CSS, and unit-testing skills to carry repeatable implementation expectations.',
        'Separated research/planning and decision review from implementation, testing, end-to-end validation, review, and refinement.',
      ],
      implementation: [
        'Used requirements and design context for architecture exploration and implementation planning before code changes.',
        'Applied AI assistance to implementation, test generation, documentation, and review within the staged workflow.',
        'Retained human decisions at architecture, implementation, and review checkpoints across feature and migration initiatives.',
      ],
      outcomes: [
        'Adoption reached approximately 15 developers across 5-6 feature or migration initiatives per sprint.',
        'Reduced engineering effort by approximately 30% while retaining human review gates.',
      ],
      lessons: [
        'Architecture takeaway: repeatable assistance depends on requirements and design context, not only the choice of model or editor.',
        'Architecture takeaway: effort reduction does not remove the need for testing or human accountability.',
      ],
      measurableImpact: '~15 developers · ~30% less engineering effort',
      technologies: [
        'Visual Studio Code',
        'Azure DevOps',
        'Figma MCP',
        'Versioned Frontend Skills',
        'GitHub Copilot',
        'Codex',
      ],
      screenshots: [],
      architectureFlow: [
        'Azure DevOps requirements + Figma MCP + prior context',
        'Research and planning with versioned skills',
        'Human architecture / decision review',
        'Implementation, tests and documentation',
        'End-to-end validation and review',
        'Human approval and refinement',
      ],
      links: [],
      featured: true,
      displayOrder: 3,
      confidentialityNote:
        'Public-safe summary. Internal work items, designs, repositories, and prompts omitted; approximate metrics are user-reported.',
    },
    {
      slug: 'legacy-react-to-angular-20',
      title: 'From Legacy React to Angular 20',
      shortTitle: 'Legacy React to Angular 20',
      measurableImpact: 'Public code · Accessible case studies · Static deployment',
      visibilityLabel: 'Public Project',
      domain: 'Personal Brand Platform',
      category: 'Frontend Modernization',
      summary:
        'Rebuilt this React-based personal website as a typed, accessible Angular 20 portfolio with reusable case studies and a repeatable static deployment workflow.',
      context:
        'An aging React SPA no longer communicated current frontend architecture work. This repository is the public implementation of its replacement.',
      architectureProblem:
        'The site needed maintainable career content, credible architectural storytelling, responsive interactions, and discoverable route metadata without unnecessary application complexity.',
      challenge: [
        'Keep enterprise examples public-safe while making the website implementation inspectable.',
        'Support keyboard navigation, modal deep links, theme persistence, mobile layouts, and print-friendly resume content.',
        'Publish static build output to S3 and refresh CloudFront without stale HTML referencing missing hashed bundles.',
      ],
      leadershipApproach: [
        'Owned content strategy, architecture principles, UX requirements, accessibility expectations, and the deployment approach.',
        'Used Codex as an implementation partner while keeping final architecture, UX, and content decisions human-owned.',
      ],
      architectureDecision: [
        'Used Angular 20 standalone components and Angular Router as a route-based static application, without adding an application backend.',
        'Separated typed profile/experience/project/skills/About content from external HTML templates; centralized authored interface copy in a UI text enum.',
        'Reused card, modal, theme, and responsive-image components; kept domain data and navigation local rather than prematurely extracting a shared npm platform.',
        'Implemented route metadata and Schema.org JSON-LD as SEO foundations, without claiming ranking or traffic improvements.',
      ],
      implementation: [
        'Added persistent light/dark themes, responsive navigation, accessible modal focus handling, Escape close, and query-parameter case-study links.',
        'Reserved image dimensions, supplied responsive previews, and used lightweight IntersectionObserver reveals with reduced-motion and print support.',
        'Prepared index metadata from centralized copy before builds and added template-copy checks and content contract tests.',
        'The deployment script cleans browser output, builds production assets, syncs the browser directory to S3 with --delete, and requests a CloudFront /* invalidation using an environment-provided distribution ID.',
        'Added a gzip-enabled local production preview with correct MIME types, extensionless SPA fallback, and 404 responses for missing asset files.',
      ],
      outcomes: [
        'Replaced the legacy React SPA with an Angular 20 standalone architecture and reusable typed case-study system.',
        'Added keyboard-accessible case studies, persistent themes, route metadata, structured data, and responsive/print layouts.',
        'Established build, S3 sync, and CloudFront invalidation scripts for repeatable deployment.',
        'Production speed, search ranking, and traffic improvements are not claimed without comparable measurements.',
      ],
      lessons: [
        'Architecture takeaway: keep public implementation evidence separate from confidential enterprise outcomes.',
        'Architecture takeaway: production-build testing and coordinated HTML/asset cache updates matter; development-server scores are not production benchmarks.',
      ],
      technologies: [
        'Angular 20',
        'TypeScript',
        'Standalone Components',
        'Angular Router',
        'Tailwind CSS',
        'SEO Metadata',
        'Schema.org JSON-LD',
        'AWS S3',
        'CloudFront',
        'Codex',
      ],
      screenshots: ['/assets/images/projects/portfolio-implementation.png'],
      screenshotDescriptions: [
        'Actual portfolio homepage with architecture positioning, work and contact actions, and a career evidence strip. No confidential product screens are shown.',
      ],
      architectureFlow: [
        'Legacy React SPA and content review',
        'Angular 20 standalone routes',
        'Typed career content and centralized UI copy',
        'Accessible modal case studies and themes',
        'Route metadata and Schema.org JSON-LD',
        'Production build / S3 sync / CloudFront invalidation',
      ],
      links: [
        { label: 'Live website', url: 'https://lokeshpaduchuri.com', public: true },
        {
          label: 'Source repository',
          url: 'https://github.com/lokeshpaduchuri/lokesh-architecture-2026',
          public: true,
        },
      ],
      featured: false,
      displayOrder: 4,
      confidentialityNote:
        'Public implementation. The live website and default repository branch may lag these local changes until review and deployment.',
    },
  ] satisfies Project[]
).sort((a, b) => a.displayOrder - b.displayOrder);

// Preserve shared links to the former standalone quality story without adding a fifth card.
export const PROJECT_SLUG_ALIASES: Readonly<Record<string, string>> = {
  'performance-governance': 'frontend-platform-modernization',
};

export function findProjectBySlug(slug: string): Project | undefined {
  const canonicalSlug = Object.prototype.hasOwnProperty.call(PROJECT_SLUG_ALIASES, slug)
    ? PROJECT_SLUG_ALIASES[slug]
    : slug;
  return PROJECTS.find((project) => project.slug === canonicalSlug);
}
