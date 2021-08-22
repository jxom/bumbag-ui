const isPlayroom = Boolean(process.env.PLAYROOM);

module.exports = !isPlayroom
  ? {
      presets: ['next/babel'],
      plugins: [['react-native-web', { commonjs: true }]],
    }
  : {};
