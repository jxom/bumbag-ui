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
  return ({ referenceColor = BLACK, theme }: { referenceColor?: string; theme?: any } = {}) => {
    const themeColor = palette(color, null, { useCSSVariables: false })({ theme });
    if (themeColor === 'transparent') return themeColor;

    return tinycolor.mix(themeColor, referenceColor, scale * 100).toHexString();
  };
}

export function tint(scale, color) {
  return ({ referenceColor = WHITE, theme }: { referenceColor?: string; theme?: any } = {}) => {
    const themeColor = palette(color, null, { useCSSVariables: false })({ theme });
    if (themeColor === 'transparent') return themeColor;

    return tinycolor.mix(themeColor, referenceColor, scale * 100).toHexString();
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

export function isRGB(string) {
  return /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.test(string);
}

export function isRGBA(string) {
  return /^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/.test(string);
}

export function isHex(string) {
  return /#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})\b/gi.test(string);
}

export function isHSL(string) {
  return /^hsl\(\s*(\d+)\s*,\s*(\d*(?:\.\d+)?%)\s*,\s*(\d*(?:\.\d+)?%)\)$/.test(string);
}

export function isHSLA(string) {
  return /^hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)$/.test(string);
}

export function isRGBOrHSLOrHex(string) {
  return isRGB(string) || isRGBA(string) || isHSL(string) || isHSLA(string) || isHex(string);
}

const parseInt16 = (value) => parseInt(value, 16);
export const hexToRgb = (h) => {
  const hexNoHash = h.charAt(0) === '#' ? h.substring(1, 7) : h;
  const { r, g, b } = {
    r: parseInt16(hexNoHash.substring(0, 2)),
    g: parseInt16(hexNoHash.substring(2, 4)),
    b: parseInt16(hexNoHash.substring(4, 6)),
  };
  return `rgb(${r},${g},${b})`;
};
