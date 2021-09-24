const path = require('path');
const withPlugins = require('next-compose-plugins');

function getPackages({ dev = true } = {}) {
  let suffixPath = dev ? '/src' : '';
  return {
    bumbag: path.resolve(__dirname, `../packages/bumbag${suffixPath}`),
    'bumbag-native': path.resolve(__dirname, `../packages/bumbag-native${suffixPath}`),
    'bumbag-addon-markdown': path.resolve(__dirname, `../packages/bumbag-addon-markdown${suffixPath}`),
    'bumbag-addon-highlighted-code': path.resolve(__dirname, `../packages/bumbag-addon-highlighted-code${suffixPath}`),
    '@bumbag-native/picker': path.resolve(__dirname, `../packages/bumbag-native-picker${suffixPath}`),
    '@bumbag-native/haptic': path.resolve(__dirname, `../packages/bumbag-native-haptic${suffixPath}`),
  };
}

const withTM = require('next-transpile-modules')([
  ...Object.keys(getPackages()),
  'react-native-svg',
  '@emotion/native',
  'react-native-web-hooks',
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

    const packages = getPackages({ dev });

    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
      ...packages,
    };
    config.resolve.extensions = ['.web.js', '.web.ts', '.web.tsx', ...config.resolve.extensions];

    if (dev) {
      if (isServer) {
        config.externals = ['react', ...config.externals];
      }
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
