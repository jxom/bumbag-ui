// @ts-ignore

import { PaletteThemeConfig } from '../types';
import { tint, shade, generateColorVariants, generateTextVariants } from '../utils';

const defaultPalette: { [key: string]: string } = {
  background: 'white',
  black: '#0b0e13',
  text: '#161e2e',
  primary: '#574feb',
  secondary: '#7c3aed',
  info: '#1e67d5',
  success: '#0a7d33',
  danger: '#da1717',
  warning: '#f59e0b',
  blue: '#3b82f6',
  green: '#10b981',
  red: '#ef4444',
  orange: '#f59e0b',
  pink: '#ec4899',
  purple: '#7c3aed',
  indigo: '#574feb',
  gray: '#626f84',
  grayTint: '#edf2f7',
};

const defaultDarkPalette: { [key: string]: string } = {
  background: '#1a212d',
  black: '#0b0e13',
  default: '#27303f',
  defaultInverted: 'white',
  text: 'white',
  text100: '#b1bccd',
  text200: '#c1c9d7',
  text300: '#d0d7e1',
  text400: '#e0e4eb',
  primary: '#574feb',
  secondary: '#7c3aed',
  info: '#1e67d5',
  success: '#0a7d33',
  danger: '#da1717',
  warning: '#f59e0b',
  blue: '#3b82f6',
  green: '#10b981',
  red: '#ef4444',
  orange: '#f59e0b',
  pink: '#ec4899',
  purple: '#7c3aed',
  indigo: '#574feb',
  grayTint: '#23262b',
};

