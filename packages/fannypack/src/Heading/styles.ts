import { cssClass } from '../styled';
import { space, theme } from '../utils';

export const Heading = styleProps => cssClass`
  font-weight: ${theme('fontWeights.bold')(styleProps)};
  line-height: 1.2;

  .heading& + .sub-heading {
    margin-top: -0.5em;
  }

  &:not(:last-child) {
    margin-bottom: ${space(1)(styleProps)}em;
  }

  h1& {
    font-size: ${theme('fontSizes.700')(styleProps)}rem;
    & {
      ${theme(`${styleProps.themeKey}.h1.base`)(styleProps)};
    }
  }
  h2& {
    font-size: ${theme('fontSizes.600')(styleProps)}rem;
    & {
      ${theme(`${styleProps.themeKey}.h2.base`)(styleProps)};
    }
  }
  h3& {
    font-size: ${theme('fontSizes.500')(styleProps)}rem;
    & {
      ${theme(`${styleProps.themeKey}.h3.base`)(styleProps)};
    }
  }
  h4& {
    font-size: ${theme('fontSizes.400')(styleProps)}rem;
    & {
      ${theme(`${styleProps.themeKey}.h4.base`)(styleProps)};
    }
  }
  h5& {
    font-size: ${theme('fontSizes.300')(styleProps)}rem;
    & {
      ${theme(`${styleProps.themeKey}.h5.base`)(styleProps)};
    }
  }
  h6& {
    font-size: ${theme('fontSizes.200')(styleProps)}rem;
    & {
      ${theme(`${styleProps.themeKey}.h6.base`)(styleProps)};
    }
  }

  & {
    ${styleProps.isSubHeading && getSubHeadingProperties(styleProps)};
  }

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;

export const getSubHeadingProperties = styleProps => cssClass`
  font-weight: ${theme('fontWeights.semibold')(styleProps)};

  & {
    ${theme(`${styleProps.themeKey}.subHeading`)(styleProps)};
  }
`;
