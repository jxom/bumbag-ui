module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'y',
      externals: {
        react: 'React'
      }
    }
  }
}
