import { LineHeightsThemeConfig } from '../types';

export default (overrides: LineHeightsThemeConfig) => ({
  default: 1.5,
  heading: 1,
  paragraph: 1.5,
  text: 1.5,
  list: 1.5,
  ...overrides,
});
