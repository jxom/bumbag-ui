import { css, cssClass } from '../styled';
import { breakpoint, theme } from '../utils';

export const Group = styleProps => cssClass`
  display: flex;
  flex-direction: ${styleProps.isVertical ? 'column' : 'row'};

  ${breakpoint(
    styleProps.verticalBreakpoint,
    css`
      flex-direction: column;
    `
  )(styleProps)};

  & > * {
    border-radius: ${styleProps.borderRadius};
    ${theme(`${styleProps.themeKey}.Item.base`)(styleProps)};
  }

  & input:focus,
  & select:focus {
    z-index: 1;
    position: relative;
  }

  & > *:first-child {
    ${
      styleProps.isVertical
        ? css`
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
          `
        : css`
            ${breakpoint(
              styleProps.verticalBreakpoint,
              css`
                border-bottom-right-radius: 0;
                border-bottom-left-radius: 0;
              `,
              {
                else: css`
                  border-bottom-right-radius: 0;
                  border-top-right-radius: 0;
                `
              }
            )(styleProps)};
          `
    }

    & input,
    & select {
      ${
        styleProps.isVertical
          ? css`
              border-bottom-right-radius: 0;
              border-bottom-left-radius: 0;
            `
          : css`
              ${breakpoint(
                styleProps.verticalBreakpoint,
                css`
                  border-bottom-right-radius: 0;
                  border-bottom-left-radius: 0;
                `,
                {
                  else: css`
                    border-bottom-right-radius: 0;
                    border-top-right-radius: 0;
                  `
                }
              )(styleProps)};
            `
      };
    }

    ${theme(`${styleProps.themeKey}.Item.first`)(styleProps)};
  }

  & > *:last-child {
    ${
      styleProps.isVertical
        ? css`
            border-top-right-radius: 0;
            border-top-left-radius: 0;
          `
        : css`
            ${breakpoint(
              styleProps.verticalBreakpoint,
              css`
                border-top-left-radius: 0;
                border-top-right-radius: 0;
              `,
              {
                else: css`
                  border-top-left-radius: 0;
                  border-bottom-left-radius: 0;
                `
              }
            )(styleProps)};
          `
    }

    ${breakpoint(
      styleProps.verticalBreakpoint,
      css`
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 4px;
      `
    )(styleProps)};

    & input,
    & select {
      ${
        styleProps.isVertical
          ? css`
              border-top-left-radius: 0;
              border-top-right-radius: 0;
            `
          : css`
              ${breakpoint(
                styleProps.verticalBreakpoint,
                css`
                  border-top-left-radius: 0;
                  border-top-right-radius: 0;
                `,
                {
                  else: css`
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                  `
                }
              )(styleProps)};
            `
      };
    }

    ${theme(`${styleProps.themeKey}.Item.last`)(styleProps)};
  }

  & > *:not(:first-child):not(:last-child),
  & > *:not(:first-child):not(:last-child) > input,
  & > *:not(:first-child):not(:last-child) > select {
    border-radius: 0;
    ${theme(`${styleProps.themeKey}.Item.middle`)(styleProps)};
  }

  & > *:not(:first-child) {
    ${
      styleProps.isVertical
        ? css`
            border-top-width: 0;
          `
        : css`
            ${breakpoint(
              styleProps.verticalBreakpoint,
              css`
                border-top-width: 0;
              `,
              {
                else: css`
                  border-left-width: 0;
                `
              }
            )(styleProps)};
          `
    }
  }

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;
