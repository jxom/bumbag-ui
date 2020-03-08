import { css, cssClass } from '../styled';
import { breakpoint, space, theme } from '../utils';

export const Set = styleProps => cssClass`
  display: flex;

  ${
    styleProps.orientation === 'vertical'
      ? css`
          flex-direction: column;

          ${!styleProps.isFilled &&
            css`
              align-items: flex-start;
            `};

          & {
            ${theme(styleProps.themeKey, `css.vertical`)(styleProps)};
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
                ${theme(styleProps.themeKey, `css.vertical`)(styleProps)};
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
                  ${theme(styleProps.themeKey, `css.horizontal`)(styleProps)};
                }
              `
            }
          )(styleProps)};
        `
  };

  &&& > * {
    ${
      styleProps.orientation === 'vertical'
        ? css`
            &:not(:last-child) {
              margin-bottom: ${space(styleProps.spacing)(styleProps)}rem;
            }

            & {
              ${theme(styleProps.themeKey, `css.child.vertical`)(styleProps)};
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
                  ${theme(styleProps.themeKey, `css.child.vertical`)(styleProps)};
                }
              `,
              {
                else: css`
                  margin-left: ${space(styleProps.spacing)(styleProps)}rem;
                  margin-top: ${space(styleProps.spacing)(styleProps)}rem;

                  & {
                    ${theme(styleProps.themeKey, `css.child.horizontal`)(styleProps)};
                  }
                `
              }
            )(styleProps)};
          `
    };

    ${theme(styleProps.themeKey, `css.child.root`)(styleProps)};
  }

  &&& > *:first-child {
    ${theme(styleProps.themeKey, `css.child.first`)(styleProps)};
  }

  &&& > *:not(:last-child):not(:first-child) {
    ${theme(styleProps.themeKey, `css.child.middle`)(styleProps)};
  }

  &&& > *:last-child {
    ${theme(styleProps.themeKey, `css.child.last`)(styleProps)};
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
