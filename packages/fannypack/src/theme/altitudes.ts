import { css } from '../styled';
import { AltitudesThemeConfig } from '../types';

export default (overrides: AltitudesThemeConfig) => ({
  100: 'box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.15), 0px 0px 2px 1px rgba(0, 0, 0, 0.02)',
  200: 'box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15), 0px 0px 4px 2px rgba(0, 0, 0, 0.02)',
  300: 'box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.15), 0px 0px 6px 3px rgba(0, 0, 0, 0.02)',
  400: 'box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.15), 0px 0px 12px 6px rgba(0, 0, 0, 0.02)',
  ...overrides,
});
