import { Education, Experience, LinkItem, SkillGroup } from '../models/resume.models';

export const PROFILE = {
  name: 'Lokesh Paduchuri',
  headline: 'Staff / Principal Frontend Architect',
  location: 'India',
  summary:
    'I design and lead enterprise frontend systems with a focus on platform scale, governance, and delivery velocity.'
};

export const STRENGTHS = [
  'Architecture with execution ownership',
  'Team enablement through standards and systems',
  'Performance, accessibility, and resilience by default',
  'Responsible AI integration in real product contexts'
];

export const EXPERIENCE: Experience[] = [
  {
    title: 'Staff Frontend Architect',
    company: 'Enterprise Programs',
    period: '2023 — Present',
    location: 'Hybrid',
    highlights: ['Directed frontend architecture for multi-team platform programs.', 'Established governance model for code quality, UX consistency, and releases.']
  },
  {
    title: 'Frontend Architecture Lead',
    company: 'Product Engineering Org',
    period: '2020 — 2023',
    location: 'Remote',
    highlights: ['Built shared platform foundations and design system adoption strategy.', 'Coached teams on observability, performance budgets, and sustainable delivery.']
  }
];

export const EDUCATION: Education[] = [
  { degree: 'B.Tech, Computer Science', institution: 'JNTU', period: '2012 — 2016' }
];

export const SKILLS: SkillGroup[] = [
  { category: 'Architecture', items: ['System design', 'Scalability strategy', 'Governance models'] },
  { category: 'Frontend', items: ['Angular', 'TypeScript', 'Design systems', 'Web performance', 'Accessibility'] },
  { category: 'Leadership', items: ['Mentoring', 'Cross-functional alignment', 'Delivery management'] }
];

export const CONTACT_LINKS: LinkItem[] = [
  { label: 'Email', url: 'mailto:lokesh@example.com' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/lokesh' },
  { label: 'GitHub', url: 'https://github.com/lokesh' }
];
