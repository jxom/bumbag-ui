module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'tracksuit',
      externals: {
        react: 'React'
      }
    }
  }
}
