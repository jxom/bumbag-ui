import { ModesThemeConfig } from '../types';

export default (overrides: ModesThemeConfig) => ({
  localStoragePrefix: 'fp',
  enableLocalStorage: true,
  useSystemColorMode: false,
  ...overrides,
});
