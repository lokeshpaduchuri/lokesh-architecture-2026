import { mkdir, readFile, writeFile } from 'node:fs/promises';
import ts from 'typescript';

const enumSource = ts.createSourceFile(
  'ui-text.enums.ts',
  await readFile('src/app/content/ui-text.enums.ts', 'utf8'),
  ts.ScriptTarget.Latest,
  true,
);
const values = new Map();
for (const statement of enumSource.statements) {
  if (!ts.isEnumDeclaration(statement) || statement.name.text !== 'UiText') continue;
  for (const member of statement.members) {
    if (member.initializer && ts.isStringLiteral(member.initializer))
      values.set(member.name.getText(enumSource), member.initializer.text);
  }
}
const escapeHtml = (value) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character],
  );
const template = await readFile('src/index.html', 'utf8');
const output = template.replace(/@@(\w+)@@/g, (_, name) => {
  if (!values.has(name)) throw new Error(`Missing UiText value for shell token ${name}`);
  return escapeHtml(values.get(name));
});
await mkdir('.generated', { recursive: true });
await writeFile('.generated/index.html', output);
console.log('Generated HTML shell metadata from UiText.');
