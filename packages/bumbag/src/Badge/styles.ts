import { css, cssClass } from '../styled';
import { fontSize, fontWeight, palette, theme } from '../utils';

export const Badge = (styleProps) => cssClass`
  align-items: center;
  border-radius: 1rem;
  display: inline-flex;
  justify-content: center;
  background-color: ${palette(styleProps.palette)(styleProps)};
  box-sizing: content-box;
  padding: 0 0.4em;
  color: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
  fill: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
  font-size: ${fontSize('100')(styleProps)}rem;
  font-weight: ${fontWeight('semibold')(styleProps)};
  height: 1.2em;

  ${
    !styleProps.children &&
    css`
      height: 1em;
      width: 1em;
      padding: 0px;
    `
  }

  ${
    styleProps.isAttached &&
    css`
      position: absolute;
      top: -0.5em;
      right: -0.5em;

      & {
        ${theme(styleProps.themeKey, `styles.attached`)(styleProps)};
      }
    `
  }

  ${getSizeAttributes(styleProps)}

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

function getSizeAttributes(styleProps) {
  const sizeAttributes = {
    default: css`
      & {
        ${theme(styleProps.themeKey, `styles.sizes.default`)(styleProps)};
      }
    `,
    medium: css`
      & {
        font-size: ${fontSize('200')(styleProps)}rem;
        ${theme(styleProps.themeKey, `styles.sizes.medium`)(styleProps)};
      }
    `,
    large: css`
      & {
        font-size: ${fontSize('300')(styleProps)}rem;
        ${theme(styleProps.themeKey, `styles.sizes.large`)(styleProps)};
      }
    `,
  };
  return sizeAttributes[styleProps.size || 'default'];
}
