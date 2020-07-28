import { ModesThemeConfig } from '../types';

export default (overrides: ModesThemeConfig) => ({
  localStoragePrefix: 'bb',
  enableLocalStorage: true,
  useSystemColorMode: false,
  ...overrides,
});
