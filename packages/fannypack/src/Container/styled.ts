import { theme } from 'styled-tools';

import { Box } from '../primitives';
import styled, { css } from '../styled';
import { ContainerProps } from './Container';

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

export const getResponsiveProperties = (props: any) => {
  const { breakpoint, isFluid } = props;
  if (isFluid) return;
  if (breakpoint) {
    return css`
      & {
        max-width: ${theme(`fannypack.layout.${breakpoint}Breakpoint`)}px;
      }
    `;
  }
  return css`
    @media (max-width: ${props => theme('fannypack.layout.fullHDBreakpoint')(props) + 128}px) {
      max-width: ${theme('fannypack.layout.widescreenBreakpoint')}px;
    }

    @media (max-width: ${props => theme('fannypack.layout.widescreenBreakpoint')(props) + 128}px) {
      max-width: ${theme('fannypack.layout.desktopBreakpoint')}px;
    }

    @media (max-width: ${props => theme('fannypack.layout.desktopBreakpoint')(props) + 128}px) {
      max-width: ${theme('fannypack.layout.tabletBreakpoint')}px;
    }
  `;
};

export const Container = styled(Box)<ContainerProps>`
  width: 100%;

  ${props =>
    !props.isFluid &&
    css`
      max-width: ${theme('fannypack.layout.fullHDBreakpoint')}px;
    `};

  ${props =>
    props.isFluid &&
    css`
      margin: ${theme('fannypack.Container.fluidMargin')};
    `};

  ${props =>
    props.isLayout &&
    css`
      @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
        margin: ${theme('fannypack.Container.tabletMargin')};
      }
    `};

  ${getResponsiveProperties};
  ${props => (props.align && !props.isFluid ? alignProperties[props.align] : null)};

  ${theme('fannypack.Container.base')};
`;

export default Container;
