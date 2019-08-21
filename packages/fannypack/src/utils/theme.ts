import { theme as _theme } from 'styled-tools';
import _get from 'lodash/get';
import { ThemeConfig } from '../types';
import { css } from '../styled';
import { isFunction } from './isFunction';

export function theme(selector: string, defaultValue?: any) {
  return (props: { theme?: ThemeConfig }) => {
    const theme = _get(props, `overrides.${selector}`) || _get(props, `theme.${selector}`, defaultValue);
    if (isFunction(theme)) {
      return theme(props);
    }
    return theme;
  };
}

export function fontSize(selector?: string, defaultValue?: any) {
  return (props: { fontSize?: string; theme?: ThemeConfig }) => {
    const color = theme(`fontSizes.${selector || props.fontSize}`, defaultValue)(props);
    return color;
  };
}

export function fontWeight(selector?: string, defaultValue?: any) {
  return (props: { fontWeight?: string; theme?: ThemeConfig }) => {
    const color = theme(`fontWeights.${selector || props.fontWeight}`, defaultValue)(props);
    return color;
  };
}

export function palette(selector?: string, defaultValue?: any) {
  return (props: { palette?: string; theme?: ThemeConfig }) => {
    const color = theme(`palette.${selector || props.palette}`, defaultValue)(props);
    return color;
  };
}

export function space(_scalar: number | string | void, _scaleType: 'minor' | 'major' = 'minor') {
  return (props: { theme?: ThemeConfig }) => {
    let scalar = _scalar;
    let scaleType = _scaleType;
    if (!scalar) return 0;
    if (typeof scalar === 'string' && (scalar.includes('minor') || scalar.includes('major'))) {
      // @ts-ignore
      [scaleType, scalar] = scalar.split('-');
      scalar = parseFloat(scalar);
      if (isNaN(scalar)) return 0;
    }
    const unitSize: number = _get(props, `theme.layout.${scaleType}Unit`);
    const fontSize: number = _get(props, 'theme.global.fontSize');
    const value = (scalar as number) * (unitSize / fontSize);
    return value;
  };
}

export function breakpoint(breakpoint: string, cssStyle, config?: { show: boolean }) {
  const { show = false } = config || {};
  return props => {
    let key: string | undefined;
    if (!show && breakpoint.includes('max')) {
      key = 'max-width';
    } else if (!show && breakpoint.includes('min')) {
      key = 'min-width';
    } else if (show && breakpoint.includes('max')) {
      key = 'min-width';
    } else if (show && breakpoint.includes('min')) {
      key = 'max-width';
    }

    let strippedBreakpoint = breakpoint;
    strippedBreakpoint = strippedBreakpoint.replace('max-', '');
    strippedBreakpoint = strippedBreakpoint.replace('min-', '');

    const minBreakpointValues: { [key: string]: number } = {
      mobile: 0,
      tablet: _get(props, 'theme.breakpoints.mobile'),
      desktop: _get(props, 'theme.breakpoints.tablet'),
      widescreen: _get(props, 'theme.breakpoints.desktop'),
      fullHD: _get(props, 'theme.breakpoints.widescreen')
    };
    let breakpointValue = _get(props, `theme.breakpoints.${strippedBreakpoint}`);
    if (!show && breakpoint.includes('min')) {
      breakpointValue = minBreakpointValues[strippedBreakpoint] + 1;
    }
    if (show && breakpoint.includes('min')) {
      breakpointValue = minBreakpointValues[strippedBreakpoint];
    }
    if (show && breakpoint.includes('max')) {
      breakpointValue = breakpointValue + 1;
    }

    if (!breakpoint.includes('min-') && !breakpoint.includes('max-')) {
      if (show) {
        return css`
          @media screen and (max-width: ${minBreakpointValues[breakpoint]}px) {
            ${cssStyle};
          }

          @media screen and (min-width: ${breakpointValue + 1}px) {
            ${cssStyle};
          }
        `;
      }
      return css`
        @media screen and (min-width: ${minBreakpointValues[breakpoint] + 1}px) and (max-width: ${breakpointValue}px) {
          ${cssStyle};
        }
      `;
    }
    return css`
      @media screen and (${key}: ${breakpointValue}px) {
        ${cssStyle};
      }
    `;
  };
}
