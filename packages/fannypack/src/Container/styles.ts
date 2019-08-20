import { css, cssClass } from '../styled';
import { theme } from '../utils';

export const Container = styleProps => cssClass`
  width: 100%;

  ${!styleProps.isFluid &&
    css`
      max-width: ${theme('breakpoints.fullHD')(styleProps)}px;
    `};

  ${styleProps.isFluid &&
    css`
      padding-left: ${theme('Container.fluidMargin')(styleProps)}rem;
      padding-right: ${theme('Container.fluidMargin')(styleProps)}rem;

      & {
        ${theme('Container.fluid')(styleProps)};
      }
    `};

  ${(styleProps.isLayout || styleProps.isFluid) &&
    css`
      @media (max-width: ${theme('breakpoints.tablet')(styleProps)}px) {
        padding-left: ${theme('Container.tabletMargin')(styleProps)}rem;
        padding-right: ${theme('Container.tabletMargin')(styleProps)}rem;
      }
    `};

  ${styleProps.isLayout &&
    css`
      & {
        ${theme('Container.layout')(styleProps)};
      }
    `};

  ${getResponsiveProperties(styleProps)};
  ${styleProps.align && !styleProps.isFluid ? alignProperties[styleProps.align] : null};

  & {
    ${theme('Container.base')(styleProps)};
  }
`;

export const alignProperties = {
  left: css`
    margin-right: auto;
  `,
  center: css`
    margin-left: auto;
    margin-right: auto;
  `,
  right: css`
    margin-left: auto;
  `
};

export function getResponsiveProperties(styleProps) {
  const { breakpoint, isFluid } = styleProps;
  if (isFluid) return;
  if (breakpoint) {
    return css`
      & {
        max-width: ${theme(`breakpoints.${breakpoint}`)(styleProps)}px;
      }
    `;
  }
  return css`
    @media (max-width: ${theme('breakpoints.fullHD')(styleProps) + 128}px) {
      max-width: ${theme('breakpoints.widescreen')(styleProps)}px;
    }

    @media (max-width: ${theme('breakpoints.widescreen')(styleProps) + 128}px) {
      max-width: ${theme('breakpoints.desktop')(styleProps)}px;
    }

    @media (max-width: ${theme('breakpoints.desktop')(styleProps) + 128}px) {
      max-width: ${theme('breakpoints.tablet')(styleProps)}px;
    }
  `;
}
