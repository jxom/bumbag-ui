const { ...baseConfig } = require('../../jest.config');

module.exports = {
  ...baseConfig,
  preset: 'react-native-web',
  snapshotSerializers: ['@emotion/jest/serializer'],
};
