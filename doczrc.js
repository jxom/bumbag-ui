export default {
  dest: '/docs',
  menu: [
    'Getting Started',
    'Primitives',
    'Palette',
    'Typography',
    'Layout',
    'Elements',
    'Components',
    'Form',
    'Extras'
  ],
  themeConfig: {
    colors: {
      primary: '#1a9cfc',
      text: '#435a6f'
    },
    logo: {
      src: 'https://raw.githubusercontent.com/bigbellies/fannypack/master/logo.png',
      width: '230px'
    },
    styles: {
      body: {
        fontFamily: 'unset',
        color: 'unset'
      },
      h1: {
        fontWeight: 'bold'
      }
    }
  },
  wrapper: 'src/_docs/wrapper'
};
