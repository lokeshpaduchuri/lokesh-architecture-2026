import { test } from 'node:test';
import assert from 'node:assert/strict';
import { auditTemplate } from './template-copy-audit.mjs';

test('permits bound content and structural HTML values', () => {
  assert.deepEqual(
    auditTemplate(
      '<a class="nav-link" routerLink="/work" [attr.aria-label]="text.Work">{{ text.Work }}</a>',
      'fixture.html',
    ),
    [],
  );
});
test('rejects literal display text including mixed interpolation', () => {
  assert.ok(auditTemplate('<h1>Welcome</h1>', 'fixture.html').length);
  assert.ok(auditTemplate('<p>Welcome {{ name }}</p>', 'fixture.html').length);
});
test('rejects literal accessible names in static and bound attributes', () => {
  assert.ok(auditTemplate('<button aria-label="Close"></button>', 'fixture.html').length);
  assert.ok(
    auditTemplate(
      '<button [attr.aria-label]="open ? \'Close\' : text.Open"></button>',
      'fixture.html',
    ).length,
  );
});
