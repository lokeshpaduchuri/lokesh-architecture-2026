import { SkillGroup } from '../models/resume.models';

export const CORE_STRENGTHS = [
  'Frontend Platform Architecture',
  'Angular 20, TypeScript, Ionic, and Capacitor',
  'Design Systems and Reusable Component Platforms',
  'Private npm Packages and Semantic Versioning',
  'Developer Experience and Engineering Standards',
  'CI/CD Guardrails and Release Quality',
  'Accessibility and UX Architecture',
  'Web Performance Optimization',
  'AI-Assisted Engineering Workflows',
  'Cross-Team Technical Governance',
  'Engineering Mentorship and Standards Adoption',
];

export const APPROACH_ITEMS = [
  'Architecture with execution ownership',
  'Team enablement through standards and systems',
  'Performance, accessibility, and resilience by default',
  'Responsible AI integration in real product contexts',
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Architecture Leadership',
    items: [
      'Frontend platform strategy',
      'Cross-team governance',
      'Component contracts',
      'Modernization roadmaps',
    ],
  },
  {
    category: 'Frontend Systems',
    items: [
      'Angular 20',
      'TypeScript',
      'Ionic',
      'Capacitor',
      'Private npm packages',
      'Historical production React',
    ],
  },
  {
    category: 'Quality and Delivery',
    items: [
      'WCAG 2.1 AA',
      'Unit, smoke, and regression tests',
      'ESLint',
      'CI/CD validation',
      'Release quality',
    ],
  },
  {
    category: 'Enablement',
    items: [
      'Figma design-to-code',
      'Storybook contracts',
      'Azure DevOps',
      'Versioned frontend skills',
      'Human-in-the-loop AI workflows',
    ],
  },
];
