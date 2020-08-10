import { Breakpoint, HeadingThemeConfig } from '../types';

export default (overrides: HeadingThemeConfig) => ({
  ...overrides,
  h1: {
    fontSize: '700',
    shrinkScale: 0.75,
    ...overrides.h1,
  },
  h2: {
    fontSize: '600',
    shrinkScale: 0.75,
    ...overrides.h2,
  },
  h3: {
    fontSize: '500',
    shrinkScale: 0.75,
    ...overrides.h3,
  },
  h4: {
    fontSize: '400',
    shrinkScale: 0.75,
    ...overrides.h4,
  },
  h5: {
    fontSize: '300',
    shrinkScale: 0.875,
    ...overrides.h5,
  },
  h6: {
    fontSize: '200',
    shrinkScale: 1,
    ...overrides.h6,
  },
  defaultProps: {
    shrinkBelow: 'tablet' as Breakpoint,
    ...overrides.defaultProps,
  },
});
