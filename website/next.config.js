const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  'bumbag',
  'bumbag-native',
  'react-native-svg',
  '@emotion/native',
  'react-native-web-hooks',
]);

module.exports = withPlugins([withTM], {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = ['.web.js', '.web.ts', '.web.tsx', ...config.resolve.extensions];
    return config;
  },
});
