import { SkillGroup } from '../models/resume.models';

export const CORE_STRENGTHS = [
  'Frontend Platform Architecture',
  'Angular, React, and TypeScript',
  'Design Systems and Reusable Component Platforms',
  'Micro-Frontend Strategy and Readiness',
  'Developer Experience and Engineering Standards',
  'CI/CD Guardrails and Release Quality',
  'Accessibility and UX Architecture',
  'Web Performance Optimization',
  'AI-Assisted Engineering Workflows',
  'Cross-Team Technical Governance',
  'Engineering Mentorship and Standards Adoption'
];

export const APPROACH_ITEMS = [
  'Architecture with execution ownership',
  'Team enablement through standards and systems',
  'Performance, accessibility, and resilience by default',
  'Responsible AI integration in real product contexts'
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Architecture Leadership',
    items: ['Frontend platform strategy', 'Cross-team governance', 'Architecture decision records', 'Modernization roadmaps']
  },
  {
    category: 'Frontend Systems',
    items: ['Angular', 'React', 'TypeScript', 'Ionic', 'Reusable UI foundations', 'Micro-frontend readiness']
  },
  {
    category: 'Quality and Delivery',
    items: ['Accessibility', 'Web performance', 'CI/CD guardrails', 'Release quality', 'Testing practices']
  },
  {
    category: 'Enablement',
    items: ['Design systems', 'Storybook documentation', 'Developer experience', 'Mentorship', 'Responsible AI workflows']
  }
];
