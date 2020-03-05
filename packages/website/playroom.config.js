const path = require('path');

console.log(__dirname, path.cwd);

module.exports = {
  components: '../fannypack/src/index.ts',
  outputPath: './public/playroom',
  frameComponent: './src/components/PlayroomFrame.js',
  widths: [375, 768, 1024, 1200, 1440],
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
    <Container breakpoint="mobile" padding="major-2">
      <FieldStack>
        <Heading fontSize="500">Log in</Heading>
        <InputField label="Username" size="medium" />
        <InputField label="Password" size="medium" type="password" />
        <Button palette="primary" size="large" width="100%">
          Log in
        </Button>
        <Button palette="primary" size="large" kind="ghost" width="100%">
          Sign up
        </Button>
      </FieldStack>
    </Container>
  `
};
