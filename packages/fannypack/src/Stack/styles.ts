import { css, cssClass } from '../styled';
import { space, theme } from '../utils';

export const Stack = styleProps => cssClass`
  ${styleProps.orientation === 'vertical' && getVerticalAttributes(styleProps)}
  ${styleProps.orientation === 'horizontal' && getHorizontalAttributes(styleProps)}

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

const getVerticalAttributes = styleProps => css`
  & > *:not(:last-child) {
    margin-bottom: ${space(styleProps.spacing)(styleProps)}rem;

    & {
      ${theme(styleProps.themeKey, `css.child.vertical`)(styleProps)};
    }
  }

  & {
    ${theme(styleProps.themeKey, `css.vertical`)(styleProps)};
  }
`;

const getHorizontalAttributes = styleProps => {
  let breakpoint = theme('breakpoints', styleProps.verticalAt)(styleProps);
  breakpoint = breakpoint ? `${breakpoint}px` : styleProps.verticalAt;
  return css`
    @media screen and (min-width: ${breakpoint}) {
      display: flex;

      & > * {
        flex: 1;
      }

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
