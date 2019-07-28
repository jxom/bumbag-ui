import { createGlobalStyle, palette, theme } from '../styled';

export default createGlobalStyle`
  html, body {
    box-sizing: border-box;
    font-family: ${theme('global.fontFamily')};
    font-size: ${theme('global.fontSize')};
    line-height: 1.5;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    color: ${palette('text')};
    fill: ${palette('text')};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  *:focus {
    outline: 2px solid ${palette('primary')};
    outline-offset: 2px;
  }

  ${theme('global.base')};
`;
