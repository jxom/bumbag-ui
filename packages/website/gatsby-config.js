module.exports = {
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
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
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
    'gatsby-plugin-emotion',
    'gatsby-plugin-webpack-bundle-analyzer',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-172675851-1',
        defer: true,
      },
    },
  ],
};
