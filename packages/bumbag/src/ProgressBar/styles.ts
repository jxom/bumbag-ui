import { css, cssClass } from '../styled';
import { borderRadius, tint, palette, theme } from '../utils';

export const ProgressBar = (styleProps) => cssClass`
  border-radius: ${borderRadius('default')(styleProps)};
  overflow: hidden;
  width: 100%;
  height: 1rem;
  background-color: ${palette(`${styleProps.color}Tint`, { dark: `${styleProps.color}Shade` })(styleProps)};

  ${getSizeAttributes(styleProps)};

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const ProgressBarIndicator = (styleProps) => cssClass`
  height: 100%;
  background-color: ${palette(styleProps.color)(styleProps)};
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: ${styleProps.value || '0'}%;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

function getSizeAttributes(styleProps) {
  const sizeAttributes = {
    small: css`
      height: 0.6rem;

      & {
        ${theme(styleProps.themeKey, `css.sizes.small`)(styleProps)};
      }
    `,
    default: css`
      & {
        ${theme(styleProps.themeKey, `css.sizes.default`)(styleProps)};
      }
    `,
    medium: css`
      height: 1.5rem;

      & {
        ${theme(styleProps.themeKey, `css.sizes.medium`)(styleProps)};
      }
    `,
    large: css`
      height: 2rem;

      & {
        ${theme(styleProps.themeKey, `css.sizes.large`)(styleProps)};
      }
    `,
  };
  return sizeAttributes[styleProps.size || 'default'];
}
