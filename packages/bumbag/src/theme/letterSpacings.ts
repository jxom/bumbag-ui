import { LetterSpacingsThemeConfig } from '../types';

export default (overrides: LetterSpacingsThemeConfig) => ({
  default: '0',
  100: '-0.05em',
  200: '-0.025em',
  300: '0',
  400: '0.025em',
  500: '0.05em',
  600: '0.075em',
  700: '0.1em',
  ...overrides,
});
