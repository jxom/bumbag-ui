import { SimpleInterpolation } from 'styled-components';

export type Stylesheet = SimpleInterpolation;

export type GlobalThemeConfig = {
  base?: Stylesheet;
};
export type PaletteThemeConfig = {
  [key: string]: string;
};

export type ThemeConfig = {
  global?: GlobalThemeConfig;
  palette?: PaletteThemeConfig;
};
