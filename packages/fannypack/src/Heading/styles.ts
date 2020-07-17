import { css, cssClass } from '../styled';
import { breakpoint, font, fontSize, fontWeight, space, theme } from '../utils';

export const Heading = (styleProps) => cssClass`
  font-family: ${font('heading')(styleProps) || font('default')(styleProps)};
  font-weight: ${fontWeight('bold')(styleProps)};
  line-height: 1.2;

  &:not(:last-child) {
    margin-bottom: ${space(4)(styleProps)}rem;
  }

  .heading& + .sub-heading {
    margin-top: -0.5em;
  }

  h1& {
    font-size: ${fontSize('700')(styleProps)}rem;

    & {
      ${theme(styleProps.themeKey, `h1.css.root`)(styleProps)};
    }

    ${
      styleProps.shrinkBelow &&
      breakpoint(
        `max-${styleProps.shrinkBelow}`,
        css`
          font-size: ${fontSize('600')(styleProps)}rem;

          & {
            ${theme(styleProps.themeKey, `h1.css.shrinked`)(styleProps)};
          }
        `
      )(styleProps)
    };
  }
  h2& {
    font-size: ${fontSize('600')(styleProps)}rem;

    & {
      ${theme(styleProps.themeKey, `h2.css.root`)(styleProps)};
    }

    ${
      styleProps.shrinkBelow &&
      breakpoint(
        `max-${styleProps.shrinkBelow}`,
        css`
          font-size: ${fontSize('500')(styleProps)}rem;

          & {
            ${theme(styleProps.themeKey, `h2.css.shrinked`)(styleProps)};
          }
        `
      )(styleProps)
    };
  }
  h3& {
    font-size: ${fontSize('500')(styleProps)}rem;

    & {
      ${theme(styleProps.themeKey, `h3.css.root`)(styleProps)};
    }

    ${
      styleProps.shrinkBelow &&
      breakpoint(
        `max-${styleProps.shrinkBelow}`,
        css`
          font-size: ${fontSize('400')(styleProps)}rem;

          & {
            ${theme(styleProps.themeKey, `h3.css.shrinked`)(styleProps)};
          }
        `
      )(styleProps)
    };
  }
  h4& {
    font-size: ${fontSize('400')(styleProps)}rem;

    & {
      ${theme(styleProps.themeKey, `h4.css.root`)(styleProps)};
    }

    ${
      styleProps.shrinkBelow &&
      breakpoint(
        `max-${styleProps.shrinkBelow}`,
        css`
          font-size: ${fontSize('300')(styleProps)}rem;

          & {
            ${theme(styleProps.themeKey, `h4.css.shrinked`)(styleProps)};
          }
        `
      )(styleProps)
    };
  }
  h5& {
    font-size: ${fontSize('300')(styleProps)}rem;

    & {
      ${theme(styleProps.themeKey, `h5.css.root`)(styleProps)};
    }

    ${
      styleProps.shrinkBelow &&
      breakpoint(
        `max-${styleProps.shrinkBelow}`,
        css`
          font-size: ${fontSize('250')(styleProps)}rem;

          & {
            ${theme(styleProps.themeKey, `h5.css.shrinked`)(styleProps)};
          }
        `
      )(styleProps)
    };
  }
  h6& {
    font-size: ${fontSize('200')(styleProps)}rem;

    & {
      ${theme(styleProps.themeKey, `h6.css.root`)(styleProps)};
    }

    ${
      styleProps.shrinkBelow &&
      breakpoint(
        `max-${styleProps.shrinkBelow}`,
        css`
          & {
            ${theme(styleProps.themeKey, `h6.css.shrinked`)(styleProps)};
          }
        `
      )(styleProps)
    };
  }

  & {
    ${styleProps.isSubHeading && getSubHeadingProperties(styleProps)};
  }

  & .fp-Icon {
    vertical-align: -0.125em;
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const getSubHeadingProperties = (styleProps) => cssClass`
  font-weight: ${fontWeight('semibold')(styleProps)};

  & {
    ${theme(styleProps.themeKey, `subHeading.css.root`)(styleProps)};
  }
`;
