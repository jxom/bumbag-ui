const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // config.include = [...config.include];
  config.module.rules[1].oneOf[2].include = [
    config.module.rules[1].oneOf[2].include,
    path.resolve(__dirname, 'node_modules/react-router-native'),
  ];
  // console.log(config.module.rules[1].oneOf[2]);
  config.module.rules[1].oneOf[2].include.push(path.resolve(__dirname, '../packages'));
  config.resolve.alias = {
    ...config.resolve.alias,
    react: path.resolve(__dirname, './node_modules/react'),
    'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
  };
  // Customize the config before returning it.
  return config;
};
