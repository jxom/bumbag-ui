// @ts-ignore
import _get from 'lodash/get';

import { LayoutThemeConfig } from '../types';

export default (overrides: LayoutThemeConfig) => ({
  gapFactor: 8,
  mobileBreakpoint: 480,
  tabletBreakpoint: 768,
  desktopBreakpoint: 1024,
  widescreenBreakpoint: 1200,
  fullHDBreakpoint: 1440,
  minorUnit: 4,
  majorUnit: 8,
  ...overrides
});
