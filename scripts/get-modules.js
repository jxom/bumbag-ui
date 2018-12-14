const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const isDirectory = source => lstatSync(join(__dirname, '../src', source)).isDirectory();
const isFile = source => lstatSync(join(__dirname, '../src', source)).isFile();
const isModule = source => isDirectory(source) || (isFile(source) && /.(js|ts|tsx)$/.test(source));
const isNotPrivate = source => !/^_/.test(source);
const isNotIndex = source => !/^index\.js/.test(source);

const getModules = () => {
  const srcDirectory = join(__dirname, '../src');
  const sources = readdirSync(srcDirectory);
  const modules = sources
    .filter(isNotPrivate)
    .filter(isNotIndex)
    .filter(isModule);
  return modules;
};

module.exports = getModules;
