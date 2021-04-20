const breakpoints = {
  height: {
    xs: 568,
    sm: 667,
    md: 736,
    lg: 896,
    xl: 1024,
    '2xl': 1366,
  },
  width: [
    {
      xs: 320,
      sm: 375,
      md: 414,
      lg: 768,
      xl: 1024,
    },
    {
      mobile: 480,
      tablet: 768,
      desktop: 1024,
      widescreen: 1200,
      fullHD: 1440,
    },
  ],
};

export default {
  web: breakpoints,
  ios: breakpoints,
  android: breakpoints,
};