export default (overrides: PaletteThemeConfig) => ({
  ...generateTextVariants((overrides?.text ?? defaultPalette.text) as string),

  background: defaultPalette.background,

  black: defaultPalette.black,
  black500: defaultPalette.black,
  black400: tint(
    0.05,
    defaultPalette.black
  )({ backgroundColor: (overrides.background || defaultPalette.background) as string, colorMode: 'default' }),
  black300: tint(
    0.1,
    defaultPalette.black
  )({ backgroundColor: (overrides.background || defaultPalette.background) as string, colorMode: 'default' }),
  black200: tint(
    0.15,
    defaultPalette.black
  )({ backgroundColor: (overrides.background || defaultPalette.background) as string, colorMode: 'default' }),
  black100: tint(
    0.2,
    defaultPalette.black
  )({ backgroundColor: (overrides.background || defaultPalette.background) as string, colorMode: 'default' }),

  white: 'white',
  white500: 'white',
  white600: '#f7f7fa',
  white700: '#f2f2f5',
  white800: '#e6e6eb',
  white900: '#d9d9e1',

  default: '#fcfcfd',
  defaultInverted: '#212121',

  ...generateColorVariants({
    paletteKey: 'primary',
    backgroundColor: (overrides.background || defaultPalette.background) as string,
    color: (overrides.primary || defaultPalette.primary) as string,
  }),
  ...generateColorVariants({
    paletteKey: 'secondary',
    backgroundColor: (overrides.background || defaultPalette.background) as string,
    color: (overrides.secondary || defaultPalette.secondary) as string,
  }),
  ...generateColorVariants({
    paletteKey: 'info',
    backgroundColor: (overrides.background || defaultPalette.background) as string,
    color: (overrides.info || defaultPalette.info) as string,
  }),
  ...generateColorVariants({
    paletteKey: 'success',
    backgroundColor: (overrides.background || defaultPalette.background) as string,
    color: (overrides.success || defaultPalette.success) as string,
  }),
  ...generateColorVariants({
    paletteKey: 'danger',
    backgroundColor: (overrides.background || defaultPalette.background) as string,
    color: (overrides.danger || defaultPalette.danger) as string,
  }),
  ...generateColorVariants({
    paletteKey: 'warning',
    backgroundColor: (overrides.background || defaultPalette.background) as string,
    color: (overrides.warning || defaultPalette.warning) as string,
    paletteOverrides: ({ color }) => ({
      warningTintInverted: shade(0.7, color)(),
    }),
  }),
  ...generateColorVariants({
    paletteKey: 'blue',
    backgroundColor: (overrides.background || defaultPalette.background) as string,
    color: (overrides.blue || defaultPalette.blue) as string,
  }),
  ...generateColorVariants({
    paletteKey: 'red',
    backgroundColor: (overrides.background || defaultPalette.background) as string,
    color: (overrides.red || defaultPalette.red) as string,
  }),
  ...generateColorVariants({
    paletteKey: 'orange',
    backgroundColor: (overrides.background || defaultPalette.background) as string,
    color: (overrides.orange || defaultPalette.orange) as string,
  }),
  ...generateColorVariants({
    paletteKey: 'pink',
    backgroundColor: (overrides.background || defaultPalette.background) as string,
    color: (overrides.pink || defaultPalette.pink) as string,
  }),
  ...generateColorVariants({
    paletteKey: 'purple',
    backgroundColor: (overrides.background || defaultPalette.background) as string,
    color: (overrides.purple || defaultPalette.purple) as string,
  }),
  ...generateColorVariants({
    paletteKey: 'green',
    backgroundColor: (overrides.background || defaultPalette.background) as string,
    color: (overrides.green || defaultPalette.green) as string,
  }),
  ...generateColorVariants({
    paletteKey: 'indigo',
    backgroundColor: (overrides.background || defaultPalette.background) as string,
    color: (overrides.indigo || defaultPalette.indigo) as string,
  }),
  ...generateColorVariants({
    paletteKey: 'gray',
    backgroundColor: (overrides.background || defaultPalette.background) as string,
    color: (overrides.gray || defaultPalette.gray) as string,
    paletteOverrides: ({ color }) => ({
      gray700: shade(0.2, color)(),
      gray800: shade(0.3, color)(),
      gray900: shade(0.4, color)(),
    }),
  }),
  ...generateColorVariants({
    paletteKey: 'grayTint',
    backgroundColor: (overrides.background || defaultPalette.background) as string,
    color: (overrides.grayTint || defaultPalette.grayTint) as string,
    paletteOverrides: ({ color }) => ({
      grayTint600: shade(0.05, color)(),
      grayTint700: shade(0.1, color)(),
      grayTint800: shade(0.2, color)(),
      grayTint900: shade(0.3, color)(),
    }),
  }),

  modes: {
    dark: {
      ...defaultDarkPalette,
      ...generateColorVariants({
        paletteKey: 'primary',
        colorMode: 'dark',
        backgroundColor: (overrides.background || defaultDarkPalette.background) as string,
        color: (overrides.primary || defaultDarkPalette.primary) as string,
      }),
      ...generateColorVariants({
        paletteKey: 'secondary',
        colorMode: 'dark',
        backgroundColor: (overrides.background || defaultDarkPalette.background) as string,
        color: (overrides.secondary || defaultDarkPalette.secondary) as string,
      }),
      ...generateColorVariants({
        paletteKey: 'info',
        colorMode: 'dark',
        backgroundColor: (overrides.background || defaultDarkPalette.background) as string,
        color: (overrides.info || defaultDarkPalette.info) as string,
      }),
      ...generateColorVariants({
        paletteKey: 'success',
        colorMode: 'dark',
        backgroundColor: (overrides.background || defaultDarkPalette.background) as string,
        color: (overrides.success || defaultDarkPalette.success) as string,
      }),
      ...generateColorVariants({
        paletteKey: 'danger',
        colorMode: 'dark',
        backgroundColor: (overrides.background || defaultDarkPalette.background) as string,
        color: (overrides.danger || defaultDarkPalette.danger) as string,
      }),
      ...generateColorVariants({
        paletteKey: 'warning',
        colorMode: 'dark',
        backgroundColor: (overrides.background || defaultDarkPalette.background) as string,
        color: (overrides.warning || defaultDarkPalette.warning) as string,
        paletteOverrides: ({ color }) => ({
          warningTintInverted: shade(0.7, color)(),
        }),
      }),
      ...generateColorVariants({
        paletteKey: 'gray',
        colorMode: 'dark',
        backgroundColor: (overrides.background || defaultDarkPalette.background) as string,
        color: (overrides.gray || defaultPalette.gray) as string,
      }),
      ...generateColorVariants({
        paletteKey: 'grayTint',
        colorMode: 'dark',
        backgroundColor: (overrides.background || defaultDarkPalette.background) as string,
        color: (overrides.grayTint || defaultPalette.grayTint) as string,
      }),
      black: defaultPalette.black,
      black500: defaultPalette.black,
      black400: tint(
        0.25,
        defaultPalette.black
      )({ backgroundColor: (overrides.background || defaultDarkPalette.background) as string, colorMode: 'default' }),
      black300: tint(
        0.5,
        defaultPalette.black
      )({ backgroundColor: (overrides.background || defaultDarkPalette.background) as string, colorMode: 'default' }),
      black200: tint(
        0.75,
        defaultPalette.black
      )({ backgroundColor: (overrides.background || defaultDarkPalette.background) as string, colorMode: 'default' }),
      black100: tint(
        1,
        defaultPalette.black
      )({ backgroundColor: (overrides.background || defaultDarkPalette.background) as string, colorMode: 'default' }),
    },
  },

  ...overrides,
});
