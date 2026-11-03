# Data Schema

Public-facing content lives in typed files under `src/app/data/`.

## Project Schema

Each case study includes:

- slug: string
- title: string
- shortTitle: string
- yearLabel?: string (verified year only)
- visibilityLabel: 'Confidential Case Study' | 'Public Project'
- domain: string
- category: string
- summary: string
- context: string
- architectureProblem: string
- challenge: string[]
- architectureDecision: string[]
- architectureFlow?: string[]
- leadershipApproach: string[]
- implementation: string[]
- outcomes: string[]
- lessons: string[] (source-backed architecture takeaways, not invented retrospective quotes)
- supportingSections?: { title: string; items: string[] }[]
- measurableImpact?: string
- technologies: string[]
- screenshots: string[]
- screenshotDescriptions?: string[] (matching-index meaningful alt text)
- diagrams?: string[]
- links: { label: string; url: string; public?: boolean }[] (only explicitly public links rendered)
- featured?: boolean
- displayOrder: number
- confidentialityNote?: string

## Experience Schema

Employer visibility is configurable:

- publicCompanyName: string
- anonymizedCompanyName: string
- usePublicCompanyName: boolean
- publicSafeSummary?: string
- caseStudies?: { slug: string; label: string }[]

Four stories are ordered by displayOrder. Only the three enterprise stories are featured.
The retired performance-governance slug resolves to frontend-platform-modernization through findProjectBySlug; it does not create a fifth card.

Keep `usePublicCompanyName` false until the public employer display choice is confirmed.

## Presentation Content and Images

- Shared presentation labels and accessible names are defined in `UiText`, separate from career and project data.
- `ImageAsset` declares a source URL, intrinsic width/height, and optional responsive source set.
- `ArchitectureImageComponent` renders this local contract without owning routing, brand data, or case-study behavior.
- See `ARCHITECTURE_REVIEW.md` for source boundaries and verified career corrections.
