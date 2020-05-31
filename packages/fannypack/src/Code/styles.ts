import { css, cssClass } from '../styled';
import { borderRadius, palette, theme } from '../utils';

export const Code = (styleProps) => cssClass`
  background-color: ${
    styleProps.palette === 'default'
      ? palette('white700')(styleProps)
      : palette(`${styleProps.palette}Tint`)(styleProps)
  };
  border-radius: ${borderRadius('1')(styleProps)};
  color: ${
    styleProps.palette === 'default' ? palette('text')(styleProps) : palette(`${styleProps.palette}700`)(styleProps)
  };
  font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', Menlo, Courier, monospace;
  padding: 0.1rem 0.2rem;
  overflow: scroll;

  & {
    ${
      styleProps.isBlock &&
      css`
        padding: 1rem;
        ${theme(styleProps.themeKey, `css.block`)(styleProps)};
      `
    }
  };

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  };
`;
