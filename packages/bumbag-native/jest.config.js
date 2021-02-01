const { ...baseConfig } = require('../../jest.config');

module.exports = {
  ...baseConfig,
  transformIgnorePatterns: ['node_modules/(?!react-native-web-hooks)'],
  moduleFileExtensions: ['web.js', 'web.ts', 'ts', 'tsx', 'js', 'jsx'],
  preset: 'react-native-web',
  snapshotSerializers: ['@emotion/jest/serializer'],
};
