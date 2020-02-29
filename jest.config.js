module.exports = {
  transform: {
    '^.+\\.(js|jsx|tsx|ts)$': 'babel-jest'
  },
  testMatch: ['<rootDir>/src/**/__tests__/**/*.(js|ts)?(x)', '<rootDir>/src/**/?(*.)+(spec|test).(ts|js)?(x)'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
