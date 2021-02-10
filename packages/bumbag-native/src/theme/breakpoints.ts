const breakpoints = {
  height: {
    xs: 480,
    sm: 568,
    md: 667,
    lg: 736,
    xl: 844,
    '2xl': 1024,
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
