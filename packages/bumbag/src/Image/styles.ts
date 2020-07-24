import { css, cssClass } from '../styled';
import { theme } from '../utils';

export const Image = (styleProps) => cssClass`
  ${
    styleProps.isFixed &&
    css`
      max-width: unset;

      ${theme(styleProps.themeKey, `styles.fixed`)(styleProps)};
    `
  }

  ${
    styleProps.fit === 'contain' &&
    css`
      object-fit: contain;

      ${styleProps.fitPosition &&
      css`
        object-position: ${styleProps.fitPosition};
      `};

      ${theme(styleProps.themeKey, `styles.contain`)(styleProps)};
    `
  }

  ${
    styleProps.fit === 'cover' &&
    css`
      object-fit: cover;

      ${styleProps.fitPosition &&
      css`
        object-position: ${styleProps.fitPosition};
      `};

      ${theme(styleProps.themeKey, `styles.cover`)(styleProps)};
    `
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
