import { theme } from 'styled-tools';

import { Box } from '../primitives';
import styled, { css } from '../styled';
import { ColumnSpread } from '../types';
import { ColumnProps } from './Column';

export const marginAutoOffsets: { [key: string]: any } = {
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

export const getWidth = (spread: ColumnSpread) => `${(spread / 12) * 100}%`;

export const getSpreadProperties = (props: any) => {
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
      @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
        flex: none;
        width: 100%;
      }
    `;
  }

  const getProperties = ({ breakpoint, spread }: any) => {
    const properties = css`
      flex: none;
      width: ${getWidth(spread)};
    `;
    if (!spread) return null;
    if (breakpoint) {
      return css`
        @media (max-width: ${theme(`fannypack.layout.${breakpoint}`)}px) {
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
        @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
          width: 100%;
        }
      `};
    ${getProperties({ spread: spreadTablet, breakpoint: 'tabletBreakpoint' })};
    ${minBreakpoint !== 'mobile' &&
      !spreadMobile &&
      css`
        @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
          width: 100%;
        }
      `};
    ${getProperties({ spread: spreadMobile, breakpoint: 'mobileBreakpoint' })};
  `;
};

export const getSpreadOffsetProperties = (props: any) => {
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

  const getProperties = ({ breakpoint, spreadOffset }: any) => {
    const properties = css`
      margin-left: ${getWidth(spreadOffset)};
    `;
    if (!spreadOffset) return null;
    if (breakpoint) {
      return css`
        @media (max-width: ${theme(`fannypack.layout.${breakpoint}`)}px) {
          ${properties};
        }
      `;
    }
    return properties;
  };

  if (typeof spreadOffset === 'number') {
    return css`
      ${getProperties({ spreadOffset })};
      ${getProperties({
        spreadOffset: spreadFullHDOffset,
        breakpoint: 'fullHDBreakpoint'
      })};
      ${getProperties({ spreadOffset: spreadWidescreenOffset, breakpoint: 'widescreenBreakpoint' })};
      ${getProperties({ spreadOffset: spreadDesktopOffset, breakpoint: 'desktopBreakpoint' })};
      ${!spreadTabletOffset &&
        !spreadMobileOffset &&
        css`
          @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
            margin-left: 0;
          }
        `};
      ${getProperties({ spreadOffset: spreadTabletOffset, breakpoint: 'tabletBreakpoint' })};
      ${!spreadMobileOffset &&
        css`
          @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
            margin-left: 0;
          }
        `};
      ${getProperties({ spreadOffset: spreadMobileOffset, breakpoint: 'mobileBreakpoint' })};
    `;
  }
  return marginAutoOffsets[spreadOffset];
};

export const Column = styled(Box)<ColumnProps>`
  flex: 1;
  max-width: 100%;
  ${props =>
    !props.isGapless
      ? css`
          padding: ${theme('fannypack.layout.gapFactor')}rem;
        `
      : null};

  & {
    ${getSpreadProperties};
  }

  & {
    ${getSpreadOffsetProperties};
  }

  & {
    ${theme('fannypack.Column.base')};
  }
`;

export default Column;
