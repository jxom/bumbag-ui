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
  '2xl': space(12, 'major'),
  '3xl': space(16, 'major'),
  '4xl': space(20, 'major'),
  '5xl': space(24, 'major'),
  '6xl': space(28, 'major'),
  ...overrides,
});
