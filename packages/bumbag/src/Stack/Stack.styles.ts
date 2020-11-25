import { css, cssClass } from '../styled';
import { space, theme } from '../utils';
import { getFlexAlignmentAttributes } from '../Flex/Flex.styles';

export const Stack = (styleProps) => cssClass`
  ${styleProps.orientation === 'vertical' && getVerticalAttributes(styleProps)}
  ${styleProps.orientation === 'horizontal' && getHorizontalAttributes(styleProps)}

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

const getVerticalAttributes = (styleProps) => css`
  &&& > *:not(:last-child) {
    margin-bottom: ${space(styleProps.spacing)(styleProps)}rem;

    & {
      ${theme(styleProps.themeKey, `styles.child.vertical`)(styleProps)};
    }
  }

  & {
    ${theme(styleProps.themeKey, `styles.vertical`)(styleProps)};
  }
`;

const getHorizontalAttributes = (styleProps) => {
  let breakpoint = theme('breakpoints', styleProps.verticalBelow)(styleProps);
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
          ${theme(styleProps.themeKey, `styles.child.horizontal`)(styleProps)};
        }
      }

      & {
        ${theme(styleProps.themeKey, `styles.horizontal`)(styleProps)};
      }
    }

    @media screen and (max-width: ${breakpoint}) {
      ${getVerticalAttributes(styleProps)};
    }
  `;
};
