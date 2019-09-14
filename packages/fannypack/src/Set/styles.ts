import { css, cssClass } from '../styled';
import { breakpoint, space, theme } from '../utils';

export const Set = styleProps => cssClass`
  display: flex;

  ${
    styleProps.isVertical
      ? css`
          flex-direction: column;

          ${!styleProps.isFilled &&
            css`
              align-items: flex-start;
            `};

          & {
            ${theme(`${styleProps.themeKey}.vertical`)(styleProps)};
          }
        `
      : css`
          ${breakpoint(
            styleProps.verticalBreakpoint,
            css`
              flex-direction: column;

              ${!styleProps.isFilled &&
                css`
                  align-items: flex-start;
                `};

              & {
                ${theme(`${styleProps.themeKey}.vertical`)(styleProps)};
              }
            `,
            {
              else: css`
                flex-wrap: wrap;
                align-items: center;
                justify-content: flex-start;
                margin-left: -${space(styleProps.spacing)(styleProps)}rem;
                margin-top: -${space(styleProps.spacing)(styleProps)}rem;

                & {
                  ${theme(`${styleProps.themeKey}.horizontal`)(styleProps)};
                }
              `
            }
          )(styleProps)};
        `
  };

  & > * {
    ${
      styleProps.isVertical
        ? css`
            &:not(:last-child) {
              margin-bottom: ${space(styleProps.spacing)(styleProps)}rem;
            }

            & {
              ${theme(`${styleProps.themeKey}.child.vertical`)(styleProps)};
            }
          `
        : css`
            ${breakpoint(
              styleProps.verticalBreakpoint,
              css`
                &:not(:last-child) {
                  margin-bottom: ${space(styleProps.spacing)(styleProps)}rem;
                }

                & {
                  ${theme(`${styleProps.themeKey}.child.vertical`)(styleProps)};
                }
              `,
              {
                else: css`
                  margin-left: ${space(styleProps.spacing)(styleProps)}rem;
                  margin-top: ${space(styleProps.spacing)(styleProps)}rem;

                  & {
                    ${theme(`${styleProps.themeKey}.child.horizontal`)(styleProps)};
                  }
                `
              }
            )(styleProps)};
          `
    };

    ${theme(`${styleProps.themeKey}.child.base`)(styleProps)};
  }

  & > *:first-child {
    ${theme(`${styleProps.themeKey}.child.first`)(styleProps)};
  }

  & > *:not(:last-child):not(:first-child) {
    ${theme(`${styleProps.themeKey}.child.middle`)(styleProps)};
  }

  & > *:last-child {
    ${theme(`${styleProps.themeKey}.child.last`)(styleProps)};
  }

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;
