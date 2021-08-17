import { ThemeConfig } from '../types';

const altitudes = (overrides) => ({
  100: `
    shadow-opacity: 0.15;
    shadow-radius: 4px;
    shadow-color: black;
    shadow-offset: 0px 1px;
    elevation: 8;
  `,
  200: `
    shadow-opacity: 0.15;
    shadow-radius: 8px;
    shadow-color: black;
    shadow-offset: 0px 2px;
    elevation: 16;
  `,
  300: `
    shadow-opacity: 0.15;
    shadow-radius: 12px;
    shadow-color: black;
    shadow-offset: 0px 3px;
    elevation: 24;
  `,
  400: `
    shadow-opacity: 0.15;
    shadow-radius: 24px;
    shadow-color: black;
    shadow-offset: 0px 6px;
    elevation: 48;
  `,
  ...overrides,
});

export default (overrides: ThemeConfig) => ({
  web: altitudes(overrides?.altitudes?.web),
  ios: altitudes(overrides?.altitudes?.ios),
  android: altitudes(overrides?.altitudes?.android),
});
