import { LinkItem, Profile } from '../models/resume.models';

export const PROFILE: Profile = {
  name: 'Lokesh Paduchuri',
  primaryTitle: 'Principal UI/UX & Front End Architect',
  shortTitle: 'Frontend Platform & Architecture Leader',
  eyebrow: 'STAFF / PRINCIPAL FRONTEND ARCHITECT',
  headline: 'Frontend systems built to scale. Teams enabled to deliver.',
  summary:
    'Hands-on Principal frontend architect with 10+ years of experience building enterprise web and mobile interfaces. I lead Angular and TypeScript modernization, private npm component platforms, Storybook contracts, accessibility, and human-in-the-loop AI engineering workflows. My production React and TypeScript experience includes the Crew Connect platform at Atlas Air.',
  location: 'McKinney, TX',
  email: '',
  emailIsPublic: false,
  linkedin: 'https://www.linkedin.com/in/lokeshpaduchuri',
  github: 'https://github.com/lokeshpaduchuri',
  siteUrl: 'https://lokeshpaduchuri.com',
};

export const CONTACT_LINKS: LinkItem[] = [
  { label: 'LinkedIn', url: PROFILE.linkedin, public: true },
  { label: 'GitHub', url: PROFILE.github, public: true },
];
