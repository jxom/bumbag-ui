import { ThemeConfig } from '../types';

export const defaultAndroidFontWeights = {
  normal: {
    fontFamilySuffix: '',
    fontWeight: 'normal',
  },
  semibold: {
    fontFamilySuffix: 'light',
    fontWeight: 'bold',
  },
  bold: {
    fontFamilySuffix: '',
    fontWeight: 'bold',
  },
  100: {
    fontFamilySuffix: 'thin',
    fontWeight: 'normal',
  },
  200: {
    fontFamilySuffix: 'light',
    fontWeight: 'normal',
  },
  300: {
    fontFamilySuffix: 'light',
    fontWeight: 'normal',
  },
  400: {
    fontFamilySuffix: '',
    fontWeight: 'normal',
  },
  500: {
    fontFamilySuffix: 'light',
    fontWeight: 'bold',
  },
  600: {
    fontFamilySuffix: 'medium',
    fontWeight: 'normal',
  },
  700: {
    fontFamilySuffix: '',
    fontWeight: 'bold',
  },
  800: {
    fontFamilySuffix: 'medium',
    fontWeight: 'bold',
  },
  900: {
    fontFamilySuffix: 'black',
    fontWeight: 'normal',
  },
};

export default (overrides: ThemeConfig) =>
  ({
    ...overrides?.fontWeights,
    android: {
      // @ts-ignore
      default: !overrides?.fonts?.default && !overrides?.fontWeights?.default ? defaultAndroidFontWeights : undefined,
      // @ts-ignore
      heading: !overrides?.fonts?.heading && !overrides?.fontWeights?.heading ? defaultAndroidFontWeights : undefined,
      ...overrides?.fontWeights?.android,
    },
  } as any);
