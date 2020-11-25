import { css, cssClass } from '../styled';
import { palette, theme } from '../utils';

export const Avatar = (styleProps) => cssClass`
  width: 60px;
  height: 60px;
  overflow: hidden;
  object-fit: cover;

  ${
    styleProps.variant === 'circle' &&
    css`
      border-radius: 50%;

      & {
        ${theme(styleProps.themeKey, `circle.base`)(styleProps)};
      }
    `
  }

  ${
    styleProps.initials &&
    css`
      background-color: ${palette(styleProps.palette)(styleProps)};
      color: ${palette(`${styleProps.palette}Inverted`)(styleProps)};
      display: flex;
      justify-content: center;
      align-items: center;
    `
  }

  ${getSizeAttributes(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

function getSizeAttributes(styleProps) {
  const sizeAttributes = {
    small: css`
      width: 40px;
      height: 40px;

      & {
        ${theme(styleProps.themeKey, `styles.sizes.small`)(styleProps)};
      }
    `,
    default: css`
      width: 60px;
      height: 60px;
      font-size: 24px;

      & {
        ${theme(styleProps.themeKey, `styles.sizes.default`)(styleProps)};
      }
    `,
    medium: css`
      width: 80px;
      height: 80px;
      font-size: 36px;

      & {
        ${theme(styleProps.themeKey, `styles.sizes.medium`)(styleProps)};
      }
    `,
    large: css`
      width: 100px;
      height: 100px;
      font-size: 48px;

      & {
        ${theme(styleProps.themeKey, `styles.sizes.large`)(styleProps)};
      }
    `,
  };
  return (
    sizeAttributes[styleProps.size] ||
    css`
      width: ${styleProps.size};
      height: ${styleProps.size};
    `
  );
}
