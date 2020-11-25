import { css, cssClass } from '../styled';
import { palette, fontSize, space, theme } from '../utils';

export const Rating = (styleProps) => cssClass`
  align-items: center;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const RatingItem = (styleProps) => cssClass`
  color: ${
    styleProps.isActive ? palette(styleProps.color)(styleProps) : palette('white900', { dark: 'gray800' })(styleProps)
  };
  display: inline-flex;
  transition: color 0.1s, transform 0.2s;

  ${
    !styleProps.disabled &&
    css`
      &:hover {
        transform: scale(1.2);
      }
      &:hover:active {
        transform: scale(1.1);
      }
    `
  }

  ${
    styleProps.disabled &&
    !styleProps.isStatic &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `
  }

  &:not(:first-of-type) {
    margin-left: ${space(1)(styleProps)}rem;
  }

  ${getSizeAttributes(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

function getSizeAttributes(styleProps) {
  const sizeAttributes = {
    small: css`
      font-size: ${fontSize('300')(styleProps)}rem;

      & {
        ${theme(styleProps.themeKey, `styles.sizes.small`)(styleProps)};
      }
    `,
    default: css`
      font-size: ${fontSize('400')(styleProps)}rem;

      & {
        ${theme(styleProps.themeKey, `styles.sizes.default`)(styleProps)};
      }
    `,
    medium: css`
      font-size: ${fontSize('500')(styleProps)}rem;

      & {
        ${theme(styleProps.themeKey, `styles.sizes.medium`)(styleProps)};
      }
    `,
    large: css`
      font-size: ${fontSize('600')(styleProps)}rem;

      & {
        ${theme(styleProps.themeKey, `styles.sizes.large`)(styleProps)};
      }
    `,
  };
  return sizeAttributes[styleProps.size || 'default'];
}
