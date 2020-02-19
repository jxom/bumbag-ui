const prod = process.env.NODE_ENV === 'production';

module.exports = {
  presets: [
    [
      'babel-preset-gatsby',
      {
        targets: {
          browsers: ['>0.25%', 'not dead']
        }
      }
    ]
  ],
  plugins: [
    'babel-plugin-extract-react-types',
    !prod && [
      'babel-plugin-module-resolver',
      {
        alias: {
          fannypack: '../fannypack/src',
          'fannypack-addon-highlighted-code': '../fannypack-addon-highlighted-code/src'
        }
      }
    ]
  ].filter(Boolean)
};
