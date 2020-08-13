import { FontMetricsThemeConfig } from '../types';

export const fontMetrics = {
  SFPro: {
    capHeight: 1450,
    ascent: 1950,
    descent: -420,
    lineGap: 0,
    unitsPerEm: 2048,
  },
  Roboto: {
    capHeight: 1456,
    ascent: 1900,
    descent: -500,
    lineGap: 0,
    unitsPerEm: 2048,
  },
  SegoeUI: {
    capHeight: 1434,
    ascent: 2210,
    descent: -514,
    lineGap: 0,
    unitsPerEm: 2048,
  },
};

export const OSFonts = {
  windows: 'SegoeUI',
  apple: 'SFPro',
  android: 'Roboto',
};

export function getFontMetricsFromUserAgent() {
  if (typeof window !== 'undefined') {
    const userAgent = window.navigator.userAgent;
    if (/iPhone|iPad|Mac/.test(userAgent)) {
      return fontMetrics[OSFonts.apple];
    } else if (/Windows/.test(userAgent)) {
      return fontMetrics[OSFonts.windows];
    } else if (/Android/.test(userAgent)) {
      return fontMetrics[OSFonts.android];
    }
  }
  return fontMetrics.SFPro;
}

export default (overrides: FontMetricsThemeConfig) => ({
  default: getFontMetricsFromUserAgent(),
  heading: getFontMetricsFromUserAgent(),
  ...overrides,
});
