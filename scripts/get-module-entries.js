const { existsSync, lstatSync } = require('fs');
const { join } = require('path');
const getModules = require('./get-modules');

const stripExtension = file => file.replace(/\.[^.]+$/, '');

const getModuleEntries = () => {
  const modules = [...getModules(), 'index.js'];
  return modules.reduce((entries, module) => {
    let entry = module;

    const isDirectory = lstatSync(join(__dirname, '../src', module)).isDirectory();
    if (isDirectory) {
      const doesIndexExist = existsSync(join(__dirname, '../src', module, 'index.js'));
      if (!doesIndexExist) return entries;
      entry = `${module}/index.js`;
    }

    return {
      ...entries,
      [stripExtension(module)]: join(__dirname, '../src', entry)
    };
  }, {});
};

module.exports = getModuleEntries;
