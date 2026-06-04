import { Project } from '../models/resume.models';

/**
 * Sample schema:
 * {
 *   slug: 'string',
 *   title: 'string',
 *   year: 2026,
 *   company: 'string',
 *   domain: 'string',
 *   summary: 'string',
 *   role: 'string',
 *   outcomes: ['string'],
 *   tech: ['string'],
 *   screenshots: ['/assets/images/projects/example-1.svg'],
 *   links: [{ label: 'Case Note', url: 'https://example.com' }],
 *   featured: true
 * }
 */
export const PROJECTS: Project[] = [
  {
    slug: 'platform-modernization',
    title: 'Frontend Platform Modernization',
    year: 2025,
    company: 'Enterprise Commerce Org',
    domain: 'Commerce',
    summary: 'Unified fragmented frontend stack into a scalable Angular platform with governance rails.',
    role: 'Staff Frontend Architect',
    outcomes: ['42% faster release cycles', '34% drop in production incidents', 'Shared design system used by 8 teams'],
    tech: ['Angular', 'Nx', 'Tailwind', 'Module Federation', 'Playwright'],
    screenshots: ['/assets/images/projects/platform-1.svg', '/assets/images/projects/platform-2.svg'],
    links: [{ label: 'Architecture Summary', url: '#' }],
    featured: true
  },
  {
    slug: 'ai-assistant-governance',
    title: 'Responsible AI Assistant Rollout',
    year: 2024,
    company: 'Financial Services Group',
    domain: 'Fintech',
    summary: 'Introduced AI copilots with policy controls, observability, and risk-based approvals.',
    role: 'Principal Engineer',
    outcomes: ['Reduced support handling time by 26%', 'Implemented prompt/completion audit trails', 'Met internal model governance standards'],
    tech: ['Angular', 'Node.js', 'OpenTelemetry', 'AWS', 'Feature Flags'],
    screenshots: ['/assets/images/projects/ai-1.svg', '/assets/images/projects/ai-2.svg'],
    links: [{ label: 'Governance Checklist', url: '#' }],
    featured: true
  },
  {
    slug: 'design-system-scale',
    title: 'Design System at Scale',
    year: 2023,
    company: 'B2B SaaS Platform',
    domain: 'SaaS',
    summary: 'Created a token-first design system and component delivery model for multi-product consistency.',
    role: 'Architecture Lead',
    outcomes: ['90+ reusable components', 'Accessibility score consistently above 95', 'Cut UI implementation effort by ~30%'],
    tech: ['Angular', 'Storybook', 'Figma Tokens', 'CI/CD'],
    screenshots: ['/assets/images/projects/design-1.svg', '/assets/images/projects/design-2.svg'],
    links: [{ label: 'System Overview', url: '#' }],
    featured: true
  },
  {
    slug: 'microfrontend-governance',
    title: 'Microfrontend Governance Blueprint',
    year: 2022,
    company: 'Global Retail Group',
    domain: 'Retail',
    summary: 'Set architectural guardrails for microfrontends with independent delivery and shared standards.',
    role: 'Architect',
    outcomes: ['5 domain teams onboarded', 'Shared quality gates in CI', 'Reduced bundle duplication by 18%'],
    tech: ['Angular', 'Webpack', 'CI Templates'],
    screenshots: ['/assets/images/projects/micro-1.svg'],
    links: [{ label: 'Playbook', url: '#' }]
  }
];
