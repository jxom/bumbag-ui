// Learn more https://docs.expo.io/guides/customizing-metro
const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const watchFolders = [
  path.resolve(__dirname + '/../packages/bumbag-native-bottom-sheet'),
  path.resolve(__dirname + '/../packages/bumbag-native-haptic'),
  path.resolve(__dirname + '/../packages/bumbag-native-picker'),
  path.resolve(__dirname + '/../packages/bumbag-native-toast'),
  path.resolve(__dirname + '/../packages/bumbag-native'),
  path.resolve(__dirname + '/../packages/bumbag'),
];

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
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
  watchFolders: [...defaultConfig.watchFolders, ...watchFolders],
};
