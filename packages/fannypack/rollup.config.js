const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');
const commonjs = require('rollup-plugin-commonjs');
const json = require('rollup-plugin-json');
const { terser } = require('rollup-plugin-terser');
const ignore = require('rollup-plugin-ignore');
const proxyDirectories = require('rollup-plugin-proxy-directories');
const url = require('rollup-plugin-url');

const pkg = require('./package.json');

const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];

const makeExternalPredicate = externalArr => {
  if (!externalArr.length) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return id => pattern.test(id);
};

const getExternal = (umd, pkg) => {
  const external = [...Object.keys(pkg.peerDependencies), 'prop-types'];
  const allExternal = [...external, ...Object.keys(pkg.dependencies)];
  return makeExternalPredicate(umd ? external : allExternal);
};

const commonPlugins = [
  babel({
    extensions,
    exclude: ['node_modules/**', '../../node_modules/**']
  }),
  resolve({ extensions, preferBuiltins: false }),
  url()
];

const getPlugins = umd =>
  umd
    ? [
        ...commonPlugins,
        commonjs({
          include: /node_modules/,
          namedExports: {
            '../../node_modules/react-is/index.js': ['isValidElementType', 'isElement', 'ForwardRef']
          }
        }),
        ignore(['stream', 'react-test-renderer', '**/*.svg']),
        terser(),
        replace({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        json()
      ]
    : commonPlugins;

const getOutput = (umd, pkg) =>
  umd
    ? {
        name: 'Fannypack',
        file: pkg.unpkg,
        format: 'umd',
        exports: 'named',
        globals: {
          fannypack: 'Fannypack',
          react: 'React',
          'react-dom': 'ReactDOM',
          'prop-types': 'PropTypes'
        }
      }
    : [
        {
          file: pkg.main,
          format: 'cjs',
          exports: 'named'
        },
        {
          file: pkg.module,
          format: 'es'
        }
      ];

const createConfig = ({ umd, pkg, plugins = [], ...config }) => ({
  external: getExternal(umd, pkg),
  plugins: [...getPlugins(umd), ...plugins],
  output: getOutput(umd, pkg),
  ...config
});

export default [
  createConfig({
    pkg,
    experimentalCodeSplitting: true,
    input: [],
    output: [
      {
        format: 'es',
        dir: 'es'
      },
      {
        format: 'cjs',
        dir: 'lib',
        exports: 'named'
      }
    ],
    plugins: [proxyDirectories(), ignore(['react-test-renderer'])]
  }),
  createConfig({ pkg, input: 'src/index.ts', umd: true })
];
