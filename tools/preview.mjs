import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { gzipSync } from 'node:zlib';

const root = resolve('dist/lokesh-architecture-2026/browser');
const port = Number(process.env.PORTFOLIO_PREVIEW_PORT ?? 4300);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORTFOLIO_PREVIEW_PORT must be an integer between 1 and 65535.');
}
await stat(resolve(root, 'index.html'));

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let file = resolve(root, '.' + pathname);
    if (file !== root && !file.startsWith(root + sep)) {
      response.writeHead(403).end();
      return;
    }
    // Only app routes use the SPA fallback; missing JS or images remain 404s.
    if (!extname(pathname)) file = resolve(root, 'index.html');
    const extension = extname(file);
    let body = await readFile(file);
    const compressible = ['.html', '.js', '.css', '.json', '.svg'].includes(extension);
    const gzip = compressible && /\bgzip\b/.test(request.headers['accept-encoding'] ?? '');
    if (gzip) body = gzipSync(body);
    response.writeHead(200, {
      'Content-Type': types[extension] ?? 'application/octet-stream',
      'Content-Length': body.length,
      'Cache-Control': /-[\w]{8}\.(js|css)$/.test(file)
        ? 'public, max-age=31536000, immutable'
        : 'no-cache',
      'X-Content-Type-Options': 'nosniff',
      Vary: 'Accept-Encoding',
      ...(gzip ? { 'Content-Encoding': 'gzip' } : {}),
    });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch (error) {
    response.writeHead(error instanceof URIError ? 400 : 404).end();
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Production build preview: http://127.0.0.1:${port}`);
});
