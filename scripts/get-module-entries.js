const { existsSync, lstatSync, readdirSync } = require('fs');
const { join } = require('path');
const getModules = require('./get-modules');

const stripExtension = file => file.replace(/\.[^.]+$/, '');

const getModuleEntries = () => {
  const modules = [...getModules(), 'index.ts'];
  return modules.reduce((entries, module) => {
    let entry = module;

    const isDirectory = lstatSync(join(__dirname, '../src', module)).isDirectory();
    if (isDirectory) {
      const dir = readdirSync(join(__dirname, '../src', module));
      const indexFile = dir.find(file => file.match(/index.(js|jsx|tsx|ts)$/));
      entry = `${module}/${indexFile}`;
    }

    return {
      ...entries,
      [stripExtension(module)]: join(__dirname, '../src', entry)
    };
  }, {});
};

module.exports = getModuleEntries;
