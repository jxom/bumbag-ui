import styled, { css } from 'reakit/styled';
import Box from 'reakit/Box';
import { theme } from 'styled-tools';

const alignProperties = {
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

const getResponsiveProperties = props => {
  const { breakpoint, isFluid } = props;
  if (isFluid) return;
  if (breakpoint) {
    return css`
      & {
        max-width: ${theme(`layout.${breakpoint}Breakpoint`)}px;
      }
    `;
  }
  return css`
    @media (max-width: ${props => theme('layout.fullHDBreakpoint')(props) + 128}px) {
      max-width: ${theme('layout.widescreenBreakpoint')}px;
    }

    @media (max-width: ${props => theme('layout.widescreenBreakpoint')(props) + 128}px) {
      max-width: ${theme('layout.desktopBreakpoint')}px;
    }

    @media (max-width: ${props => theme('layout.desktopBreakpoint')(props) + 128}px) {
      max-width: ${theme('layout.tabletBreakpoint')}px;
    }
  `;
};

export default styled(Box)`
  ${props =>
    !props.isFluid &&
    css`
      max-width: ${theme('layout.fullHDBreakpoint')}px;
    `}
  ${props =>
    props.isFluid &&
    css`
      margin: ${theme('Container.fluidMargin')};
    `}

  @media (max-width: ${theme('layout.tabletBreakpoint')}px) {
    margin: ${theme('Container.tabletMargin')};
  }

  ${getResponsiveProperties} /**/
  ${props => !props.isFluid && alignProperties[props.align]};

  ${theme('Container.base')}
`;
