import { cssClass } from '../styled';
import { fontSize, fontWeight, space, theme } from '../utils';

export const Heading = styleProps => cssClass`
  font-weight: ${fontWeight('bold')(styleProps)};
  line-height: 1.2;

  .heading& + .sub-heading {
    margin-top: -0.5em;
  }

  &:not(:last-child) {
    margin-bottom: ${space(1)(styleProps)}em;
  }

  h1& {
    font-size: ${fontSize('700')(styleProps)}rem;
    & {
      ${theme(styleProps.themeKey, `h1.css.root`)(styleProps)};
    }
  }
  h2& {
    font-size: ${fontSize('600')(styleProps)}rem;
    & {
      ${theme(styleProps.themeKey, `h2.css.root`)(styleProps)};
    }
  }
  h3& {
    font-size: ${fontSize('500')(styleProps)}rem;
    & {
      ${theme(styleProps.themeKey, `h3.css.root`)(styleProps)};
    }
  }
  h4& {
    font-size: ${fontSize('400')(styleProps)}rem;
    & {
      ${theme(styleProps.themeKey, `h4.css.root`)(styleProps)};
    }
  }
  h5& {
    font-size: ${fontSize('300')(styleProps)}rem;
    & {
      ${theme(styleProps.themeKey, `h5.css.root`)(styleProps)};
    }
  }
  h6& {
    font-size: ${fontSize('200')(styleProps)}rem;
    & {
      ${theme(styleProps.themeKey, `h6.css.root`)(styleProps)};
    }
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

export const getSubHeadingProperties = styleProps => cssClass`
  font-weight: ${fontWeight('semibold')(styleProps)};

  & {
    ${theme(styleProps.themeKey, `subHeading.css.root`)(styleProps)};
  }
`;
