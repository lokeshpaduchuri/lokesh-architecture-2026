import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

test('initial navigation waits for the lazy route before painting the shell', () => {
  const source = ts.createSourceFile(
    'app.config.ts',
    readFileSync(new URL('../src/app/app.config.ts', import.meta.url), 'utf8'),
    ts.ScriptTarget.Latest,
    true,
  );
  const routerCalls = [];
  function visit(node) {
    if (ts.isCallExpression(node) && node.expression.getText(source) === 'provideRouter') {
      routerCalls.push(node);
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  assert.equal(routerCalls.length, 1);
  const features = routerCalls[0].arguments
    .filter(ts.isCallExpression)
    .map((arg) => arg.expression.getText(source));
  assert.ok(features.includes('withEnabledBlockingInitialNavigation'));
  assert.ok(features.includes('withInMemoryScrolling'));
});
