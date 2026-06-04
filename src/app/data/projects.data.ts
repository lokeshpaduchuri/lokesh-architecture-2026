import { Project } from '../models/resume.models';

export const PROJECTS: Project[] = [
  {
    slug: 'frontend-platform-modernization',
    title: 'Frontend Platform Modernization',
    shortTitle: 'Platform Modernization',
    yearLabel: 'Private',
    domain: 'Enterprise Healthcare',
    category: 'Platform Architecture',
    summary:
      'Modernized a fragmented frontend ecosystem into a more maintainable Angular and Ionic platform with shared standards, reusable patterns, and stronger delivery guardrails.',
    architectureProblem:
      'Multiple frontend surfaces needed a clearer modernization path, consistent patterns, and improved long-term maintainability.',
    challenge: [
      'Reduce architectural fragmentation without disrupting active product delivery.',
      'Improve consistency across consumer-facing web and mobile experiences.',
      'Create a modernization path that teams could adopt incrementally.'
    ],
    architectureDecision: [
      'Defined reusable frontend patterns and shared architectural guidance.',
      'Supported Angular and Ionic modernization with a maintainability-first approach.',
      'Introduced governance practices that balanced platform consistency with team delivery needs.'
    ],
    leadershipApproach: [
      'Partnered across UX, Product, QA, Backend, DevOps, and engineering teams.',
      'Used standards, reviews, and documentation to improve adoption.'
    ],
    outcomes: [
      'Improved platform maintainability and frontend consistency.',
      'Strengthened release confidence and modernization readiness.'
    ],
    technologies: ['Angular', 'Ionic', 'TypeScript', 'CI/CD', 'Architecture Decision Records'],
    screenshots: ['/assets/images/projects/frontend-platform-modernization.png'],
    links: [],
    featured: true,
    displayOrder: 1,
    confidentialityNote: 'Public-safe summary. Proprietary implementation details intentionally omitted.'
  },
  {
    slug: 'performance-governance',
    title: 'Frontend Performance Governance',
    shortTitle: 'Performance Governance',
    yearLabel: 'Private',
    domain: 'Enterprise Web Platform',
    category: 'Performance',
    summary:
      'Established a performance-focused frontend practice using budgets, optimization standards, and measurable quality guardrails.',
    architectureProblem: 'Performance needed to become an engineering standard rather than a late-stage optimization task.',
    challenge: [
      'Improve responsiveness while preserving delivery velocity.',
      'Create repeatable performance expectations across teams.'
    ],
    architectureDecision: [
      'Defined frontend performance governance practices and measurable standards.',
      'Introduced optimization reviews and quality guardrails.'
    ],
    leadershipApproach: ['Aligned engineering teams around performance as a shared product-quality responsibility.'],
    outcomes: [
      'Contributed to approximately 20% lower page-load latency.',
      'Improved awareness and consistency around frontend performance decisions.'
    ],
    measurableImpact: '~20% lower page-load latency',
    technologies: ['Angular', 'TypeScript', 'Performance Budgets', 'CI/CD Guardrails', 'Web Performance'],
    screenshots: ['/assets/images/projects/performance-governance.png'],
    links: [],
    featured: true,
    displayOrder: 2,
    confidentialityNote: 'Public-safe summary. Internal benchmarks and implementation details intentionally omitted.'
  },
  {
    slug: 'design-system-governance',
    title: 'Design System and UI Governance',
    shortTitle: 'Design System Governance',
    yearLabel: 'Private',
    domain: 'Enterprise Product Platform',
    category: 'Design Systems',
    summary:
      'Improved cross-team UI consistency through reusable standards, Storybook documentation, and architecture decision records.',
    architectureProblem:
      'Teams needed shared patterns and documentation to reduce inconsistency and repeated implementation effort.',
    challenge: [
      'Create reusable UI foundations that support multiple teams.',
      'Improve collaboration between Design and Engineering.',
      'Increase adoption without creating unnecessary friction.'
    ],
    architectureDecision: [
      'Introduced Storybook-backed reusable UI documentation.',
      'Used architecture decision records and standards to clarify implementation guidance.',
      'Established a governance model focused on consistency, accessibility, and maintainability.'
    ],
    leadershipApproach: ['Partnered with UX and engineering teams to encourage practical adoption.'],
    outcomes: [
      'Improved consistency across shared UI patterns.',
      'Reduced ambiguity during design-to-development handoff.',
      'Strengthened the foundation for scalable component-platform adoption.'
    ],
    technologies: ['Angular', 'Storybook', 'Design Systems', 'Accessibility', 'Architecture Decision Records'],
    screenshots: ['/assets/images/projects/design-system-governance.png'],
    links: [],
    featured: true,
    displayOrder: 3,
    confidentialityNote: 'Public-safe summary. Internal component names and product details intentionally omitted.'
  },
  {
    slug: 'ai-assisted-engineering-workflows',
    title: 'Responsible AI-Assisted Engineering Workflows',
    shortTitle: 'AI-Assisted Engineering',
    yearLabel: 'Private',
    domain: 'Engineering Enablement',
    category: 'Developer Experience',
    summary:
      'Introduced structured AI-assisted workflows to accelerate engineering work while preserving human ownership of architectural decisions.',
    architectureProblem: 'AI tools needed to improve engineering velocity without weakening judgment, quality, or accountability.',
    challenge: [
      'Use AI responsibly across real engineering workflows.',
      'Improve consistency and reduce repetitive work.',
      'Preserve human review for high-context and high-risk decisions.'
    ],
    architectureDecision: [
      'Applied AI support to research, planning, implementation assistance, code review, testing, and documentation.',
      'Used GitHub Copilot and Codex to accelerate Angular and TypeScript modernization work, surface edge cases, draft test coverage, and improve consistency.',
      'Kept final architectural tradeoffs, security-sensitive decisions, and context-heavy product or UX decisions under human ownership.'
    ],
    leadershipApproach: ['Positioned AI as an engineering support system rather than an autonomous decision-maker.'],
    outcomes: [
      'Improved efficiency across modernization, review, testing, and documentation workflows.',
      'Created a repeatable approach for responsible AI-assisted engineering.'
    ],
    technologies: ['GitHub Copilot', 'Codex', 'Angular', 'TypeScript', 'Testing', 'Documentation'],
    screenshots: ['/assets/images/projects/responsible-ai-workflows.png'],
    links: [],
    displayOrder: 4,
    confidentialityNote: 'Public-safe summary. Internal workflows and repository details intentionally omitted.'
  }
].sort((a, b) => a.displayOrder - b.displayOrder);
