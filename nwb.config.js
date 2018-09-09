module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'medikit',
      externals: {
        react: 'React'
      }
    }
  }
}
