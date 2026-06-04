# Data Schema

Public-facing content lives in typed files under `src/app/data/`.

## Project Schema

Each case study includes:

- slug: string
- title: string
- shortTitle: string
- yearLabel: string
- domain: string
- category: string
- summary: string
- architectureProblem: string
- challenge: string[]
- architectureDecision: string[]
- leadershipApproach: string[]
- outcomes: string[]
- measurableImpact?: string
- technologies: string[]
- screenshots: string[]
- diagrams?: string[]
- links: { label: string; url: string }[]
- featured?: boolean
- displayOrder: number
- confidentialityNote?: string

## Experience Schema

Employer visibility is configurable:

- publicCompanyName: string
- anonymizedCompanyName: string
- usePublicCompanyName: boolean
- publicSafeSummary?: string

Keep `usePublicCompanyName` false until the public employer display choice is confirmed.
