import _get from 'lodash/get';
import { css, cssClass } from '../styled';
import { theme } from '../utils';

export const style = styleProps => cssClass`
  && {
    ${styleProps.style};
  }
`;

export const Box = styleProps => cssClass`
  margin: unset;
  padding: unset;
  border: unset;
  background: unset;
  font: unset;
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;

  &:focus:not(:focus-visible) {
    outline: none;
  }

  ${buildVisibleAttributes(styleProps)};

  & {
    ${theme('Box.base')(styleProps)};
  }
`;

function buildVisibleAttributes(props: { hiddenBreakpoint?: string; showBreakpoint?: string }) {
  let breakpoint = props.hiddenBreakpoint || props.showBreakpoint;
  if (!breakpoint) return;

  let key: string | undefined;
  if (props.hiddenBreakpoint && breakpoint.includes('max')) {
    key = 'max-width';
  } else if (props.hiddenBreakpoint && breakpoint.includes('min')) {
    key = 'min-width';
  } else if (props.showBreakpoint && breakpoint.includes('max')) {
    key = 'min-width';
  } else if (props.showBreakpoint && breakpoint.includes('min')) {
    key = 'max-width';
  }

  let strippedBreakpoint = breakpoint;
  strippedBreakpoint = strippedBreakpoint.replace('max-', '');
  strippedBreakpoint = strippedBreakpoint.replace('min-', '');

  const minBreakpointValues: { [key: string]: number } = {
    mobile: 0,
    tablet: _get(props, 'theme.layout.mobileBreakpoint'),
    desktop: _get(props, 'theme.layout.tabletBreakpoint'),
    widescreen: _get(props, 'theme.layout.desktopBreakpoint'),
    fullHD: _get(props, 'theme.layout.widescreenBreakpoint')
  };
  let breakpointValue = _get(props, `theme.layout['${strippedBreakpoint}Breakpoint']`);
  if (props.hiddenBreakpoint && breakpoint.includes('min')) {
    breakpointValue = minBreakpointValues[strippedBreakpoint] + 1;
  }
  if (props.showBreakpoint && breakpoint.includes('min')) {
    breakpointValue = minBreakpointValues[strippedBreakpoint];
  }
  if (props.showBreakpoint && breakpoint.includes('max')) {
    breakpointValue = breakpointValue + 1;
  }

  if (!breakpoint.includes('min-') && !breakpoint.includes('max-')) {
    if (props.showBreakpoint) {
      return css`
        @media screen and (max-width: ${minBreakpointValues[breakpoint]}px) {
          display: none;
        }

        @media screen and (min-width: ${breakpointValue + 1}px) {
          display: none;
        }
      `;
    }
    return css`
      @media screen and (min-width: ${minBreakpointValues[breakpoint] + 1}px) and (max-width: ${breakpointValue}px) {
        display: none;
      }
    `;
  }
  return css`
    @media screen and (${key}: ${breakpointValue}px) {
      display: none;
    }
  `;
}
