const path = require('path');

module.exports = {
  components: '../bumbag/src/index.ts',
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
              cwd: path.join(__dirname, '../..'),
              configFile: path.resolve(__dirname, '../../node_modules/playroom/.babelrc'),
            },
          },
        },
      ],
    },
    resolve: {
      alias: {
        bumbag: path.resolve(__dirname, '../bumbag/src'),
        'bumbag-addon-markdown': path.resolve(__dirname, '../bumbag-addon-markdown/src'),
        'bumbag-addon-highlighted-code': path.resolve(__dirname, '../bumbag-addon-highlighted-code/src'),
        'bumbag-theme-medipass': path.resolve(__dirname, '../bumbag-theme-medipass/src'),
      },
      extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
      modules: [path.resolve(__dirname, '../../node_modules'), 'node_modules'],
    },
  }),
  exampleCode: `
    <PageContent>
      <Heading fontSize="500">
        Welcome to the Bumbag playroom!
      </Heading>
      <Drawer.State>
        <Drawer.Disclosure use={Button}>Click me!</Drawer.Disclosure>
        <Drawer>Hey hey!</Drawer>
      </Drawer.State>
    </PageContent>
  `,
};
