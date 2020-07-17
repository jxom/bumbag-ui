import { Breakpoint, HeadingThemeConfig } from '../types';

export default (overrides: HeadingThemeConfig) => ({
  ...overrides,
  defaultProps: {
    shrinkBelow: 'tablet' as Breakpoint,
    ...overrides.defaultProps,
  },
});
