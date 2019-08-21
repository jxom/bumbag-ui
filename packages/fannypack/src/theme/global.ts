import { GlobalThemeConfig } from '../types';

export default (overrides: GlobalThemeConfig) => ({
  fontFamily:
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: 16,
  ...overrides
});
