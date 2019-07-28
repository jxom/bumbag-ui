import { SimpleInterpolation } from 'styled-components';

export type Stylesheet = SimpleInterpolation;

export type GlobalThemeConfig = {
  base?: Stylesheet;
  fontFamily?: string;
  fontSize?: number;
};
export type FontSizeThemeConfig = {
  [key: string]: number;
};
export type FontWeightsThemeConfig = {
  [key: string]: number;
};
export type LayoutThemeConfig = {
  mobileBreakpoint?: number;
  tabletBreakpoint?: number;
  desktopBreakpoint?: number;
  widescreenBreakpoint?: number;
  fullHDBreakpoint?: number;
  gapFactor?: number;
  minorUnit?: number;
  majorUnit?: number;
};
export type PaletteThemeConfig = {
  [key: string]: string;
};
export type BoxThemeConfig = {
  base?: Stylesheet;
};

export type ThemeConfig = {
  fontSizes?: FontSizeThemeConfig;
  fontWeights?: FontWeightsThemeConfig;
  global?: GlobalThemeConfig;
  layout?: LayoutThemeConfig;
  palette?: PaletteThemeConfig;

  Box?: BoxThemeConfig;
};
