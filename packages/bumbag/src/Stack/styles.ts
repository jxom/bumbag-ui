import { css, cssClass } from '../styled';
import { space, theme } from '../utils';
import { getFlexAlignmentAttributes } from '../Flex/styles';

const verticalBreakpoints = {
  tablet: 'mobile',
  desktop: 'tablet',
  widescreen: 'desktop',
  fullHD: 'widescreen',
};

export const Stack = (styleProps) => cssClass`
  ${styleProps.orientation === 'vertical' && getVerticalAttributes(styleProps)}
  ${styleProps.orientation === 'horizontal' && getHorizontalAttributes(styleProps)}

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

const getVerticalAttributes = (styleProps) => css`
  && > *:not(:last-child) {
    margin-bottom: ${space(styleProps.spacing)(styleProps)}rem;

    & {
      ${theme(styleProps.themeKey, `css.child.vertical`)(styleProps)};
    }
  }

  & {
    ${theme(styleProps.themeKey, `css.vertical`)(styleProps)};
  }
`;

const getHorizontalAttributes = (styleProps) => {
  let breakpoint = theme('breakpoints', verticalBreakpoints[styleProps.verticalBelow])(styleProps);
  breakpoint = breakpoint ? `${breakpoint}px` : styleProps.verticalBelow;
  return css`
    @media screen and (min-width: ${breakpoint}) {
      display: flex;

      ${!styleProps.alignX &&
      !styleProps.alignY &&
      css`
        & > * {
          flex: 1;
        }
      `}

      ${getFlexAlignmentAttributes(styleProps)}

      & > *:not(:last-child) {
        margin-right: ${space(styleProps.spacing)(styleProps)}rem;

        & {
          ${theme(styleProps.themeKey, `css.child.horizontal`)(styleProps)};
        }
      }

      & {
        ${theme(styleProps.themeKey, `css.horizontal`)(styleProps)};
      }
    }

    @media screen and (max-width: ${breakpoint}) {
      ${getVerticalAttributes(styleProps)};
    }
  `;
};
