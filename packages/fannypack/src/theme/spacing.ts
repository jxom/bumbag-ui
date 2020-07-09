import { SpacingThemeConfig } from '../types';
import { space } from '../utils';

export default (overrides: SpacingThemeConfig) => ({
  minorUnit: 4,
  majorUnit: 8,
  xs: space(1, 'major'),
  sm: space(2, 'major'),
  md: space(4, 'major'),
  lg: space(6, 'major'),
  xl: space(8, 'major'),
  '2xl': space(10, 'major'),
  '3xl': space(12, 'major'),
  '4xl': space(14, 'major'),
  '5xl': space(16, 'major'),
  '6xl': space(18, 'major'),
  ...overrides,
});
