import { Education, Experience } from '../models/resume.models';

export const EXPERIENCE: Experience[] = [
  {
    title: 'Principal UI/UX & Front End Architect',
    publicCompanyName: 'Independent Health Association',
    anonymizedCompanyName: 'Enterprise Healthcare Organization',
    usePublicCompanyName: true,
    period: 'May 2024 - Present',
    location: 'Buffalo, NY',
    current: true,
    publicSafeSummary:
      'Lead hands-on frontend architecture and implementation across Angular, TypeScript, Ionic, and Capacitor applications, combining platform modernization with reusable component engineering and team enablement.',
    highlights: [
      'Delivered 15 shared Angular/TypeScript components across three applications and three consuming teams, reducing duplicate implementations approximately 40%.',
      'Completed the remaining AngularJS sunset by migrating 15 features affecting 20+ customer workflows across two engineering teams in approximately three months, with approximately 60% less migration effort.',
      'Advanced the shared platform from Angular 16 to Angular 20 alongside Ionic and Capacitor upgrades, including replacement of deprecated native plugins.',
      'Governed private npm packages across four teams and approximately 12 developers through Semantic Versioning, supported versions, Storybook contracts, and architecture approval.',
      'Established WCAG 2.1 AA-aligned accessibility and automated quality guardrails, contributing to test coverage growth from approximately 30% to 70%.',
      'Designed an AI-assisted engineering workflow adopted by approximately 15 developers across 5-6 initiatives per sprint, reducing engineering effort approximately 30% with human review gates.',
    ],
    caseStudies: [
      { slug: 'frontend-platform-modernization', label: 'Platform modernization' },
      { slug: 'design-system-governance', label: 'Shared UI platform' },
      { slug: 'ai-assisted-engineering-workflows', label: 'AI-assisted engineering' },
    ],
    technologies: [
      'Angular 20',
      'TypeScript',
      'Ionic',
      'Capacitor',
      'Private npm Packages',
      'Storybook',
      'WCAG 2.1 AA',
      'Azure DevOps',
      'Figma MCP',
      'GitHub Copilot',
      'Codex',
    ],
  },
  {
    title: 'Lead Web Developer',
    publicCompanyName: 'Independent Health Association',
    anonymizedCompanyName: 'Enterprise Healthcare Organization',
    usePublicCompanyName: true,
    period: 'Jun 2022 - May 2024',
    location: 'Buffalo, NY',
    publicSafeSummary:
      'Built and modernized reusable Angular and TypeScript components for customer-facing workflows.',
    highlights: [
      'Improved maintainability and reduced duplicated implementation effort through reusable component work.',
      'Translated UX designs and business requirements into responsive, accessible frontend experiences.',
      'Partnered with backend teams on API integration and edge-case handling.',
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'Reusable Components',
      'Accessibility',
      'API Integration',
    ],
  },
  {
    title: 'Senior Web Developer',
    publicCompanyName: 'Independent Health Association',
    anonymizedCompanyName: 'Enterprise Healthcare Organization',
    usePublicCompanyName: true,
    period: 'Apr 2020 - Jun 2022',
    location: 'Buffalo, NY',
    publicSafeSummary:
      'Supported Angular modernization, telehealth UI integration, and frontend delivery improvements.',
    highlights: [
      'Migrated AngularJS modules to Angular with clearer module boundaries and reusable patterns.',
      'Integrated real-time communication UI flows using CirrusMD APIs for telehealth features.',
      'Strengthened CI/CD workflows with automated testing and frontend deployment improvements.',
    ],
    technologies: ['AngularJS', 'Angular', 'TypeScript', 'CI/CD', 'CirrusMD APIs'],
  },
  {
    title: 'Senior Web Developer',
    publicCompanyName: 'Atlas Air',
    anonymizedCompanyName: 'Enterprise Product Engineering and Operations',
    usePublicCompanyName: true,
    period: 'Nov 2018 - Apr 2020',
    location: 'Purchase, NY',
    publicSafeSummary: 'Delivered real-time frontend platform work for aviation operations.',
    highlights: [
      'Architected and delivered the React and TypeScript-based Crew Connect platform for aviation operations.',
      'Reduced operational event latency from 10 minutes to 2 minutes and improved mission-critical communication reliability for global aviation teams.',
    ],
    technologies: ['React', 'TypeScript', 'Real-time UI', 'Operational Workflows'],
  },
  {
    title: 'Web Developer',
    publicCompanyName: '605 LLC',
    anonymizedCompanyName: 'Enterprise Product Engineering and Operations',
    usePublicCompanyName: true,
    period: 'Oct 2017 - Nov 2018',
    location: 'Syosset, NY',
    publicSafeSummary: 'Led Angular modernization work for enterprise frontend applications.',
    highlights: ['Led AngularJS to Angular migration improving build performance 15%.'],
    technologies: ['AngularJS', 'Angular', 'Frontend Modernization', 'Build Performance'],
  },
  {
    title: 'Web Developer',
    publicCompanyName: 'Paychex',
    anonymizedCompanyName: 'Enterprise Product Engineering and Operations',
    usePublicCompanyName: true,
    period: 'May 2016 - Sep 2017',
    location: 'Webster, NY',
    publicSafeSummary: 'Modernized payroll UI architecture in a regulated product environment.',
    highlights: [
      'Modernized payroll UI architecture, improving page load speed approximately 25% and reducing workflow errors approximately 20%.',
      'Implemented secure, responsive UI patterns within a highly regulated environment.',
    ],
    technologies: [
      'Frontend Architecture',
      'Responsive UI',
      'Performance Optimization',
      'Regulated Workflows',
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Master of Computer Science',
    institution: 'University of Texas at Arlington',
    period: 'Date private',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'JNT University, India',
    period: 'Date private',
  },
];
