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

const getSpreadAttributes = props => {
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

  const getAttributes = ({ breakpoint, spread }) => {
    const attributes = css`
      flex: none;
      width: ${getWidth(spread)};
    `;
    if (!spread) return null;
    if (breakpoint) {
      return css`
        @media (max-width: ${theme(`layout.${breakpoint}`)}px) {
          ${attributes};
        }
      `;
    }
    return attributes;
  };

  return css`
    ${getAttributes({ spread })};
    ${getAttributes({ spread: spreadFullHD, breakpoint: 'fullHDBreakpoint' })};
    ${getAttributes({ spread: spreadWidescreen, breakpoint: 'widescreenBreakpoint' })};
    ${getAttributes({ spread: spreadDesktop, breakpoint: 'desktopBreakpoint' })};
    ${minBreakpoint !== 'tablet' &&
      minBreakpoint !== 'mobile' &&
      !spreadTablet &&
      !spreadMobile &&
      css`
        @media (max-width: ${theme('layout.tabletBreakpoint')}px) {
          width: 100%;
        }
      `};
    ${getAttributes({ spread: spreadTablet, breakpoint: 'tabletBreakpoint' })};
    ${minBreakpoint !== 'mobile' &&
      !spreadMobile &&
      css`
        @media (max-width: ${theme('layout.mobileBreakpoint')}px) {
          width: 100%;
        }
      `};
    ${getAttributes({ spread: spreadMobile, breakpoint: 'mobileBreakpoint' })};
  `;
};

const getSpreadOffsetAttributes = props => {
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

  const getAttributes = ({ breakpoint, spreadOffset }) => {
    const attributes = css`
      margin-left: ${getWidth(spreadOffset)};
    `;
    if (!spreadOffset) return null;
    if (breakpoint) {
      return css`
        @media (max-width: ${theme(`layout.${breakpoint}`)}px) {
          ${attributes};
        }
      `;
    }
    return attributes;
  };

  if (typeof spreadOffset === 'number') {
    return css`
      ${getAttributes({ spreadOffset })} /**/
      ${getAttributes({
        spreadOffset: spreadFullHDOffset,
        breakpoint: 'fullHDBreakpoint'
      })};
      ${getAttributes({ spreadOffset: spreadWidescreenOffset, breakpoint: 'widescreenBreakpoint' })};
      ${getAttributes({ spreadOffset: spreadDesktopOffset, breakpoint: 'desktopBreakpoint' })};
      ${!spreadTabletOffset &&
        !spreadMobileOffset &&
        css`
          @media (max-width: ${theme('layout.tabletBreakpoint')}px) {
            margin-left: 0;
          }
        `};
      ${getAttributes({ spreadOffset: spreadTabletOffset, breakpoint: 'tabletBreakpoint' })};
      ${!spreadMobileOffset &&
        css`
          @media (max-width: ${theme('layout.mobileBreakpoint')}px) {
            margin-left: 0;
          }
        `};
      ${getAttributes({ spreadOffset: spreadMobileOffset, breakpoint: 'mobileBreakpoint' })};
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
    ${getSpreadAttributes};
  }

  & {
    ${getSpreadOffsetAttributes};
  }

  & {
    ${theme('Column.base')};
  }
`;

export default Column;
