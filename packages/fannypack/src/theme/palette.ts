// @ts-ignore

import { PaletteThemeConfig } from '../types';
import { darken, lighten, shade, generateColorVariants, generateTextVariants } from '../utils';

const defaultPalette: { [key: string]: string } = {
  text: '#212121',
  primary: '#574feb',
  secondary: '#9e46d8',
  info: '#1e67d5',
  success: '#0a7d33',
  danger: '#da1717',
  warning: '#ed9c22',
};

export default (overrides: PaletteThemeConfig) => ({
  ...generateTextVariants(overrides?.text ?? defaultPalette.text),

  background: 'white',

  black: 'black',
  black500: 'black',

  white: 'white',
  white500: 'white',
  white600: '#f7f7fa',
  white700: '#f2f2f5',
  white800: '#e6e6eb',
  white900: '#d9d9e1',

  gray100: '#cfd8e3',
  gray200: '#b5bdcc',
  gray300: '#97a3b4',
  gray400: '#7b899d',
  gray: '#626f84',
  gray500: '#626f84',
  gray600: '#4b5768',
  gray700: '#343e4b',
  gray800: '#1e2530',
  gray900: '#070c18',

  default: '#fcfcfd',
  defaultInverted: '#212121',

  ...generateColorVariants({
    paletteKey: 'primary',
    color: overrides.primary || defaultPalette.primary,
  }),
  ...generateColorVariants({
    paletteKey: 'secondary',
    color: overrides.secondary || defaultPalette.secondary,
  }),
  ...generateColorVariants({
    paletteKey: 'info',
    color: overrides.info || defaultPalette.info,
  }),
  ...generateColorVariants({
    paletteKey: 'success',
    color: overrides.success || defaultPalette.success,
  }),
  ...generateColorVariants({
    paletteKey: 'danger',
    color: overrides.danger || defaultPalette.danger,
  }),
  ...generateColorVariants({
    paletteKey: 'warning',
    color: overrides.warning || defaultPalette.warning,
    paletteOverrides: ({ color }) => ({
      warningTintInverted: shade(0.7, color),
    }),
  }),

  // modes: {
  //   dark: {
  //     background: '#1e2530',
  //   },
  // },

  ...overrides,
});
