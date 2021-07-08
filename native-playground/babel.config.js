module.exports = function (api) {
  api.cache(false);
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
          },
        },
      ],
    ],
  };
};
