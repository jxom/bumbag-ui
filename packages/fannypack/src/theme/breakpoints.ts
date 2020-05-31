import { BreakpointsThemeConfig } from '../types';

export default (overrides: BreakpointsThemeConfig) => ({
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  widescreen: 1200,
  fullHD: 1440,
  ...overrides,
});
