module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'bumbag',
      externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    }
  },
  babel: {
    presets: ['flow']
  }
};
