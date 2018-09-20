module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'bumbag',
      externals: {
        react: 'React'
      }
    }
  }
};
