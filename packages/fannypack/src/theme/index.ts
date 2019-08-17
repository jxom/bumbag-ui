import { ThemeConfig } from '../types';

import breakpoints from './breakpoints';
import global from './global';
import palette from './palette';
import layout from './layout';
import fontWeights from './fontWeights';
import fontSizes from './fontSizes';

export default (overrides: ThemeConfig = {}) => ({
  ...overrides,
  breakpoints: breakpoints(overrides.breakpoints || {}),
  fontSizes: fontSizes(overrides.fontSizes || {}),
  fontWeights: fontWeights(overrides.fontWeights || {}),
  global: global(overrides.global || {}),
  layout: layout(overrides.layout || {}),
  palette: palette(overrides.palette || {})
});
