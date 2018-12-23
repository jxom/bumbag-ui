import { palette, css, space } from '../styled';

export default {
  global: {
    fontFamily:
      "'Lato', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fallbackFontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
  },
  webFontLoader: {
    google: {
      families: ['Lato:400,500,700']
    }
  },
  fontWeights: {
    normal: 400,
    semibold: 500,
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
    secondary700: '#b7005c',
    secondary800: '#98004c',

    success200: '#e8fad7',
    success300: '#caf2a2',
    success400: '#a1ed55',
    success: '#5cb700',
    successInverted: 'white',
    success500: '#5cb700',
    success600: '#4d9801',
    success700: '#376e02',
    success800: '#234701',

    danger200: '#fad4d7',
    danger300: '#ed8893',
    danger400: '#f25a66',
    danger: '#e41625',
    danger500: '#e41625',
    danger600: '#ce1323',
    danger700: '#b4111e',
    danger800: '#850c16'
  },
  Button: {
    base: css`
      border-radius: 0px;
      border: 2px solid ${props => (props.palette === 'default' ? palette('gray700') : 'transparent')};
      color: ${props => (props.palette === 'default' ? palette('gray700') : palette(`${props.palette}Inverted`))};
      height: ${space(11)}rem;
      padding: 0 ${space(4)}rem;
      font-size: 15px;
      text-transform: uppercase;

      &:focus {
        outline: 2px solid ${props => (props.palette === 'default' ? palette('gray800') : palette())};
        outline-offset: 0;
        box-shadow: none;
      }
    `,
    outlined: css`
      border-width: 2px;
    `,
    interactive: css`
      &:focus {
        border: 2px solid white;
        background-color: ${props =>
          props.palette === 'default' ? palette('gray800') : palette(`${props.palette}600`)};
        color: ${props => (props.palette === 'default' ? 'white' : palette(`${props.palette}Inverted`))};
      }
      ${props =>
        props.palette === 'default' &&
        css`
          &:hover {
            background-color: ${palette('gray700')};
            color: white;
          }
          &:hover:active {
            background-color: ${palette('gray800')};
          }
        `};
    `,
    link: css`
      border: 2px solid transparent;
      background: unset;
    `,
    sizes: {
      small: css`
        height: ${space(8)}rem;
        font-size: 15px;
        padding: 0 ${space(4)}rem;
      `
    }
  }
};
