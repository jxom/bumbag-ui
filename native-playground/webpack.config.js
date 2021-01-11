const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // config.include = [...config.include];
  config.module.rules[1].oneOf[2].include = [
    config.module.rules[1].oneOf[2].include,
    path.resolve(__dirname, 'node_modules/react-router-native'),
  ];
  // Customize the config before returning it.
  return config;
};
