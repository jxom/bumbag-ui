#!/usr/bin/env node
const { join } = require('path');
const spawn = require('cross-spawn');
const { makeProxies, makeGitignore, cleanBuild, hasTSConfig } = require('./utils');

let watch = false;

process.env.NODE_ENV = 'production';

if (process.argv.includes('--no-umd')) {
  process.env.NO_UMD = true;
}
if (process.argv.includes('--watch')) {
  watch = true;
}

const cwd = process.cwd();

cleanBuild(cwd);
makeGitignore(cwd);
makeProxies(cwd);

if (hasTSConfig(cwd)) {
  spawn.sync('tsc', ['--emitDeclarationOnly'], { stdio: 'inherit' });
}

spawn.sync('rollup', ['-c', join(__dirname, 'rollup.config.js'), watch ? '-w' : undefined].filter(Boolean), {
  stdio: 'inherit'
});
