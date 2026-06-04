import { Education, Experience } from '../models/resume.models';

export const EXPERIENCE: Experience[] = [
  {
    title: 'Principal Web Architect',
    publicCompanyName: 'Independent Health Association',
    anonymizedCompanyName: 'Enterprise Healthcare Organization',
    usePublicCompanyName: true,
    period: 'May 2024 - Present',
    location: 'Buffalo, NY',
    current: true,
    publicSafeSummary:
      'Own frontend architecture and hands-on technical direction across member-facing Angular and Ionic applications, translating complex product, UX, and integration requirements into scalable, maintainable frontend solutions.',
    highlights: [
      'Defined a unified frontend architecture across web and mobile experiences, aligning 4+ cross-functional product teams on reusable patterns, implementation standards, upgrade strategy, and release consistency.',
      'Improved frontend performance across key member-facing flows by introducing automated bundle budgets, targeted linting rules, and observability dashboards, reducing page-load latency by approximately 20%.',
      'Expanded reusable UI engineering standards through Storybook, architecture decision records, and shared component guidance, improving design consistency, code review quality, and adoption of frontend best practices.',
      'Partnered with product, UX, QA, backend, and DevOps teams to improve frontend testability, release readiness, accessibility, and maintainability earlier in the delivery lifecycle.',
      'Introduced structured AI-assisted engineering workflows using GitHub Copilot and OpenAI Codex across research, planning, implementation support, code review, and validation.'
    ],
    technologies: ['Angular', 'Ionic', 'TypeScript', 'Storybook', 'CI/CD', 'Accessibility', 'Web Performance', 'GitHub Copilot', 'OpenAI Codex']
  },
  {
    title: 'Lead Web Developer',
    publicCompanyName: 'Independent Health Association',
    anonymizedCompanyName: 'Enterprise Healthcare Organization',
    usePublicCompanyName: true,
    period: 'Jun 2022 - May 2024',
    location: 'Buffalo, NY',
    publicSafeSummary: 'Built and modernized reusable Angular and TypeScript components for customer-facing workflows.',
    highlights: [
      'Improved maintainability and reduced duplicated implementation effort through reusable component work.',
      'Translated UX designs and business requirements into responsive, accessible frontend experiences.',
      'Partnered with backend teams on API integration and edge-case handling.'
    ],
    technologies: ['Angular', 'TypeScript', 'Reusable Components', 'Accessibility', 'API Integration']
  },
  {
    title: 'Senior Web Developer',
    publicCompanyName: 'Independent Health Association',
    anonymizedCompanyName: 'Enterprise Healthcare Organization',
    usePublicCompanyName: true,
    period: 'Apr 2020 - Jun 2022',
    location: 'Buffalo, NY',
    publicSafeSummary: 'Supported Angular modernization, telehealth UI integration, and frontend delivery improvements.',
    highlights: [
      'Migrated AngularJS modules to Angular, introducing micro-frontend-aligned module boundaries and scalable patterns.',
      'Integrated real-time communication UI flows using CirrusMD APIs for telehealth features.',
      'Strengthened CI/CD workflows with automated testing and frontend deployment improvements.'
    ],
    technologies: ['AngularJS', 'Angular', 'TypeScript', 'Micro-frontend Readiness', 'CI/CD', 'CirrusMD APIs']
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
      'Architected and delivered the real-time Crew Connect platform using Angular and Firebase.',
      'Reduced operational event latency from 10 minutes to 2 minutes and improved mission-critical communication reliability for global aviation teams.'
    ],
    technologies: ['Angular', 'Firebase', 'Real-time UI', 'Operational Workflows']
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
    technologies: ['AngularJS', 'Angular', 'Frontend Modernization', 'Build Performance']
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
      'Implemented secure, responsive UI patterns within a highly regulated environment.'
    ],
    technologies: ['Frontend Architecture', 'Responsive UI', 'Performance Optimization', 'Regulated Workflows']
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'Master of Computer Science',
    institution: 'University of Texas at Arlington',
    period: 'Date private'
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'JNT University, India',
    period: 'Date private'
  }
];
