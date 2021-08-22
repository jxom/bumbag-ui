const path = require('path');

module.exports = {
  // TODO: target for bumbag-native
  components: '../packages/bumbag/src/index.ts',
  // components: '../bumbag-native/src/index.ts',
  outputPath: './out/playroom',
  frameComponent: './components/PlayroomFrame.js',
  widths: [375, 768, 1024, 1200, 1440],
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              cwd: path.join(__dirname, '..'),
              configFile: path.resolve(__dirname, './node_modules/playroom/.babelrc'),
            },
          },
        },
      ],
    },
    resolve: {
      alias: {
        '@bumbag-native/bottom-sheet': path.resolve(__dirname, '../packages/bumbag-native-bottom-sheet/src'),
        '@bumbag-native/picker': path.resolve(__dirname, '../packages/bumbag-native-picker/src'),
        bumbag: path.resolve(__dirname, '../packages/bumbag/src'),
        'bumbag-native': path.resolve(__dirname, '../packages/bumbag-native/src'),
        'bumbag-addon-markdown': path.resolve(__dirname, '../packages/bumbag-addon-markdown/src'),
        'bumbag-addon-highlighted-code': path.resolve(__dirname, '../packages/bumbag-addon-highlighted-code/src'),
        'bumbag-theme-medipass': path.resolve(__dirname, '../packages/bumbag-theme-medipass/src'),
        'react-native$': 'react-native-web',
        codemirror: path.resolve(__dirname, './node_modules/codemirror'),
        reakit: path.resolve(__dirname, './node_modules/reakit'),
      },
      extensions: ['.web.js', '.mjs', '.js', '.json', '.ts', '.tsx'],
      modules: [path.resolve(__dirname, '../node_modules'), 'node_modules'],
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
