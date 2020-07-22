import { css, cssClass } from '../styled';
import { breakpoint, borderRadius, theme } from '../utils';

const verticalBreakpoints = {
  tablet: 'mobile',
  desktop: 'tablet',
  widescreen: 'desktop',
  fullHD: 'widescreen',
};

export const Group = (styleProps) => cssClass`
  flex-direction: ${styleProps.orientation === 'vertical' ? 'column' : 'row'};

  ${breakpoint(
    styleProps.verticalBelow ? `max-${verticalBreakpoints[styleProps.verticalBelow]}` : null,
    css`
      flex-direction: column;
    `
  )(styleProps)};

  & > * {
    border-radius: ${borderRadius(styleProps.borderRadius, styleProps.borderRadius)(styleProps)};
    ${theme(styleProps.themeKey, `Item.css.root`)(styleProps)};
  }

  & input:focus,
  & select:focus {
    z-index: 1;
    position: relative;
  }

  & > *:first-child {
    ${
      styleProps.orientation === 'vertical'
        ? css`
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
          `
        : css`
            ${breakpoint(
              styleProps.verticalBelow ? `max-${verticalBreakpoints[styleProps.verticalBelow]}` : null,
              css`
                border-bottom-right-radius: 0;
                border-bottom-left-radius: 0;
              `,
              {
                else: css`
                  border-bottom-right-radius: 0;
                  border-top-right-radius: 0;
                `,
              }
            )(styleProps)};
          `
    }

    & input,
    & select {
      ${
        styleProps.orientation === 'vertical'
          ? css`
              border-bottom-right-radius: 0;
              border-bottom-left-radius: 0;
            `
          : css`
              ${breakpoint(
                styleProps.verticalBelow ? `max-${verticalBreakpoints[styleProps.verticalBelow]}` : null,
                css`
                  border-bottom-right-radius: 0;
                  border-bottom-left-radius: 0;
                `,
                {
                  else: css`
                    border-bottom-right-radius: 0;
                    border-top-right-radius: 0;
                  `,
                }
              )(styleProps)};
            `
      };
    }

    ${theme(styleProps.themeKey, `Item.css.first`)(styleProps)};
  }

  & > *:last-child {
    ${
      styleProps.orientation === 'vertical'
        ? css`
            border-top-right-radius: 0;
            border-top-left-radius: 0;
          `
        : css`
            ${breakpoint(
              styleProps.verticalBelow ? `max-${verticalBreakpoints[styleProps.verticalBelow]}` : null,
              css`
                border-top-left-radius: 0;
                border-top-right-radius: 0;
              `,
              {
                else: css`
                  border-top-left-radius: 0;
                  border-bottom-left-radius: 0;
                `,
              }
            )(styleProps)};
          `
    }

    ${breakpoint(
      styleProps.verticalBelow ? `max-${verticalBreakpoints[styleProps.verticalBelow]}` : null,
      css`
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: ${borderRadius(styleProps.borderRadius, styleProps.borderRadius)(styleProps)};
      `
    )(styleProps)};

    & input,
    & select {
      ${
        styleProps.orientation === 'vertical'
          ? css`
              border-top-left-radius: 0;
              border-top-right-radius: 0;
            `
          : css`
              ${breakpoint(
                styleProps.verticalBelow ? `max-${verticalBreakpoints[styleProps.verticalBelow]}` : null,
                css`
                  border-top-left-radius: 0;
                  border-top-right-radius: 0;
                `,
                {
                  else: css`
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                  `,
                }
              )(styleProps)};
            `
      };
    }

    ${theme(styleProps.themeKey, `Item.css.last`)(styleProps)};
  }

  & > *:not(:first-child):not(:last-child),
  & > *:not(:first-child):not(:last-child) > input,
  & > *:not(:first-child):not(:last-child) > select {
    border-radius: 0;
    ${theme(styleProps.themeKey, `Item.css.middle`)(styleProps)};
  }

  & > *:not(:first-child) {
    ${
      styleProps.orientation === 'vertical'
        ? css`
            border-top-width: 0;
          `
        : css`
            ${breakpoint(
              styleProps.verticalBelow ? `max-${verticalBreakpoints[styleProps.verticalBelow]}` : null,
              css`
                border-top-width: 0;
              `,
              {
                else: css`
                  border-left-width: 0;
                `,
              }
            )(styleProps)};
          `
    }
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
