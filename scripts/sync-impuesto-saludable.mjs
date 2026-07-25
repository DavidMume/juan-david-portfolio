/* global console, process */

import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const healthyTaxRoot = resolve(repoRoot, '..', 'impuesto-saludable');
const source = resolve(healthyTaxRoot, 'dist');
const target = resolve(repoRoot, 'public', 'impuesto-saludable');

if (!existsSync(resolve(healthyTaxRoot, 'package.json'))) {
  throw new Error(
    `Healthy-tax repository not found at ${healthyTaxRoot}. Clone it beside the portfolio repository first.`,
  );
}

const build = spawnSync('npm', ['run', 'build:portfolio'], {
  cwd: healthyTaxRoot,
  stdio: 'inherit',
  shell: false,
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

if (!existsSync(resolve(source, 'index.html'))) {
  throw new Error(`Expected production bundle not found at ${source}`);
}

rmSync(target, { recursive: true, force: true });
mkdirSync(target, { recursive: true });
cpSync(source, target, { recursive: true });

console.log(`Synced healthy-tax report to ${target}`);
