import * as React from 'react';
import { Global, css, ThemeContext } from '../styled';
import { palette, font, theme, useColorMode } from '../utils';

export default function GlobalStyles() {
  const _theme = React.useContext(ThemeContext);
  const { colorMode } = useColorMode();
  const styleProps = { colorMode, theme: _theme };
  return (
    <Global
      styles={css`
        html,
        body {
          background-color: ${palette('background')(styleProps)};
          box-sizing: border-box;
          font-family: ${font('default')(styleProps)};
          font-size: ${theme('global', 'fontSize')(styleProps)}px;
          line-height: 1.5;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          color: ${palette('text')(styleProps)};
          fill: ${palette('text')(styleProps)};
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        ${font('importUrls')(styleProps) &&
        font('importUrls')(styleProps)
          .map((url: string) => `@import url('${url}')`)
          .join(';')};

        ${theme('global.styles.base')(styleProps)};
      `}
    />
  );
}
