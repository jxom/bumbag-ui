import { ThemeConfig } from '../types';

export default (overrides: ThemeConfig) => ({
  sizes: {
    small: '16px',
    default: '20px',
    medium: '28px',
    large: '36px',
  },
  ...overrides?.Spinner,
});
