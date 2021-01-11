import { palette } from '../utils';
import { BordersThemeConfig } from '../types';

export default (overrides: BordersThemeConfig) => ({
  default: {
    color: 'white800',
    style: 'solid',
    width: '1px',
  },
  ...overrides,
});
