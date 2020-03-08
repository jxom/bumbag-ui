import { css, cssClass } from '../styled';
import { theme } from '../utils';

export const Image = styleProps => cssClass`
  ${styleProps.isFixed &&
    css`
      max-width: unset;

      ${theme(styleProps.themeKey, `css.fixed`)(styleProps)};
    `}

  ${styleProps.fit === 'contain' &&
    css`
      object-fit: contain;

      ${styleProps.fitPosition &&
        css`
          object-position: ${styleProps.fitPosition};
        `};

      ${theme(styleProps.themeKey, `css.contain`)(styleProps)};
    `}

  ${styleProps.fit === 'cover' &&
    css`
      object-fit: cover;

      ${styleProps.fitPosition &&
        css`
          object-position: ${styleProps.fitPosition};
        `};

      ${theme(styleProps.themeKey, `css.cover`)(styleProps)};
    `}

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
