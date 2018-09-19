module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'boxkit',
      externals: {
        react: 'React'
      }
    }
  }
}
