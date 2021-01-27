import { theme as _theme } from 'styled-tools';
import tinycolor from 'tinycolor2';

import { ThemeConfig } from 'bumbag/types';
import { isFunction } from 'bumbag/utils/isFunction';
import { get } from 'bumbag/utils/get';
import { Platform } from 'react-native';

import { getCSSFromStyleObject } from './getCSSFromStyleObject';

export function theme(themeKey: string, path?: string, defaultValue?: any) {
  return (props: { theme?: ThemeConfig; overrides?: any; colorMode?: string; variant?: string }) => {
    const { colorMode, variant } = props;

    const platform = Platform.OS;

    let selector = `${themeKey}${path ? `.${path}` : ''}`;
    if (get(props, `theme.${themeKey}.${platform}`)) {
      selector = `${themeKey}.${platform}${path ? `.${path}` : ''}`;
    }

    const variantSelector = `${themeKey}.variants.${variant}.${path}`;
    const colorModeSelector = `${themeKey}.modes.${colorMode}.${path}`;

    const defaultTheme = get(props, `theme.${selector}`) || defaultValue;
    const variantTheme = get(props, `theme.${variantSelector}`);
    const colorModeTheme = get(props, `theme.${colorModeSelector}`);

    let defaultThemeOverrides;
    let variantThemeOverrides;
    let colorModeThemeOverrides;
    if (props.overrides) {
      defaultThemeOverrides = get(props, `overrides.${selector}`);
      variantThemeOverrides = get(props, `overrides.${variantSelector}`);
      colorModeThemeOverrides = get(props, `overrides.${colorModeSelector}`);
    }

    if (path && path.includes && path.includes('styles')) {
      const defaultThemeValue = isFunction(defaultTheme) ? defaultTheme(props) : defaultTheme;
      const defaultThemeOverridesValue = isFunction(defaultThemeOverrides)
        ? defaultThemeOverrides(props)
        : defaultThemeOverrides;
      const variantThemeValue = isFunction(variantTheme) ? variantTheme(props) : variantTheme;
      const variantThemeOverridesValue = isFunction(variantThemeOverrides)
        ? variantThemeOverrides(props)
        : variantThemeOverrides;
      const colorModeThemeValue = isFunction(colorModeTheme) ? colorModeTheme(props) : colorModeTheme;
      const colorModeThemeOverridesValue = isFunction(colorModeThemeOverrides)
        ? colorModeThemeOverrides(props)
        : colorModeThemeOverrides;
      let styles = {
        ...defaultThemeValue,
        ...defaultThemeOverridesValue,
        ...variantThemeValue,
        ...variantThemeOverridesValue,
        ...colorModeThemeValue,
        ...colorModeThemeOverridesValue,
      };
      if (!styles.styles) {
        styles = getCSSFromStyleObject(styles, props.theme, colorMode);
      }
      return styles;
    }

    const theme =
      colorModeThemeOverrides ||
      colorModeTheme ||
      variantThemeOverrides ||
      variantTheme ||
      defaultThemeOverrides ||
      defaultTheme;
    return isFunction(theme) ? theme(props) : theme;
  };
}

export function altitude(selector?: string, defaultValue?: any) {
  return (props: { altitude?: string; theme?: ThemeConfig }) => {
    const altitude = theme('native.altitudes', selector || props.altitude, defaultValue)(props);
    return altitude;
  };
}

export function border(selector?: string, defaultValue?: any) {
  return (props: { border?: string; theme?: ThemeConfig }) => {
    const border = theme('borders', selector || props.border, defaultValue)(props);
    return border;
  };
}

export function borderRadius(selector?: string, defaultValue?: any) {
  return (props: { borderRadius?: string; theme?: ThemeConfig }) => {
    const borderRadius = theme('borderRadii', selector || props.borderRadius, defaultValue)(props);
    return borderRadius;
  };
}

export function font(selector?: string, defaultValue?: any) {
  return (props: { font?: string; theme?: ThemeConfig }) => {
    const color = theme('fonts', selector || props.font, defaultValue)(props);
    return color;
  };
}

export function fontMetric(selector?: string) {
  return (props: { fontMetrics?: string; theme?: ThemeConfig }) => {
    const fontMetrics = theme('fontMetrics', selector || props.fontMetrics)(props);
    return fontMetrics;
  };
}

export function fontSize(selector?: string, defaultValue?: any) {
  return (props: { fontSize?: string; theme?: ThemeConfig }) => {
    const globalFontSize = props.theme?.global?.fontSize;
    const fontSize = globalFontSize * theme('fontSizes', selector || props.fontSize, defaultValue || 1)(props);
    return fontSize;
  };
}

export function fontWeight(selector?: string, defaultValue?: any) {
  return (props: { fontWeight?: string; theme?: ThemeConfig }) => {
    const color = theme('fontWeights', selector || props.fontWeight, defaultValue)(props);
    return color;
  };
}

export function lineHeight(selector?: string, defaultValue?: any) {
  return (props: { lineHeight?: string; theme?: ThemeConfig }) => {
    const lineHeights = theme('lineHeights', selector || props.lineHeight, defaultValue)(props);
    return lineHeights;
  };
}

export function letterSpacing(selector?: string, defaultValue?: any) {
  return (props: { letterSpacing?: string; theme?: ThemeConfig }) => {
    const letterSpacing = theme('letterSpacings', selector || props.letterSpacing, defaultValue)(props);
    return letterSpacing;
  };
}

export function palette(_selector?: string, modes?: any) {
  return (props: { palette?: string; colorMode?: string; theme?: ThemeConfig }) => {
    const selector = modes && modes[props.colorMode] ? modes[props.colorMode] : _selector;

    let fallback = tinycolor(selector).toHexString();
    if (selector === 'transparent') {
      fallback = 'transparent';
    }

    const color = theme('palette', selector || props.palette)(props);
    if (!color) return fallback;
    return color;
  };
}

export function space(_scalar: number | string | void, _scaleType: 'minor' | 'major' = 'minor') {
  return (props: { theme?: ThemeConfig }) => {
    let scalar = _scalar;
    let scaleType = _scaleType;
    if (!scalar) return 0;
    if (typeof scalar === 'string') {
      if (scalar.includes('minor') || scalar.includes('major')) {
        // @ts-ignore
        [scaleType, scalar] = scalar.split('-');
        scalar = parseFloat(scalar);
        if (isNaN(scalar)) return 0;
      } else {
        const value = theme('spacing', scalar)(props);
        return value;
      }
    }
    if (typeof scalar === 'number') {
      const unitSize: number = props?.theme?.spacing?.[`${scaleType}Unit`] as number;
      const value = scalar * unitSize;
      return value;
    }
  };
}
