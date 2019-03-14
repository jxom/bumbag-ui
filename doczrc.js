import { css } from 'reakit/styled';

export default {
  title: 'Fannypack',
  description: 'A friendly, themeable, accessible React UI Kit',
  dest: '/docs',
  files: '**/src/**/*.mdx',
  menu: [
    'Home',
    'Getting Started',
    'Primitives',
    'Palette',
    'Typography',
    'Layout',
    'Components',
    'Form',
    'Utilities',
    'Styling & Theming',
    { name: 'Playroom', href: '/playroom' }
  ],
  themeConfig: {
    colors: {
      primary: '#444bc9',
      text: '#435a6f'
    },
    logo: {
      src: 'https://raw.githubusercontent.com/fannypackui/fannypack/master/logo.png',
      width: '230px'
    },
    showPlaygroundEditor: true,
    styles: {
      body: css`
        font-family: unset;
        font-size: 16px;
        color: unset;

        // Quick dirty hacks until we create our own docz theme
        & nav a {
          font-size: 16px !important;
        }

        & #get-started a,
        & #changelog a,
        & #component-status a {
          color: #444bc9;
        }

        & > div > div > div {
          font-size: 16px !important;
        }
      `,
      h1: {
        fontWeight: 'bold',
        fontSize: '48px',
        fontFamily: 'unset'
      },
      h2: {
        fontWeight: '600',
        fontFamily: 'unset'
      },
      paragraph: {
        fontSize: '16px'
      },
      li: {
        fontSize: '16px'
      }
    }
  },
  wrapper: 'src/_docs/wrapper',
  codeSandbox: false,
  typescript: true,
  propsParser: false,
  modifyBabelRc: (babelrc, args) => {
    function removeFromBabelConfig(key, nameToRemove) {
      return babelrc[key].filter(entry => {
        let name = entry;
        if (Array.isArray(entry)) {
          name = entry[0];
        }
        return !name.includes(nameToRemove);
      });
    }
    babelrc.presets = removeFromBabelConfig('presets', 'babel-preset-docz');
    babelrc.presets.push(['docz-fannypack', { parseProps: false, typescript: true, flow: false }]);
    // TODO: Disable react-hot-loader for now. Seems to be bugged. Add back in later.
    babelrc.plugins = removeFromBabelConfig('plugins', 'react-hot-loader');
    return babelrc;
  },
  htmlContext: {
    favicon: 'https://github.com/fannypackui/fannypack/blob/master/src/_docs/icon.png?raw=true',
    head: {
      meta: [
        {
          name: 'twitter:title',
          content: 'Fannypack'
        },
        {
          name: 'twitter:creator',
          content: '@jxom_'
        },
        {
          name: 'twitter:description',
          content: 'A friendly, themeable, accessible React UI Kit'
        },
        {
          name: 'twitter:url',
          content: 'https://fannypack.style'
        },
        {
          name: 'twitter:image',
          content: 'https://github.com/fannypackui/fannypack/raw/master/fannypack.png'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'og:type',
          content: 'website'
        },
        {
          name: 'og:title',
          content: 'Fannypack'
        },
        {
          name: 'og:description',
          content: 'A friendly, themeable, accessible React UI Kit'
        }
      ]
    }
  }
};
