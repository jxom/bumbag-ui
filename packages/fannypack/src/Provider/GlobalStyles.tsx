import * as React from 'react';
import { Global, ThemeContext, css } from '../styled';
import { theme } from '../utils';

export default function GlobalStyles() {
  const _theme = React.useContext(ThemeContext);
  const styleProps = { theme: _theme };
  return (
    <Global
      styles={css`
        html,
        body {
          box-sizing: border-box;
          font-family: ${theme('global.fontFamily')(styleProps)};
          font-size: ${theme('global.fontSize')(styleProps)}px;
          line-height: 1.5;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          color: ${theme('palette.text')(styleProps)};
          fill: ${theme('palette.text')(styleProps)};
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        *:focus {
          outline: 3px solid ${theme('palette.primary200')(styleProps)};
          outline-offset: 2px;
        }

        ${theme('global.base')(styleProps)};
      `}
    />
  );
}
