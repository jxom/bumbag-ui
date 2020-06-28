import { LayoutThemeConfig } from '../types';
import { space } from '../utils';

export default (overrides: LayoutThemeConfig) => ({
  minorUnit: 4,
  majorUnit: 8,
  ...overrides,
});
