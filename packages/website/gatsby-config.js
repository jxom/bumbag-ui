const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  developMiddleware: (app) => {
    app.use(
      '/playroom/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/playroom/': '',
        },
      })
    );
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/src/docs`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Bumbag',
        short_name: 'Bumbag',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: 76,
              icon: '<span>#</span>',
              elements: ['h1', 'h2', 'h3', 'h4'],
            },
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-bumbag',
    'gatsby-plugin-webpack-bundle-analyzer',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-172675851-1',
        defer: true,
      },
    },
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`@react-native-picker/picker`],
      },
    },
  ],
};
