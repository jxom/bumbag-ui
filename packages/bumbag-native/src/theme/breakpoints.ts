import { ThemeConfig } from '../types';

const breakpoints = (overrides) => ({
  ...overrides,
  height: {
    xs: 568,
    sm: 667,
    md: 736,
    lg: 896,
    xl: 1024,
    '2xl': 1366,
    ...overrides?.height,
  },
  width:
    typeof overrides?.width === 'object' && !Array.isArray(typeof overrides?.width)
      ? overrides?.width
      : [
          {
            xs: 320,
            sm: 375,
            md: 414,
            lg: 768,
            xl: 1024,
            ...overrides?.width?.[0],
          },
          {
            mobile: 480,
            tablet: 768,
            desktop: 1024,
            widescreen: 1200,
            fullHD: 1440,
            ...overrides?.width?.[1],
          },
        ],
});

export default (overrides: ThemeConfig) => ({
  web: breakpoints(overrides?.breakpoints?.web),
  ios: breakpoints(overrides?.breakpoints?.ios),
  android: breakpoints(overrides?.breakpoints?.android),
});
