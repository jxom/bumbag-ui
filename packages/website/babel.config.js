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
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          fannypack: '../fannypack/src'
        }
      }
    ]
  ]
};
