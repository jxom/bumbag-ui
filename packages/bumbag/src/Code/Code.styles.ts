import { css, cssClass } from '../styled';
import { borderRadius, font, palette, theme } from '../utils';

export const Code = (styleProps) => cssClass`
  background-color: ${
    styleProps.palette === 'default'
      ? palette('white700', { dark: 'black300' })(styleProps)
      : palette(`${styleProps.palette}Tint`, { dark: `${styleProps.palette}Shade` })(styleProps)
  };
  border-radius: ${borderRadius('1')(styleProps)};
  color: ${
    styleProps.palette === 'default'
      ? palette('text')(styleProps)
      : palette(`${styleProps.palette}700`, { dark: `${styleProps.palette}200` })(styleProps)
  };
  font-family: ${font('mono')(styleProps)};
  padding: 0.1rem 0.2rem;
  overflow: auto;

  & {
    ${
      styleProps.isBlock &&
      css`
        padding: 1rem;
        ${theme(styleProps.themeKey, `styles.block`)(styleProps)};
      `
    }
  };

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  };
`;
