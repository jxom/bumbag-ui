import { css } from 'reakit/styled';
import styled from 'reakit/styled';
import Box from 'reakit/Box';
import { theme } from 'styled-tools';

const marginAutoOffsets = {
  left: css`
    margin-left: auto;
  `,
  both: css`
    margin-left: auto;
    margin-right: auto;
  `,
  right: css`
    margin-right: auto;
  `
};

const getWidth = spread => `${(spread / 12) * 100}%`;

const getSpreadProperties = props => {
  const { minBreakpoint, spread, spreadMobile, spreadTablet, spreadDesktop, spreadWidescreen, spreadFullHD } = props;
  if (
    !minBreakpoint &&
    !spread &&
    !spreadMobile &&
    !spreadTablet &&
    !spreadDesktop &&
    !spreadWidescreen &&
    !spreadFullHD
  ) {
    return css`
      @media (max-width: ${theme('layout.tabletBreakpoint')}px) {
        flex: none;
        width: 100%;
      }
    `;
  }

  const getProperties = ({ breakpoint, spread }) => {
    const properties = css`
      flex: none;
      width: ${getWidth(spread)};
    `;
    if (!spread) return null;
    if (breakpoint) {
      return css`
        @media (max-width: ${theme(`layout.${breakpoint}`)}px) {
          ${properties};
        }
      `;
    }
    return properties;
  };

  return css`
    ${getProperties({ spread })};
    ${getProperties({ spread: spreadFullHD, breakpoint: 'fullHDBreakpoint' })};
    ${getProperties({ spread: spreadWidescreen, breakpoint: 'widescreenBreakpoint' })};
    ${getProperties({ spread: spreadDesktop, breakpoint: 'desktopBreakpoint' })};
    ${minBreakpoint !== 'tablet' &&
      minBreakpoint !== 'mobile' &&
      !spreadTablet &&
      !spreadMobile &&
      css`
        @media (max-width: ${theme('layout.tabletBreakpoint')}px) {
          width: 100%;
        }
      `};
    ${getProperties({ spread: spreadTablet, breakpoint: 'tabletBreakpoint' })};
    ${minBreakpoint !== 'mobile' &&
      !spreadMobile &&
      css`
        @media (max-width: ${theme('layout.mobileBreakpoint')}px) {
          width: 100%;
        }
      `};
    ${getProperties({ spread: spreadMobile, breakpoint: 'mobileBreakpoint' })};
  `;
};

const getSpreadOffsetProperties = props => {
  const {
    spreadOffset,
    spreadMobileOffset,
    spreadTabletOffset,
    spreadDesktopOffset,
    spreadWidescreenOffset,
    spreadFullHDOffset
  } = props;
  if (
    !spreadOffset &&
    !spreadMobileOffset &&
    !spreadTabletOffset &&
    !spreadDesktopOffset &&
    !spreadWidescreenOffset &&
    !spreadFullHDOffset
  ) {
    return null;
  }

  const getProperties = ({ breakpoint, spreadOffset }) => {
    const properties = css`
      margin-left: ${getWidth(spreadOffset)};
    `;
    if (!spreadOffset) return null;
    if (breakpoint) {
      return css`
        @media (max-width: ${theme(`layout.${breakpoint}`)}px) {
          ${properties};
        }
      `;
    }
    return properties;
  };

  if (typeof spreadOffset === 'number') {
    return css`
      ${getProperties({ spreadOffset })} /**/
      ${getProperties({
        spreadOffset: spreadFullHDOffset,
        breakpoint: 'fullHDBreakpoint'
      })};
      ${getProperties({ spreadOffset: spreadWidescreenOffset, breakpoint: 'widescreenBreakpoint' })};
      ${getProperties({ spreadOffset: spreadDesktopOffset, breakpoint: 'desktopBreakpoint' })};
      ${!spreadTabletOffset &&
        !spreadMobileOffset &&
        css`
          @media (max-width: ${theme('layout.tabletBreakpoint')}px) {
            margin-left: 0;
          }
        `};
      ${getProperties({ spreadOffset: spreadTabletOffset, breakpoint: 'tabletBreakpoint' })};
      ${!spreadMobileOffset &&
        css`
          @media (max-width: ${theme('layout.mobileBreakpoint')}px) {
            margin-left: 0;
          }
        `};
      ${getProperties({ spreadOffset: spreadMobileOffset, breakpoint: 'mobileBreakpoint' })};
    `;
  }
  return marginAutoOffsets[spreadOffset];
};

const Column = styled(Box)`
  flex: 1;
  max-width: 100%;
  ${props =>
    !props.isGapless
      ? css`
          padding: ${theme('layout.gapFactor')}rem;
        `
      : null};

  & {
    ${getSpreadProperties};
  }

  & {
    ${getSpreadOffsetProperties};
  }

  & {
    ${theme('Column.base')};
  }
`;

export default Column;
