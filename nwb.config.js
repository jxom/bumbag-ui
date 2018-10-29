module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'fannypack',
      externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    }
  },
  babel: {
    presets: ['flow'],
    plugins: ['transform-class-properties']
  }
};
