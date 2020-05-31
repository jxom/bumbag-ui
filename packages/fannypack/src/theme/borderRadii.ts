import { BorderRadiiThemeConfig } from '../types';

export default (overrides: BorderRadiiThemeConfig) => ({
  default: '6px',
  '0': '0px',
  '1': '2px',
  '2': '4px',
  '3': '6px',
  '4': '8px',
  '5': '16px',
  '6': '32px',
  '7': '64px',
  ...overrides,
});
