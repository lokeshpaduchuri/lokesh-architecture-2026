export interface ProjectLink {
  label: string;
  url: string;
  public?: boolean;
}

export type LinkItem = ProjectLink;

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  yearLabel?: string;
  visibilityLabel: 'Confidential Case Study' | 'Public Project';
  domain: string;
  category: string;
  summary: string;
  context: string;
  architectureProblem: string;
  challenge: string[];
  architectureDecision: string[];
  architectureFlow?: string[];
  leadershipApproach: string[];
  implementation: string[];
  outcomes: string[];
  lessons: string[];
  supportingSections?: Array<{ title: string; items: string[] }>;
  measurableImpact?: string;
  technologies: string[];
  screenshots: string[];
  screenshotDescriptions?: string[];
  links: ProjectLink[];
  diagrams?: string[];
  featured?: boolean;
  displayOrder: number;
  confidentialityNote?: string;
}

export interface Experience {
  title: string;
  publicCompanyName: string;
  anonymizedCompanyName: string;
  usePublicCompanyName: boolean;
  period: string;
  location: string;
  publicSafeSummary?: string;
  highlights: string[];
  caseStudies?: Array<{ slug: string; label: string }>;
  technologies: string[];
  current?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Profile {
  name: string;
  primaryTitle: string;
  shortTitle: string;
  eyebrow: string;
  headline: string;
  summary: string;
  location: string;
  email: string;
  emailIsPublic: boolean;
  linkedin: string;
  github: string;
  siteUrl: string;
}

export interface AboutContent {
  eyebrow: string;
  headline: string;
  intro: string;
  supportingParagraph: string;
  principles: Array<{ title: string; body: string }>;
  process: string[];
  beyondCode: string;
}
