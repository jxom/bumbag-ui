const path = require('path');
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
    const prod = !dev;
    if (prod) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-native$': 'react-native-web',
      };
      config.resolve.extensions = ['.web.js', '.web.ts', '.web.tsx', ...config.resolve.extensions];
    }
    if (dev) {
      if (isServer) {
        config.externals = ['react', ...config.externals];
      }

      config.resolve.alias = {
        ...config.resolve.alias,
        react: path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        'react-native$': 'react-native-web',
        bumbag: path.resolve(__dirname, '../packages/bumbag/src'),
        'bumbag-native': path.resolve(__dirname, '../packages/bumbag-native/src'),
      };
      config.resolve.extensions = ['.web.js', '.web.ts', '.web.tsx', ...config.resolve.extensions];
      config.module.rules[1].include.push(path.resolve(__dirname, '../packages/bumbag/src'));
      config.module.rules[1].include.push(path.resolve(__dirname, '../packages/bumbag-native/src'));
      config.module.rules[3].include = [path.resolve(__dirname, '../packages/bumbag/src')];
      config.module.rules[3].include = [path.resolve(__dirname, '../packages/bumbag-native/src')];
    }
    return config;
  },
});
