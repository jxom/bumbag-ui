import { LineHeightsThemeConfig } from '../types';

export default (overrides: LineHeightsThemeConfig) => ({
  none: 1,
  default: 1.5,
  100: 1.125,
  200: 1.25,
  300: 1.5,
  400: 1.625,
  500: 1.75,
  600: 2,
  ...overrides,
});
