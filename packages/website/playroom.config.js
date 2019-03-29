const path = require('path');

module.exports = {
  components: '../fannypack/src/index.ts',
  outputPath: './out/playroom',
  frameComponent: './components/PlayroomFrame.js',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              cwd: path.join(__dirname, '../..')
            }
          }
        }
      ]
    },
    resolve: {
      alias: {
        fannypack: path.resolve(__dirname, '../fannypack/src')
      },
      extensions: ['.mjs', '.js', '.json', '.ts', '.tsx']
    }
  }),
  exampleCode: `
    <Container padding="major-2">
      <Heading>Hello world!</Heading>
      <Paragraph>Welcome to the Fannypack Playroom!</Paragraph>
      <Button onClick={() => alert('Oh hi Mark')} palette="primary">Click me</Button>
    </Container>
  `
};
