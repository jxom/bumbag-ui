import { ThemeConfig } from '../types';

export default (overrides: ThemeConfig) => ({
  fontSize: '400',
  ...overrides?.Heading,
  H1: {
    fontSize: '700',
    ...overrides?.Heading?.H1,
  },
  H2: {
    fontSize: '600',
    ...overrides?.Heading?.H2,
  },
  H3: {
    fontSize: '500',
    ...overrides?.Heading?.H3,
  },
  H4: {
    fontSize: '400',
    ...overrides?.Heading?.H4,
  },
  H5: {
    fontSize: '300',
    ...overrides?.Heading?.H5,
  },
  H6: {
    fontSize: '200',
    ...overrides?.Heading?.H6,
  },
});
