export default {
  dest: '/docs',
  menu: ['Getting Started', 'Primitives', 'Palette', 'Typography', 'Layout', 'Elements', 'Theming'],
  themeConfig: {
    colors: {
      primary: '#1a9cfc'
    },
    logo: {
      src: 'https://raw.githubusercontent.com/bigbellies/bumbag/master/logo.png',
      width: '230px'
    },
    styles: {
      body: {
        fontFamily: 'unset'
      },
      h1: {
        fontWeight: 'bold'
      }
    }
  },
  wrapper: 'src/_docs/wrapper'
};
