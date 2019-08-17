import { theme as _theme } from 'styled-tools';
import _get from 'lodash/get';
import { ThemeConfig } from '../types';
import { isFunction } from '../utils';

export function theme(selector: string, defaultValue?: any) {
  return (props: { theme: ThemeConfig }) => {
    const localSelector = selector
      .split('.')
      .slice(1)
      .join('.');
    const theme = _get(props, `overrides.${localSelector}`) || _get(props, `theme.${selector}`, defaultValue);
    if (isFunction(theme)) {
      return theme(props);
    }
    return theme;
  };
}

export function fontSize(selector?: string, defaultValue?: any) {
  return (props: { fontSize?: string; theme: ThemeConfig }) => {
    const color = theme(`fontSizes.${selector || props.fontSize}`, defaultValue)(props);
    return color;
  };
}

export function fontWeight(selector?: string, defaultValue?: any) {
  return (props: { fontWeight?: string; theme: ThemeConfig }) => {
    const color = theme(`fontWeights.${selector || props.fontWeight}`, defaultValue)(props);
    return color;
  };
}

export function palette(selector?: string, defaultValue?: any) {
  return (props: { palette?: string; theme: ThemeConfig }) => {
    const color = theme(`palette.${selector || props.palette}`, defaultValue)(props);
    return color;
  };
}

export function space(_scalar: number | string | void, _scaleType: 'minor' | 'major' = 'minor') {
  return (props: { theme: ThemeConfig }) => {
    let scalar = _scalar;
    let scaleType = _scaleType;
    if (!scalar) return 0;
    if (typeof scalar === 'string' && (scalar.includes('minor') || scalar.includes('major'))) {
      // @ts-ignore
      [scaleType, scalar] = scalar.split('-');
      scalar = parseFloat(scalar);
      if (isNaN(scalar)) return 0;
    }
    const unit: number = _get(props, `theme.layout.${scaleType}Unit`);
    const fontSize: number = _get(props, 'theme.global.fontSize');
    return (scalar as number) * (unit / fontSize);
  };
}
