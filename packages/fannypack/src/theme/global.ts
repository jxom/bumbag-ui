import { GlobalThemeConfig } from '../types';

export default (overrides: GlobalThemeConfig) => ({
  fontSize: 16,
  ...overrides,
});
