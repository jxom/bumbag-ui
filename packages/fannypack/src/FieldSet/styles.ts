import { css, cssClass } from '../styled';
import { breakpoint, theme } from '../utils';

export const FieldSet = styleProps => cssClass`
${
  styleProps.isHorizontal
    ? css`
        display: flex;

        & > * {
          flex: 1;
        }

        ${breakpoint(
          `max-tablet`,
          css`
            display: block;
            margin-top: 0rem;
          `
        )(styleProps)}

        & {
          ${theme(`${styleProps.themeKey}.horizontal.base`)(styleProps)};
        }
      `
    : css`
        display: block;

        & {
          ${theme(`${styleProps.themeKey}.vertical.base`)(styleProps)};
        }
      `
};

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;
