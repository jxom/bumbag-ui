import { css, cssClass } from '../styled';
import { space, theme } from '../utils';

export const Set = styleProps => cssClass`
  ${
    styleProps.isVertical
      ? css`
          flex-direction: column;

          ${!styleProps.isFilled &&
            css`
              align-items: flex-start;
            `};
        `
      : css`
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-start;
          margin-left: -${space(styleProps.spacing)(styleProps)}rem;
          margin-top: -${space(styleProps.spacing)(styleProps)}rem;
        `
  };

  & > * {
    ${
      styleProps.isVertical
        ? css`
            &:not(:last-child) {
              margin-bottom: ${space(styleProps.spacing)(styleProps)}rem;
            }
          `
        : css`
            margin-left: ${space(styleProps.spacing)(styleProps)}rem;
            margin-top: ${space(styleProps.spacing)(styleProps)}rem;
          `
    };

    ${theme('Set.child')(styleProps)};
  }

  & {
    ${theme('Set.base')(styleProps)};
  }
`;
