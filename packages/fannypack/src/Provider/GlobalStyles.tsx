import * as React from 'react';
import { Global, ThemeContext, css, palette, theme } from '../styled';

export default function GlobalStyles() {
  const _theme = React.useContext(ThemeContext);
  const props = { theme: _theme };
  return (
    <Global
      styles={css`
        html,
        body {
          box-sizing: border-box;
          font-family: ${theme('global.fontFamily')(props)};
          font-size: ${theme('global.fontSize')(props)}px;
          line-height: 1.5;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          color: ${theme('palette.text')(props)};
          fill: ${theme('palette.text')(props)};
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        *:focus {
          outline: 2px solid ${theme('palette.primary')(props)};
          outline-offset: 2px;
        }

        ${theme('global.base')(props)};
      `}
    />
  );
}
