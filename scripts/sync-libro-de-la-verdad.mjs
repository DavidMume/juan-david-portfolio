/* global console, process */

// Builds the "Libro de la Verdad" audit web app (DavidMume/petro-report-nlp-audit)
// and copies its production bundle to public/libro-de-la-verdad/.
// The audit repository is looked up, in order, at $PETRO_AUDIT_ROOT,
// ../petro-report-nlp-audit and ../Projects/petro-report-nlp-audit.

import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const candidates = [
  process.env.PETRO_AUDIT_ROOT,
  resolve(repoRoot, '..', 'petro-report-nlp-audit'),
  resolve(repoRoot, '..', 'Projects', 'petro-report-nlp-audit'),
].filter(Boolean);
const auditRoot = candidates.find((p) => existsSync(resolve(p, 'web', 'package.json')));

if (!auditRoot) {
  throw new Error(
    `Audit repository not found. Clone DavidMume/petro-report-nlp-audit and set PETRO_AUDIT_ROOT. Tried: ${candidates.join(', ')}`,
  );
}

const webRoot = resolve(auditRoot, 'web');
const source = resolve(webRoot, 'dist');
const target = resolve(repoRoot, 'public', 'libro-de-la-verdad');

for (const args of [['ci'], ['run', 'build']]) {
  const step = spawnSync('npm', args, { cwd: webRoot, stdio: 'inherit', shell: false });
  if (step.status !== 0) {
    process.exit(step.status ?? 1);
  }
}

if (!existsSync(resolve(source, 'index.html'))) {
  throw new Error(`Expected production bundle not found at ${source}`);
}

rmSync(target, { recursive: true, force: true });
mkdirSync(target, { recursive: true });
cpSync(source, target, { recursive: true });

console.log(`Synced Libro de la Verdad audit to ${target}`);
