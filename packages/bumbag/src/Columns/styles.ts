import { css, cssClass } from '../styled';
import { breakpoint, space, theme } from '../utils';

export const Columns = (styleProps) => cssClass`
  ${
    !styleProps.isGapless &&
    css`
      margin-left: -${space(styleProps.spacing)(styleProps) / 2}rem;
      margin-right: -${space(styleProps.spacing)(styleProps) / 2}rem;
      margin-top: -${space(styleProps.spacing)(styleProps) / 2}rem;

      &:last-child {
        margin-bottom: -${space(styleProps.spacing)(styleProps) / 2}rem;
      }
    `
  };

  ${getWrapProperties(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const Column = (styleProps) => cssClass`
  flex: 1;
  max-width: 100%;

  ${
    !styleProps.isGapless &&
    css`
      padding: ${space(styleProps.spacing)(styleProps) / 2}rem;
    `
  };

  & {
    ${getSpreadProperties(styleProps)};
  }

  & {
    ${getSpreadOffsetProperties(styleProps)};
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

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
  `,
};

export const getWidth = (spread) => `${(spread / 12) * 100}%`;

export function getWrapProperties(styleProps) {
  const { isOneLine, minBreakpoint } = styleProps;
  if (isOneLine) {
    if (minBreakpoint !== 'tablet' && minBreakpoint !== 'mobile') {
      return breakpoint(
        'max-tablet',
        css`
          flex-wrap: wrap;
        `
      )(styleProps);
    }
    if (minBreakpoint !== 'mobile') {
      return breakpoint(
        'max-mobile',
        css`
          flex-wrap: wrap;
        `
      )(styleProps);
    }
    return null;
  } else {
    return css`
      flex-wrap: wrap;
    `;
  }
}

export function getSpreadProperties(styleProps) {
  const {
    minBreakpoint,
    spread,
    spreadMobile,
    spreadTablet,
    spreadDesktop,
    spreadWidescreen,
    spreadFullHD,
  } = styleProps;
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
      @media (max-width: ${theme('breakpoints', 'tablet')(styleProps)}px) {
        flex: none;
        width: 100%;
      }
    `;
  }

  const getProperties = ({ breakpoint: _breakpoint, spread }: any) => {
    const properties = css`
      flex: none;
      width: ${getWidth(spread)};
    `;
    if (!spread) return null;
    if (_breakpoint) {
      return breakpoint(
        `max-${_breakpoint}`,
        css`
          ${properties};
        `
      )(styleProps);
    }
    return properties;
  };

  return css`
    ${getProperties({ spread })};
    ${getProperties({ spread: spreadFullHD, breakpoint: 'fullHD' })};
    ${getProperties({ spread: spreadWidescreen, breakpoint: 'widescreen' })};
    ${getProperties({ spread: spreadDesktop, breakpoint: 'desktop' })};
    ${minBreakpoint !== 'tablet' &&
    minBreakpoint !== 'mobile' &&
    !spreadTablet &&
    !spreadMobile &&
    breakpoint(
      `max-tablet`,
      css`
        width: 100%;
      `
    )(styleProps)};
    ${getProperties({ spread: spreadTablet, breakpoint: 'tablet' })};
    ${minBreakpoint !== 'mobile' &&
    !spreadMobile &&
    breakpoint(
      `max-mobile`,
      css`
        width: 100%;
      `
    )(styleProps)};
    ${getProperties({ spread: spreadMobile, breakpoint: 'mobile' })};
  `;
}

export function getSpreadOffsetProperties(styleProps) {
  const {
    spreadOffset,
    spreadMobileOffset,
    spreadTabletOffset,
    spreadDesktopOffset,
    spreadWidescreenOffset,
    spreadFullHDOffset,
  } = styleProps;
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

  const getProperties = ({ breakpoint: _breakpoint, spreadOffset }: any) => {
    const properties = css`
      margin-left: ${getWidth(spreadOffset)};
    `;
    if (!spreadOffset) return null;
    if (_breakpoint) {
      return breakpoint(
        `max-${_breakpoint}`,
        css`
          ${properties};
        `
      )(styleProps);
    }
    return properties;
  };

  if (typeof spreadOffset === 'number') {
    return css`
      ${getProperties({ spreadOffset })};
      ${getProperties({
        spreadOffset: spreadFullHDOffset,
        breakpoint: 'fullHD',
      })};
      ${getProperties({ spreadOffset: spreadWidescreenOffset, breakpoint: 'widescreen' })};
      ${getProperties({ spreadOffset: spreadDesktopOffset, breakpoint: 'desktop' })};
      ${!spreadTabletOffset &&
      !spreadMobileOffset &&
      breakpoint(
        `max-tablet`,
        css`
          margin-left: 0;
        `
      )(styleProps)};
      ${getProperties({ spreadOffset: spreadTabletOffset, breakpoint: 'tablet' })};
      ${!spreadMobileOffset &&
      breakpoint(
        `max-mobile`,
        css`
          margin-left: 0;
        `
      )(styleProps)};
      ${getProperties({ spreadOffset: spreadMobileOffset, breakpoint: 'mobile' })};
    `;
  }
  return marginAutoOffsets[spreadOffset];
}
