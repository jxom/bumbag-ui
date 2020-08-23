import { css, cssClass } from '../styled';
import { breakpoint, borderRadius, theme } from '../utils';

export const Group = (styleProps) => cssClass`
  flex-direction: ${styleProps.orientation === 'vertical' ? 'column' : 'row'};

  ${breakpoint(
    styleProps.verticalBelow ? `max-${styleProps.verticalBelow}` : null,
    css`
      flex-direction: column;
    `
  )(styleProps)};

  && > * {
    border-radius: 0px;
    ${theme(styleProps.themeKey, `Item.styles.base`)(styleProps)};
  }

  & input,
  & select {
    border-radius: 0px;

    &:focus {
      z-index: 1;
      position: relative;
    }
  }

  & > *:first-child {
    ${
      styleProps.orientation === 'vertical'
        ? css`
            border-top-right-radius: ${borderRadius(styleProps.borderRadius, styleProps.borderRadius)(styleProps)};
            border-top-left-radius: ${borderRadius(styleProps.borderRadius, styleProps.borderRadius)(styleProps)};
          `
        : css`
            ${breakpoint(
              styleProps.verticalBelow ? `max-${styleProps.verticalBelow}` : null,
              css`
                border-top-right-radius: ${borderRadius(styleProps.borderRadius, styleProps.borderRadius)(styleProps)};
                border-top-left-radius: ${borderRadius(styleProps.borderRadius, styleProps.borderRadius)(styleProps)};
              `,
              {
                else: css`
                  border-bottom-left-radius: ${borderRadius(
                    styleProps.borderRadius,
                    styleProps.borderRadius
                  )(styleProps)};
                  border-top-left-radius: ${borderRadius(styleProps.borderRadius, styleProps.borderRadius)(styleProps)};
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
              border-top-right-radius: ${borderRadius(styleProps.borderRadius, styleProps.borderRadius)(styleProps)};
              border-top-left-radius: ${borderRadius(styleProps.borderRadius, styleProps.borderRadius)(styleProps)};
            `
          : css`
              ${breakpoint(
                styleProps.verticalBelow ? `max-${styleProps.verticalBelow}` : null,
                css`
                  border-top-right-radius: ${borderRadius(
                    styleProps.borderRadius,
                    styleProps.borderRadius
                  )(styleProps)};
                  border-top-left-radius: ${borderRadius(styleProps.borderRadius, styleProps.borderRadius)(styleProps)};
                `,
                {
                  else: css`
                    border-bottom-left-radius: ${borderRadius(
                      styleProps.borderRadius,
                      styleProps.borderRadius
                    )(styleProps)};
                    border-top-left-radius: ${borderRadius(
                      styleProps.borderRadius,
                      styleProps.borderRadius
                    )(styleProps)};
                  `,
                }
              )(styleProps)};
            `
      };
    }

    ${theme(styleProps.themeKey, `Item.styles.first`)(styleProps)};
  }

  & > *:last-child {
    ${
      styleProps.orientation === 'vertical'
        ? css`
            border-bottom-right-radius: ${borderRadius(styleProps.borderRadius, styleProps.borderRadius)(styleProps)};
            border-bottom-left-radius: ${borderRadius(styleProps.borderRadius, styleProps.borderRadius)(styleProps)};
          `
        : css`
            ${breakpoint(
              styleProps.verticalBelow ? `max-${styleProps.verticalBelow}` : null,
              css`
                border-bottom-left-radius: ${borderRadius(
                  styleProps.borderRadius,
                  styleProps.borderRadius
                )(styleProps)};
                border-bottom-right-radius: ${borderRadius(
                  styleProps.borderRadius,
                  styleProps.borderRadius
                )(styleProps)};
              `,
              {
                else: css`
                  border-top-right-radius: ${borderRadius(
                    styleProps.borderRadius,
                    styleProps.borderRadius
                  )(styleProps)};
                  border-bottom-right-radius: ${borderRadius(
                    styleProps.borderRadius,
                    styleProps.borderRadius
                  )(styleProps)};
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
              border-bottom-left-radius: ${borderRadius(styleProps.borderRadius, styleProps.borderRadius)(styleProps)};
              border-bottom-right-radius: ${borderRadius(styleProps.borderRadius, styleProps.borderRadius)(styleProps)};
            `
          : css`
              ${breakpoint(
                styleProps.verticalBelow ? `max-${styleProps.verticalBelow}` : null,
                css`
                  border-bottom-left-radius: ${borderRadius(
                    styleProps.borderRadius,
                    styleProps.borderRadius
                  )(styleProps)};
                  border-bottom-right-radius: ${borderRadius(
                    styleProps.borderRadius,
                    styleProps.borderRadius
                  )(styleProps)};
                `,
                {
                  else: css`
                    border-top-right-radius: ${borderRadius(
                      styleProps.borderRadius,
                      styleProps.borderRadius
                    )(styleProps)};
                    border-bottom-right-radius: ${borderRadius(
                      styleProps.borderRadius,
                      styleProps.borderRadius
                    )(styleProps)};
                  `,
                }
              )(styleProps)};
            `
      };
    }

    ${theme(styleProps.themeKey, `Item.styles.last`)(styleProps)};
  }

  & > *:not(:first-child):not(:last-child),
  & > *:not(:first-child):not(:last-child) > input,
  & > *:not(:first-child):not(:last-child) > select {
    border-radius: 0;
    ${theme(styleProps.themeKey, `Item.styles.middle`)(styleProps)};
  }

  & > *:not(:first-child) {
    ${
      styleProps.orientation === 'vertical'
        ? css`
            border-top-width: 0;
          `
        : css`
            ${breakpoint(
              styleProps.verticalBelow ? `max-${styleProps.verticalBelow}` : null,
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
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
