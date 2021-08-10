const prod = process.env.NODE_ENV === 'production';
const isPlayroom = Boolean(process.env.PLAYROOM);

module.exports = !isPlayroom
  ? {
      presets: [
        [
          'babel-preset-gatsby',
          {
            targets: {
              browsers: ['>0.25%', 'not dead'],
            },
          },
        ],
      ],
      plugins: [
        'emotion',
        'babel-plugin-extract-react-types',
        '@babel/plugin-transform-flow-strip-types',
        'react-native-web',
        !prod && [
          'babel-plugin-module-resolver',
          {
            alias: {
              bumbag: '../bumbag/src',
              'bumbag-addon-highlighted-code': '../bumbag-addon-highlighted-code/src',
              'bumbag-addon-markdown': '../bumbag-addon-markdown/src',
              'bumbag-theme-medipass': '../bumbag-theme-medipass/src',
              'bumbag-native': '../bumbag-native/src',
              '@bumbag-native/picker': '../bumbag-native-picker/src',
              '@bumbag-native/bottom-sheet': '../bumbag-native-bottom-sheet/src',
              '^react-native$': 'react-native-web',
            },
          },
        ],
      ].filter(Boolean),
    }
  : {};
