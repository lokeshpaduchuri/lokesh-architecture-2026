export interface LinkItem {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  year: number;
  company: string;
  domain: string;
  summary: string;
  role: string;
  outcomes: string[];
  tech: string[];
  screenshots: string[];
  links: LinkItem[];
  featured?: boolean;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
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
