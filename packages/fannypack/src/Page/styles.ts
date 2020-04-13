import { css, cssClass } from '../styled';
import { breakpoint, space, theme } from '../utils';

export const PageContent = styleProps => cssClass`
  padding: ${space(4, 'major')(styleProps)}rem ${space(2, 'major')(styleProps)}rem;

  ${styleProps.isFluid &&
    css`
      padding: ${space(4, 'major')(styleProps)}rem ${theme('Container.fluidMargin')(styleProps)}rem;

      & {
        ${theme(styleProps.themeKey, `css.fluid`)(styleProps)};
      }
    `}

  ${breakpoint(
    'max-tablet',
    css`
      padding-top: ${space(2, 'major')(styleProps)}rem;
      padding-bottom: ${space(2, 'major')(styleProps)}rem;

      & {
        ${theme(styleProps.themeKey, `css.mobile`)(styleProps)};
      }
    `
  )(styleProps)}

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const PageContentWrapper = styleProps => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
