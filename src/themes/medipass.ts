import { palette, css, space } from '../styled';

export default {
  global: {
    base: css`
      *:focus {
        outline: 2px solid ${palette('primary')};
        outline-offset: 2px;
      }
    `,
    fontFamily:
      "'Lato', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fallbackFontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
  },
  webFontLoader: {
    google: {
      families: ['Lato:400,700']
    }
  },
  fontWeights: {
    normal: 400,
    bold: 700
  },
  palette: {
    primary200: '#d2f1fa',
    primary300: '#a4dbeb',
    primary400: '#51afc9',
    primary: '#007fa3',
    primary500: '#007fa3',
    primary600: '#0e6d8c',
    primary700: '#16556e',
    primary800: '#173c4c',

    secondary200: '#f5cee1',
    secondary300: '#f7a6cf',
    secondary400: '#ed4c9d',
    secondary: '#e70073',
    secondaryInverted: 'white',
    secondary500: '#e70073',
    secondary600: '#d10069',
    secondary700: 'b7005c',
    secondary800: '98004c',

    success200: '#e8fad7',
    success300: '#caf2a2',
    success400: '#a1ed55',
    success: '#5cb700',
    success500: '#5cb700',
    success600: '#4d9801',
    success700: '#376e02',
    success800: '#234701'
  },
  Button: {
    base: css`
      border-radius: 0px;
      height: ${space(11)}rem;
      padding: 0 ${space(4)}rem;
      font-size: 15px;
      text-transform: uppercase;
    `
  }
};
