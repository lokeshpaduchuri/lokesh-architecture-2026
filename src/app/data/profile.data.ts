import { LinkItem, Profile } from '../models/resume.models';

export const PROFILE: Profile = {
  name: 'Lokesh Paduchuri',
  primaryTitle: 'Principal UI/UX & Front-End Architect',
  shortTitle: 'Frontend Platform & Architecture Leader',
  eyebrow: 'STAFF / PRINCIPAL FRONTEND ARCHITECT',
  headline: 'I build frontend architecture that scales teams, systems, and delivery outcomes.',
  summary:
    'Principal UI/UX & Front-End Architect with 10+ years of experience modernizing enterprise frontend platforms across Angular, React, TypeScript, and Ionic. I lead frontend architecture, reusable UI foundations, design-system adoption, performance optimization, accessibility improvements, CI/CD guardrails, and AI-assisted engineering workflows that improve delivery quality and developer experience across teams.',
  location: 'McKinney, TX',
  email: '',
  emailIsPublic: false,
  linkedin: 'https://www.linkedin.com/in/lokeshpaduchuri',
  github: 'https://github.com/lokeshpaduchuri',
  siteUrl: 'https://lokeshpaduchuri.com'
};

export const CONTACT_LINKS: LinkItem[] = [
  { label: 'LinkedIn', url: PROFILE.linkedin, public: true },
  { label: 'GitHub', url: PROFILE.github, public: true }
];
