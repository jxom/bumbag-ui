import tinycolor from 'tinycolor2';
import { palette } from './theme';

const BLACK = '#000000';
const WHITE = '#ffffff';

export function darken(scale, color) {
  return ({ theme }: { theme?: any } = {}) => {
    const themeColor = palette(color, null, { useCSSVariables: false })({ theme });
    return tinycolor(themeColor)
      .darken(scale * 100)
      .toHexString();
  };
}

export function lighten(scale, color) {
  return ({ theme }: { theme?: any } = {}) => {
    const themeColor = palette(color, null, { useCSSVariables: false })({ theme });
    return tinycolor(themeColor)
      .lighten(scale * 100)
      .toHexString();
  };
}

export function shade(scale, color) {
  return ({
    backgroundColor,
    colorMode,
    theme,
  }: { backgroundColor?: string; colorMode?: string; theme?: any } = {}) => {
    const themeColor = palette(color, null, { useCSSVariables: false })({ theme });
    if (themeColor === 'transparent') return themeColor;

    let targetColor = BLACK;
    if (colorMode === 'dark') {
      targetColor = backgroundColor;
    }
    return tinycolor.mix(themeColor, targetColor, scale * 100).toHexString();
  };
}

export function tint(scale, color) {
  return ({
    backgroundColor,
    colorMode,
    theme,
  }: { backgroundColor?: string; colorMode?: string; theme?: any } = {}) => {
    const themeColor = palette(color, null, { useCSSVariables: false })({ theme });
    if (themeColor === 'transparent') return themeColor;

    let targetColor = WHITE;
    if (colorMode === 'default') {
      targetColor = backgroundColor;
    }
    return tinycolor.mix(themeColor, targetColor, scale * 100).toHexString();
  };
}

export function readableColor(color) {
  return ({ theme }: { theme?: any } = {}) => {
    const themeColor = palette(color, null, { useCSSVariables: false })({ theme });
    const isReadable = tinycolor.isReadable(BLACK, themeColor);
    if (!isReadable) {
      return WHITE;
    }
    return BLACK;
  };
}

export function isColor(color) {
  const s = new Option().style;
  s.color = color;
  return s.color === color;
}
