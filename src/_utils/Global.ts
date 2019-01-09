import { palette, theme } from 'styled-tools';

import { createGlobalStyle } from '../styled';

export default createGlobalStyle`
  html, body {
    box-sizing: border-box;
    font-family: ${props =>
      theme('fannypack.global.fallbackFontFamily')(props) || theme('fannypack.global.fontFamily')(props)};
    font-size: ${theme('fannypack.global.fontSize')}px;
    font-weight: ${theme('fannypack.fontWeights.normal')};
    line-height: 1.5;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    color: ${palette('text')};
    fill: ${palette('text')};
  }

  html.wf-active, body {
    font-family: ${theme('fannypack.global.fontFamily')};
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

  ${theme('fannypack.global.base')};
`;
