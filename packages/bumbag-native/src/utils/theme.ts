import { ColorValue, Platform } from 'react-native';
import { theme as _theme } from 'styled-tools';
import tinycolor from 'tinycolor2';

import { ThemeConfig } from 'bumbag/types';
import { useColorMode } from 'bumbag/ColorMode/ColorModeContext';
import { useTheme } from 'bumbag/utils/useTheme';
import { isFunction } from 'bumbag/utils/isFunction';
import { get } from 'bumbag/utils/get';

import { getCSSFromStyleObject } from './getCSSFromStyleObject';

export function theme(themeKey: string, path?: string, defaultValue?: any) {
  return (props: { theme?: ThemeConfig; overrides?: any; colorMode?: string; variant?: string }) => {
    const { colorMode, variant } = props;

    const platform = Platform.OS;

    let selector = `${themeKey}${path ? `.${path}` : ''}`;
    if (get(props, `theme.${themeKey}.${platform}${path ? `.${path}` : ''}`)) {
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
      defaultThemeOverrides = get(props, `overrides.${selector.replace('native.', '')}`);
      variantThemeOverrides = get(props, `overrides.${variantSelector.replace('native.', '')}`);
      colorModeThemeOverrides = get(props, `overrides.${colorModeSelector.replace('native.', '')}`);
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
        if (Object.values(styles).length === 0) {
          return '';
        }
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

/////////////////////////////////////////////////////////////////////////////////

export function altitude(selector?: string, defaultValue?: any) {
  return (props: { altitude?: string; theme?: ThemeConfig }) => {
    const altitude = theme('native.altitudes', selector || props.altitude, defaultValue)(props);
    return altitude;
  };
}

export function useAltitude(selector?: string, defaultValue?: any) {
  const { theme } = useTheme();
  return altitude(selector, defaultValue)({ theme });
}

/////////////////////////////////////////////////////////////////////////////////

export function border(selector?: string, defaultValue?: any) {
  return (props: { border?: string; theme?: ThemeConfig }) => {
    const border = theme('borders', selector || props.border, defaultValue)(props);
    return border;
  };
}

export function useBorder(selector?: string, defaultValue?: any) {
  const { theme } = useTheme();
  return border(selector, defaultValue)({ theme });
}

/////////////////////////////////////////////////////////////////////////////////

export function borderRadius(selector?: string, defaultValue?: any) {
  return (props: { borderRadius?: string; theme?: ThemeConfig }) => {
    const borderRadius = theme('borderRadii', selector || props.borderRadius, defaultValue)(props);
    return borderRadius;
  };
}

export function useBorderRadius(selector?: string, defaultValue?: any) {
  const { theme } = useTheme();
  return borderRadius(selector, defaultValue)({ theme });
}

/////////////////////////////////////////////////////////////////////////////////

export function font(selector?: string, defaultValue?: any) {
  return (props: { font?: string; fontFamily?: string; theme?: ThemeConfig }) => {
    const fontFamily = theme('fonts', selector || props.font || props.fontFamily, defaultValue)(props);
    if (!fontFamily && Platform.OS === 'android') {
      return 'sans-serif';
    }
    return fontFamily;
  };
}

export function useFont(selector?: string, defaultValue?: any) {
  const { theme } = useTheme();
  return font(selector, defaultValue)({ theme });
}

/////////////////////////////////////////////////////////////////////////////////

export function fontSize(selector?: string, defaultValue?: any) {
  return (props: { fontSize?: string; theme?: ThemeConfig }) => {
    const globalFontSize = props.theme?.global?.fontSize;
    const themeFontSize = theme('fontSizes', selector || props.fontSize)(props);

    let fontSize = defaultValue || globalFontSize;
    if (themeFontSize) {
      fontSize = globalFontSize * theme('fontSizes', selector || props.fontSize, defaultValue || 1)(props);
    } else if (typeof selector === 'string' && selector.includes('px')) {
      fontSize = parseInt(selector?.replace('px', ''), 10);
    }
    return fontSize;
  };
}

export function useFontSize(selector?: string, defaultValue?: any) {
  const { theme } = useTheme();
  return fontSize(selector, defaultValue)({ theme });
}

/////////////////////////////////////////////////////////////////////////////////

export function fontWeight({ fontFamily = 'default', fontWeight: selector }, defaultValue?: any) {
  return (props: { fontWeight?: string; theme?: ThemeConfig }) => {
    const fontWeight = theme('fontWeights', selector || props.fontWeight, defaultValue)(props);
    const fontFamilyWeight = theme(
      'fontWeights',
      `${fontFamily ? `${fontFamily}.` : ''}${selector || props.fontWeight}`,
      defaultValue
    )(props);

    let fallback = 'normal';
    if (RegExp(/(\d\d\d)/).test(selector)) {
      fallback = selector;
    }

    return fontFamilyWeight || fontWeight || fallback;
  };
}

export function useFontWeight({ fontFamily, fontWeight: selector }, defaultValue?: any) {
  const { theme } = useTheme();
  return fontWeight({ fontFamily, fontWeight: selector }, defaultValue)({ theme });
}

/////////////////////////////////////////////////////////////////////////////////

export function lineHeight(selector?: string, defaultValue?: any) {
  return (props: { lineHeight?: string; theme?: ThemeConfig }) => {
    const lineHeights = theme('lineHeights', selector || props.lineHeight, defaultValue)(props);
    return lineHeights;
  };
}

export function useLineHeight(selector?: string, defaultValue?: any) {
  const { theme } = useTheme();
  return lineHeight(selector, defaultValue)({ theme });
}

/////////////////////////////////////////////////////////////////////////////////

export function letterSpacing(selector?: string, defaultValue?: any) {
  return (props: { letterSpacing?: string; theme?: ThemeConfig }) => {
    const letterSpacing = theme('letterSpacings', selector || props.letterSpacing, defaultValue)(props);
    return letterSpacing;
  };
}

export function useLetterSpacing(selector?: string, defaultValue?: any) {
  const { theme } = useTheme();
  return letterSpacing(selector, defaultValue)({ theme });
}

/////////////////////////////////////////////////////////////////////////////////

export function palette(_selector?: ColorValue, modes?: any) {
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

export function usePalette(selector: ColorValue, modes?: any) {
  const { theme } = useTheme();
  const { colorMode } = useColorMode();
  return palette(selector, modes)({ colorMode, theme });
}

/////////////////////////////////////////////////////////////////////////////////

export function space(_scalar: number | string | void, _scaleType: 'minor' | 'major' | string = 'minor') {
  return (props: { theme?: ThemeConfig }) => {
    let scalar = _scalar;
    let scaleType = _scaleType;

    if (!scalar) return 0;
    if (typeof scalar === 'string') {
      let isNegative = false;
      if (scalar[0] === '-') {
        scalar = scalar.replace('-', '');
        isNegative = true;
      }

      if (scalar.includes('minor') || scalar.includes('major')) {
        // @ts-ignore
        [scaleType, scalar] = scalar.split('-');

        scalar = parseFloat(scalar);
        scalar = isNegative ? -scalar : scalar;
        if (isNaN(scalar)) return 0;
      } else {
        const value = theme('spacing', scalar)(props);
        return isNegative ? -value : value;
      }
    }
    if (typeof scalar === 'number') {
      let unitSize: number = props?.theme?.spacing?.[`${scaleType}Unit`] as number;
      if (!['minor', 'major'].includes(_scaleType)) {
        unitSize = fontSize(_scaleType)(props);
      }
      const value = scalar * unitSize;
      return value;
    }
  };
}

export function useSpace(scalar: number | string | void, scaleType: 'minor' | 'major' | string = 'minor') {
  const { theme } = useTheme();
  return space(scalar, scaleType)({ theme });
}

/////////////////////////////////////////////////////////////////////////////////
