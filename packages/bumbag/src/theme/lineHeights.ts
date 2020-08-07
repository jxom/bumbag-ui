import { LineHeightsThemeConfig } from '../types';

export default (overrides: LineHeightsThemeConfig) => ({
  default: 1.4,
  heading: 1,
  paragraph: 1.4,
  text: 1.4,
  ...overrides,
});
