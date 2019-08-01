const { ...baseConfig } = require('../../jest.config');

module.exports = {
  ...baseConfig,
  snapshotSerializers: ['jest-emotion']
};
