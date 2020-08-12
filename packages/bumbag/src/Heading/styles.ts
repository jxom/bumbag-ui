import { css, cssClass } from '../styled';
import { breakpoint, font, fontWeight, space, theme, getCapsizeStyles } from '../utils';

export const Heading = (styleProps) => cssClass`
  font-family: ${font('heading')(styleProps) || font('default')(styleProps)};
  font-weight: ${fontWeight('bold')(styleProps)};

  ${getCapsizeStyles({ lineHeight: '100', fontFamily: 'heading', includeBottomGap: true })(styleProps)};

  h1& {
    ${getCapsizeStyles({
      themeKey: 'Heading.h1',
      lineHeight: '100',
      fontFamily: 'heading',
      includeBottomGap: true,
    })(styleProps)};

    & {
      ${theme(styleProps.themeKey, `h1.styles.base`)(styleProps)};
    }

    ${
      styleProps.shrinkBelow &&
      breakpoint(
        `max-${styleProps.shrinkBelow}`,
        css`
          ${getCapsizeStyles({
            themeKey: 'Heading.h1',
            lineHeight: '100',
            fontFamily: 'heading',
            includeBottomGap: true,
            shrink: true,
          })(styleProps)};

          & {
            ${theme(styleProps.themeKey, `h1.styles.shrinked`)(styleProps)};
          }
        `
      )(styleProps)
    };
  }
  h2& {
    ${getCapsizeStyles({
      themeKey: 'Heading.h2',
      lineHeight: '100',
      fontFamily: 'heading',
      includeBottomGap: true,
    })(styleProps)};

    & {
      ${theme(styleProps.themeKey, `h2.styles.base`)(styleProps)};
    }

    ${
      styleProps.shrinkBelow &&
      breakpoint(
        `max-${styleProps.shrinkBelow}`,
        css`
          ${getCapsizeStyles({
            themeKey: 'Heading.h2',
            lineHeight: '100',
            fontFamily: 'heading',
            includeBottomGap: true,
            shrink: true,
          })(styleProps)};

          & {
            ${theme(styleProps.themeKey, `h2.styles.shrinked`)(styleProps)};
          }
        `
      )(styleProps)
    };
  }
  h3& {
    ${getCapsizeStyles({
      themeKey: 'Heading.h3',
      lineHeight: '100',
      fontFamily: 'heading',
      includeBottomGap: true,
    })(styleProps)};

    & {
      ${theme(styleProps.themeKey, `h3.styles.base`)(styleProps)};
    }

    ${
      styleProps.shrinkBelow &&
      breakpoint(
        `max-${styleProps.shrinkBelow}`,
        css`
          ${getCapsizeStyles({
            themeKey: 'Heading.h3',
            lineHeight: '100',
            fontFamily: 'heading',
            includeBottomGap: true,
            shrink: true,
          })(styleProps)};

          & {
            ${theme(styleProps.themeKey, `h3.styles.shrinked`)(styleProps)};
          }
        `
      )(styleProps)
    };
  }
  h4& {
    ${getCapsizeStyles({
      themeKey: 'Heading.h4',
      lineHeight: '100',
      fontFamily: 'heading',
      includeBottomGap: true,
    })(styleProps)};

    & {
      ${theme(styleProps.themeKey, `h4.styles.base`)(styleProps)};
    }

    ${
      styleProps.shrinkBelow &&
      breakpoint(
        `max-${styleProps.shrinkBelow}`,
        css`
          ${getCapsizeStyles({
            themeKey: 'Heading.h4',
            lineHeight: '100',
            fontFamily: 'heading',
            includeBottomGap: true,
            shrink: true,
          })(styleProps)};

          & {
            ${theme(styleProps.themeKey, `h4.styles.shrinked`)(styleProps)};
          }
        `
      )(styleProps)
    };
  }
  h5& {
    ${getCapsizeStyles({
      themeKey: 'Heading.h5',
      lineHeight: '100',
      fontFamily: 'heading',
      includeBottomGap: true,
    })(styleProps)};

    & {
      ${theme(styleProps.themeKey, `h5.styles.base`)(styleProps)};
    }

    ${
      styleProps.shrinkBelow &&
      breakpoint(
        `max-${styleProps.shrinkBelow}`,
        css`
          ${getCapsizeStyles({
            themeKey: 'Heading.h5',
            lineHeight: '100',
            fontFamily: 'heading',
            includeBottomGap: true,
            shrink: true,
          })(styleProps)};

          & {
            ${theme(styleProps.themeKey, `h5.styles.shrinked`)(styleProps)};
          }
        `
      )(styleProps)
    };
  }
  h6& {
    ${getCapsizeStyles({
      themeKey: 'Heading.h6',
      lineHeight: '100',
      fontFamily: 'heading',
      includeBottomGap: true,
    })(styleProps)};

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
