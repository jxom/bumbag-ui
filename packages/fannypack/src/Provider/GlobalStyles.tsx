import * as React from 'react';
import { Global, ThemeContext, css, palette, theme } from '../styled';

export default function GlobalStyles() {
  const theme = React.useContext(ThemeContext);
  console.log(theme);
  return (
    <Global
      styles={css`
        html,
        body {
          box-sizing: border-box;
          font-family: ${theme.global.fontFamily};
          font-size: ${theme.global.fontSize}px;
          line-height: 1.5;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          color: ${theme.palette.text};
          fill: ${theme.palette.text};
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        *:focus {
          outline: 2px solid ${theme.palette.primary};
          outline-offset: 2px;
        }

        ${theme.global.base};
      `}
    />
  );
}
