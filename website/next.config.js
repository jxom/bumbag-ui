const path = require('path');
const withPlugins = require('next-compose-plugins');

const packages = {
  bumbag: path.resolve(__dirname, '../packages/bumbag/src'),
  'bumbag-native': path.resolve(__dirname, '../packages/bumbag-native/src'),
  'bumbag-addon-markdown': path.resolve(__dirname, '../packages/bumbag-addon-markdown/src'),
  'bumbag-addon-highlighted-code': path.resolve(__dirname, '../packages/bumbag-addon-highlighted-code/src'),
  '@bumbag-native/bottom-sheet': path.resolve(__dirname, '../packages/bumbag-native-bottom-sheet/src'),
  '@bumbag-native/picker': path.resolve(__dirname, '../packages/bumbag-native-picker/src'),
  '@bumbag-native/toast': path.resolve(__dirname, '../packages/bumbag-native-toast/src'),
  'react-native-reanimated': path.resolve(__dirname, './node_modules/react-native-reanimated'),
};

const withTM = require('next-transpile-modules')([
  ...Object.keys(packages),
  'react-native-svg',
  '@emotion/native',
  'react-native-web-hooks',
  'react-native-reanimated',
]);

module.exports = withPlugins([withTM], {
  async rewrites() {
    return [
      {
        source: '/docs',
        destination: '/docs/getting-started',
      },
      {
        source: '/docs/native',
        destination: '/docs/native/getting-started',
      },
    ];
  },
  ignoreBuildErrors: true,
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    const prod = !dev;

    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
          child_process: false,
          worker_threads: false,
        },
      };
    }

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
        '@emotion/native': path.resolve(__dirname, './node_modules/@emotion/native'),
        '@emotion/css': path.resolve(__dirname, './node_modules/@emotion/css'),
        '@emotion/react': path.resolve(__dirname, './node_modules/@emotion/react'),
        react: path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        'react-native-reanimated': path.resolve(__dirname, './node_modules/react-native-reanimated'),
        'react-native$': 'react-native-web',
        ...packages,
      };
      config.resolve.extensions = ['.web.js', '.web.ts', '.web.tsx', ...config.resolve.extensions];

      config.module.rules.push(config.module.rules[3]);
      config.module.rules[4].include = [];

      Object.values(packages).forEach((pkg) => {
        config.module.rules[1].include.push(pkg);
        config.module.rules[4].include.push(pkg);
      });
    }

    return config;
  },
});
