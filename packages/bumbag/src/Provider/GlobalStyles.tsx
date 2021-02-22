import * as React from 'react';
import { getColorModesCSSVariables, useColorMode } from '../ColorMode';
import { Global, css, ThemeContext } from '../styled';
import { palette, font, fontSize, lineHeight, theme } from '../utils';

export function GlobalStyles() {
  const _theme = React.useContext(ThemeContext);
  const { colorMode } = useColorMode();
  const styleProps = { colorMode, theme: _theme };
  const colorModesCSSVariables = React.useMemo(() => getColorModesCSSVariables(_theme), [_theme]);
  return (
    <Global
      styles={css`
        ${colorModesCSSVariables}

        html,
        body {
          background-color: ${palette('background')(styleProps)};
          box-sizing: border-box;
          font-family: ${font('default')(styleProps)};
          font-size: ${theme('global', 'fontSize')(styleProps) * fontSize('200')(styleProps)}px;
          line-height: ${lineHeight('default')(styleProps)};
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          color: ${palette('text')(styleProps)};
          fill: ${palette('text')(styleProps)};
        }

        & input:focus {
          outline: unset;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        ${font('importUrls')(styleProps) &&
        font('importUrls')(styleProps)
          .map((url: string) => `@import url('${url}');`)
          .join('')};

        ${theme('global.styles.base')(styleProps)};
      `}
    />
  );
}
