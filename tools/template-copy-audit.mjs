import { parseTemplate, RecursiveAstVisitor, TmplAstText } from '@angular/compiler';

const copyAttributes = new Set(['aria-label', 'alt', 'title', 'placeholder']);

export function auditTemplate(source, file) {
  const errors = [];
  const parsed = parseTemplate(source, file, { preserveWhitespaces: true });
  if (parsed.errors?.length) return parsed.errors.map((error) => error.toString());
  const report = (node) =>
    errors.push(
      `${file}:${node.sourceSpan.start.line + 1}: authored copy must come from a content binding`,
    );
  class CopyVisitor extends RecursiveAstVisitor {
    visitLiteralPrimitive(ast) {
      if (typeof ast.value === 'string' && ast.value.trim())
        errors.push(
          `${file}: literal copy in display/accessibility expression: ${JSON.stringify(ast.value)}`,
        );
    }
    visitInterpolation(ast, context) {
      if (ast.strings.some((value) => value.trim()))
        errors.push(`${file}: literal copy beside an interpolation`);
      return super.visitInterpolation(ast, context);
    }
  }
  const visitor = new CopyVisitor();
  function visit(node) {
    if (node instanceof TmplAstText && node.value.trim()) report(node);
    if (node.value?.ast) node.value.ast.visit(visitor);
    for (const attr of node.attributes ?? []) {
      if (copyAttributes.has(attr.name) && attr.value.trim()) report(attr);
    }
    for (const input of node.inputs ?? []) {
      if (copyAttributes.has(input.name)) input.value.ast.visit(visitor);
    }
    for (const child of node.children ?? []) visit(child);
  }
  parsed.nodes.forEach(visit);
  return errors;
}
