import { BorderRadiiThemeConfig } from '../types';

export default (overrides: BorderRadiiThemeConfig) => ({
  default: '8px',
  '0': '0px',
  '1': '2px',
  '2': '4px',
  '3': '8px',
  '4': '16px',
  '5': '32px',
  '6': '64px',
  ...overrides
});
