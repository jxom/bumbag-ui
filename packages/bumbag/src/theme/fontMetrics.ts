import { FontMetricsThemeConfig } from '../types';

export default (overrides: FontMetricsThemeConfig) => ({
  default: {
    capHeight: 1443,
    ascent: 1950,
    descent: -494,
    lineGap: 0,
    unitsPerEm: 2048,
  },
  ...overrides,
});
