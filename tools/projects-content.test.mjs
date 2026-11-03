import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import ts from 'typescript';

async function loadContent(path) {
  const source = readFileSync(new URL(path, import.meta.url), 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
  });
  return import('data:text/javascript;base64,' + Buffer.from(outputText).toString('base64'));
}

const { PROJECTS, findProjectBySlug } = await loadContent('../src/app/data/projects.data.ts');
const { EXPERIENCE } = await loadContent('../src/app/data/experience.data.ts');
const slugs = [
  'frontend-platform-modernization',
  'design-system-governance',
  'ai-assisted-engineering-workflows',
  'legacy-react-to-angular-20',
];

test('four distinct ordered studies and exactly three enterprise featured stories', () => {
  assert.deepEqual(
    PROJECTS.map((project) => project.slug),
    slugs,
  );
  assert.deepEqual(
    PROJECTS.map((project) => project.displayOrder),
    [1, 2, 3, 4],
  );
  assert.deepEqual(
    PROJECTS.filter((project) => project.featured).map((project) => project.slug),
    slugs.slice(0, 3),
  );
  assert.equal(new Set(PROJECTS.map((project) => project.summary)).size, 4);
});

test('canonical and retired deep links resolve without accepting unknown keys', () => {
  for (const slug of slugs) assert.equal(findProjectBySlug(slug)?.slug, slug);
  assert.equal(findProjectBySlug('performance-governance'), PROJECTS[0]);
  for (const slug of ['missing', 'toString', '__proto__'])
    assert.equal(findProjectBySlug(slug), undefined);
});

test('every story has the complete narrative and an accessible source-backed visual', () => {
  for (const project of PROJECTS) {
    for (const field of ['context', 'architectureProblem'])
      assert.ok(project[field]?.trim(), field);
    for (const field of [
      'challenge',
      'leadershipApproach',
      'architectureDecision',
      'implementation',
      'outcomes',
      'lessons',
      'architectureFlow',
    ]) {
      assert.ok(project[field]?.length, project.slug + ': ' + field);
      assert.ok(project[field].every((item) => item.trim().length > 10));
    }
    assert.ok(!JSON.stringify(project).includes('TODO_CONFIRM'));
    for (const src of project.screenshots) {
      assert.ok(existsSync(new URL('../src' + src, import.meta.url)), src);
    }
  }
});

test('scope-qualified enterprise achievements survive consolidation', () => {
  const migration = JSON.stringify(PROJECTS[0]);
  for (const fact of [
    '15',
    '20+',
    'two engineering teams',
    'three months',
    '60%',
    'Angular 16',
    'Angular 20',
    'Ionic',
    'Capacitor',
  ])
    assert.ok(migration.includes(fact), fact);
  const quality = JSON.stringify(PROJECTS[0].supportingSections);
  for (const fact of [
    '30%',
    '70%',
    'WCAG 2.1 AA',
    'smoke/regression',
    'ESLint',
    'broader platform',
  ])
    assert.ok(quality.includes(fact), fact);
  const shared = JSON.stringify(PROJECTS[1]);
  for (const fact of [
    '15',
    'three applications',
    'three consuming teams',
    'four teams',
    '12 developers',
    '40%',
    'Storybook',
    'Semantic Versioning',
    'dropdowns',
    'backlog grooming',
  ])
    assert.ok(shared.includes(fact), fact);
  const ai = JSON.stringify(PROJECTS[2]);
  for (const fact of [
    '15 developers',
    '5-6',
    '30%',
    'Azure DevOps',
    'Figma MCP',
    'HTML',
    'unit-testing',
    'human',
  ])
    assert.ok(ai.includes(fact), fact);
});

test('public implementation exposes live and repository links; enterprise links stay private', () => {
  for (const project of PROJECTS.slice(0, 3)) {
    assert.equal(project.visibilityLabel, 'Confidential Case Study');
    assert.deepEqual(project.links, []);
  }
  assert.equal(PROJECTS[3].visibilityLabel, 'Public Project');
  assert.deepEqual(
    PROJECTS[3].links.map((link) => link.url),
    ['https://lokeshpaduchuri.com', 'https://github.com/lokeshpaduchuri/lokesh-architecture-2026'],
  );
  assert.ok(PROJECTS[3].links.every((link) => link.public));
});

test('resume references real current-role stories and preserves earlier role metrics', () => {
  assert.deepEqual(
    EXPERIENCE[0].caseStudies.map((study) => study.slug),
    slugs.slice(0, 3),
  );
  for (const role of EXPERIENCE) {
    for (const study of role.caseStudies ?? []) assert.ok(findProjectBySlug(study.slug));
  }
  const earlier = EXPERIENCE.slice(1)
    .flatMap((role) => role.highlights)
    .join(' ');
  for (const fact of ['10 minutes to 2 minutes', '15%', '25%', '20%', 'CirrusMD'])
    assert.ok(earlier.includes(fact), fact);
});
