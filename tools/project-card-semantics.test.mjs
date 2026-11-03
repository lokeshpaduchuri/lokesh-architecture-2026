import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseTemplate } from '@angular/compiler';

const source = readFileSync(
  new URL('../src/app/components/project-card.component.html', import.meta.url),
  'utf8',
);
const template = parseTemplate(source, 'project-card.component.html');

test('project card keeps article semantics and delegates activation to a native button', () => {
  assert.equal(template.errors, null);
  const article = template.nodes.find((node) => node.name === 'article');
  assert.ok(article);
  assert.ok(!article.attributes.some((attr) => ['role', 'tabindex'].includes(attr.name)));
  assert.equal(article.outputs.length, 0);
  const button = article.children.find((node) => node.name === 'button');
  assert.ok(button);
  assert.ok(button.attributes.some((attr) => attr.name === 'type' && attr.value === 'button'));
  assert.ok(button.inputs.some((input) => input.name === 'aria-labelledby'));
  assert.deepEqual(
    button.outputs.map((output) => output.name),
    ['click'],
  );
  assert.ok(!button.children.some((node) => ['h3', 'p', 'ul'].includes(node.name)));
});
