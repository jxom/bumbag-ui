module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          alias: {
            bumbag: '../packages/bumbag/src',
            'bumbag-native': '../packages/bumbag-native/src',
            '@bumbag-native/picker': '../packages/bumbag-native-picker/src',
            '@bumbag-native/toast': '../packages/bumbag-native-toast/src',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
