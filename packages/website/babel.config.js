const prod = process.env.NODE_ENV === 'production';

module.exports = {
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
    !prod && [
      'babel-plugin-module-resolver',
      {
        alias: {
          bumbag: '../bumbag/src',
          'bumbag-addon-highlighted-code': '../bumbag-addon-highlighted-code/src',
          'bumbag-addon-markdown': '../bumbag-addon-markdown/src',
          'bumbag-theme-medipass': '../bumbag-theme-medipass/src',
        },
      },
    ],
  ].filter(Boolean),
};
