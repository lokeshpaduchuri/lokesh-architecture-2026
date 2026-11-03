import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { auditTemplate } from './template-copy-audit.mjs';

async function findTemplates(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) =>
      entry.isDirectory()
        ? findTemplates(path.join(dir, entry.name))
        : entry.name.endsWith('.html')
          ? [path.join(dir, entry.name)]
          : [],
    ),
  );
  return files.flat();
}
const files = await findTemplates('src/app');
const errors = (
  await Promise.all(files.map(async (file) => auditTemplate(await readFile(file, 'utf8'), file)))
).flat();
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(
    `${files.length} component templates passed: no hardcoded display or accessibility copy.`,
  );
}
