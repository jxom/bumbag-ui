import { palette } from '../utils';
import { BordersThemeConfig } from '../types';

export default (overrides: BordersThemeConfig) => ({
  default: (styleProps) => ({
    color: palette('white800')(styleProps),
    width: '1px',
  }),
  ...overrides,
});
