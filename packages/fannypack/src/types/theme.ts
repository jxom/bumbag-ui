import { SimpleInterpolation } from 'styled-components';

export type Stylesheet = SimpleInterpolation;

export type GlobalThemeConfig = {
  base?: Stylesheet;
  fontFamily?: string;
  fontSize?: string;
};
export type PaletteThemeConfig = {
  [key: string]: string;
};
export type BoxThemeConfig = {
  base?: Stylesheet;
};

export type ThemeConfig = {
  global?: GlobalThemeConfig;
  palette?: PaletteThemeConfig;

  Box?: BoxThemeConfig;
};
