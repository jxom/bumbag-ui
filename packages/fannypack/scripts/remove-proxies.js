const rimraf = require('rimraf');
const { lstatSync } = require('fs');
const { join } = require('path');
const getModules = require('./get-modules');

const createProxies = () => {
  const modules = getModules();
  modules.forEach(module => {
    let proxyPath = join('./', module);
    const isFile = lstatSync(join(__dirname, '../src', module)).isFile();
    if (isFile) {
      proxyPath = proxyPath.replace(/\.js$/, '');
    }
    rimraf.sync(proxyPath);
  });
};

module.exports = createProxies();
