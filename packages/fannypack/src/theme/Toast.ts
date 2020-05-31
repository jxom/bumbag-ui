import { ToastThemeConfig } from '../types';

export default (overrides: ToastThemeConfig) => ({
  placement: 'top-end',
  showCountdown: true,
  timeout: 5000,
  ...overrides,
});
