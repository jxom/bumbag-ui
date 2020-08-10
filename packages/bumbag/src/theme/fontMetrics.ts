import { FontMetricsThemeConfig } from '../types';

export default (overrides: FontMetricsThemeConfig) => ({
  default: {
    capHeight: 1450,
    ascent: 1950,
    descent: -420,
    lineGap: 0,
    unitsPerEm: 2048,
  },
  ...overrides,
});
