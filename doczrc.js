export default {
  dest: '/docs',
  menu: ['Getting Started', 'Primitives', 'Palette', 'Typography', 'Layout', 'Components', 'Form', 'Extras'],
  themeConfig: {
    colors: {
      primary: '#3926a5',
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
