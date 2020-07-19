import { FontSizeThemeConfig } from '../types';

export default (overrides: FontSizeThemeConfig) => ({
  100: 0.75,
  150: 0.875,
  200: 1,
  250: 1.125,
  300: 1.25,
  400: 1.5,
  500: 2,
  600: 2.5,
  700: 3,
  800: 3.75,
  900: 4.5,
  ...overrides,
});
