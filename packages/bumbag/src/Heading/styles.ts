import { css, cssClass } from '../styled';
import { breakpoint, font, getLineGapInPx, fontWeight, space, theme, getCapsizeStyles } from '../utils';

export const Heading = (styleProps) => cssClass`
  font-family: ${font('heading')(styleProps) || font('default')(styleProps)};
  font-weight: ${fontWeight('bold')(styleProps)};

  ${getCapsizeStyles({ lineHeight: 'heading', includeBottomGap: true })(styleProps)};

  h1& {
    ${getCapsizeStyles({ fontSize: '700', lineHeight: 'heading', includeBottomGap: true })(styleProps)};

    & {
      ${theme(styleProps.themeKey, `h1.styles.base`)(styleProps)};
    }

    ${
      styleProps.shrinkBelow &&
      breakpoint(
        `max-${styleProps.shrinkBelow}`,
        css`
          ${getCapsizeStyles({ fontSize: '700', lineHeight: 'heading', includeBottomGap: true, shrinkScale: 0.75 })(
            styleProps
          )};

          & {
            ${theme(styleProps.themeKey, `h1.styles.shrinked`)(styleProps)};
          }
        `
      )(styleProps)
    };
  }
  h2& {
    ${getCapsizeStyles({ fontSize: '600', lineHeight: 'heading', includeBottomGap: true })(styleProps)};

    & {
      ${theme(styleProps.themeKey, `h2.styles.base`)(styleProps)};
    }

    ${
      styleProps.shrinkBelow &&
      breakpoint(
        `max-${styleProps.shrinkBelow}`,
        css`
          ${getCapsizeStyles({ fontSize: '600', lineHeight: 'heading', includeBottomGap: true, shrinkScale: 0.75 })(
            styleProps
          )};

          & {
            ${theme(styleProps.themeKey, `h2.styles.shrinked`)(styleProps)};
          }
        `
      )(styleProps)
    };
  }
  h3& {
    ${getCapsizeStyles({ fontSize: '500', lineHeight: 'heading', includeBottomGap: true })(styleProps)};

    & {
      ${theme(styleProps.themeKey, `h3.styles.base`)(styleProps)};
    }

    ${
      styleProps.shrinkBelow &&
      breakpoint(
        `max-${styleProps.shrinkBelow}`,
        css`
          ${getCapsizeStyles({ fontSize: '500', lineHeight: 'heading', includeBottomGap: true, shrinkScale: 0.75 })(
            styleProps
          )};

          & {
            ${theme(styleProps.themeKey, `h3.styles.shrinked`)(styleProps)};
          }
        `
      )(styleProps)
    };
  }
  h4& {
    ${getCapsizeStyles({ fontSize: '400', lineHeight: 'heading', includeBottomGap: true })(styleProps)};

    & {
      ${theme(styleProps.themeKey, `h4.styles.base`)(styleProps)};
    }

    ${
      styleProps.shrinkBelow &&
      breakpoint(
        `max-${styleProps.shrinkBelow}`,
        css`
          ${getCapsizeStyles({ fontSize: '400', lineHeight: 'heading', includeBottomGap: true, shrinkScale: 0.75 })(
            styleProps
          )};

          & {
            ${theme(styleProps.themeKey, `h4.styles.shrinked`)(styleProps)};
          }
        `
      )(styleProps)
    };
  }
  h5& {
    ${getCapsizeStyles({ fontSize: '300', lineHeight: 'heading', includeBottomGap: true })(styleProps)};

    & {
      ${theme(styleProps.themeKey, `h5.styles.base`)(styleProps)};
    }

    ${
      styleProps.shrinkBelow &&
      breakpoint(
        `max-${styleProps.shrinkBelow}`,
        css`
          ${getCapsizeStyles({ fontSize: '300', lineHeight: 'heading', includeBottomGap: true, shrinkScale: 0.875 })(
            styleProps
          )};

          & {
            ${theme(styleProps.themeKey, `h5.styles.shrinked`)(styleProps)};
          }
        `
      )(styleProps)
    };
  }
  h6& {
    ${getCapsizeStyles({ fontSize: '200', lineHeight: 'heading', includeBottomGap: true })(styleProps)};

    & {
      ${theme(styleProps.themeKey, `h6.styles.base`)(styleProps)};
    }

    ${
      styleProps.shrinkBelow &&
      breakpoint(
        `max-${styleProps.shrinkBelow}`,
        css`
          & {
            ${theme(styleProps.themeKey, `h6.styles.shrinked`)(styleProps)};
          }
        `
      )(styleProps)
    };
  }

  & {
    ${styleProps.isSubHeading && getSubHeadingProperties(styleProps)};
  }

  & .bb-Icon {
    vertical-align: -0.125em;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const getSubHeadingProperties = (styleProps) => cssClass`
  font-weight: ${fontWeight('semibold')(styleProps)};

  & {
    ${theme(styleProps.themeKey, `subHeading.styles.base`)(styleProps)};
  }
`;
