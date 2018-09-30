const { lstatSync, mkdirSync, writeFileSync } = require('fs');
const { join } = require('path');
const getModules = require('./get-modules');
const { name } = require('../package.json');

const createProxyPackage = (module, { isFile }) => {
  let modulePath = `${module}/index.js`;
  if (isFile) {
    modulePath = `${module}.js`;
  }
  return `
  "name": "${name}/${module}",
  "private": true,
  "main": "../lib/${modulePath}",
  "module": "../es/${modulePath}",
`;
};

const createProxies = () => {
  const modules = getModules();
  modules.forEach(module => {
    let proxyPath = join('./', module);
    const isFile = lstatSync(join(__dirname, '../src', module)).isFile();
    if (isFile) {
      proxyPath = proxyPath.replace(/\.js$/, '');
    }
    mkdirSync(proxyPath);
    writeFileSync(join(proxyPath, 'package.json'), createProxyPackage(proxyPath, { isFile }));
  });
};

module.exports = createProxies();
