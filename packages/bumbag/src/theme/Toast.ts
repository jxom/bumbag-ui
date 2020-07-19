import { Placement, ToastThemeConfig } from '../types';

export default (overrides: ToastThemeConfig) => ({
  placement: 'top-end' as Placement,
  showCountdown: true,
  timeout: 5000,
  ...overrides,
});
