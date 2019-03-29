const path = require('path');

const mdPlugins = [
  require('remark-autolink-headings'),
  require('remark-emoji'),
  require('remark-images'),
  require('remark-slug'),
  require('remark-unwrap-images')
];

module.exports = {
  pageExtensions: ['js', 'tsx', 'ts', 'md', 'mdx'],
  webpack: (config, { defaultLoaders }) => {
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [path.join(__dirname), path.join(__dirname, '../fannypack')],
      exclude: /node_modules/,
      use: [defaultLoaders.babel]
    });
    config.module.rules[config.module.rules.length - 1].use[0].options.cwd = path.join(__dirname, '../../');
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            mdPlugins
          }
        }
      ]
    });
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/i,
      use: [
        {
          loader: 'url-loader'
        }
      ]
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      fannypack: path.resolve(__dirname, '../fannypack/src')
    };
    return config;
  }
};
