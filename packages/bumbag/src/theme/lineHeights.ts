import { LineHeightsThemeConfig } from '../types';

export default (overrides: LineHeightsThemeConfig) => ({
  small: 1.125,
  default: 1.5,
  ...overrides,
});
