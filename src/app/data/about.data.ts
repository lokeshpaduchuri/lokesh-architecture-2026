import { AboutContent } from '../models/resume.models';

export const ABOUT_CONTENT: AboutContent = {
  eyebrow: 'ABOUT MY APPROACH',
  headline: 'I turn frontend complexity into systems teams can scale.',
  intro:
    'I operate at the intersection of architecture strategy and delivery execution. My focus is building frontend foundations that scale beyond a single feature or team: reusable patterns, clearer standards, stronger quality guardrails, and systems that improve both user experience and developer experience.',
  supportingParagraph:
    'I start by understanding the constraints: what users need, what teams can sustain, and where change creates risk. I prefer clear boundaries and practical standards over complexity for its own sake. The aim is to give teams room to make good decisions while protecting long-term platform health.',
  principles: [
    {
      title: 'Systems over screens',
      body: 'Build foundations that make future product work easier, safer, and more consistent.',
    },
    {
      title: 'Clarity before complexity',
      body: 'Prefer understandable architecture, practical standards, and intentional tradeoffs.',
    },
    {
      title: 'Quality by default',
      body: 'Treat accessibility, performance, testing, and resilience as core engineering responsibilities.',
    },
    {
      title: 'Enable teams, not bottlenecks',
      body: 'Create reusable systems and guidance that increase autonomy across teams.',
    },
  ],
  process: ['Discover', 'Align', 'Architect', 'Enable', 'Measure', 'Evolve'],
  beyondCode:
    "Photography and visual storytelling shape how I think about frontend work. Both disciplines reward clarity, composition, intentional hierarchy, and attention to the user's experience. That creative perspective helps me approach UX architecture with both systems thinking and empathy.",
};
