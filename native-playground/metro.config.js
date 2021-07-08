const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');

const watchFolders = [
  path.resolve(__dirname + '/../packages/bumbag-native-picker'),
  path.resolve(__dirname + '/../packages/bumbag-native'),
  path.resolve(__dirname + '/../packages/bumbag'),
];

module.exports = {
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
      }
    ),
    blacklist: blacklist([
      /node_modules\/.*\/node_modules\/react-native\/.*/,
      /node_modules\/.*\/node_modules\/react-native-svg\/.*/,
    ]),
  },
  watchFolders,
};
