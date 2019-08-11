export type Stylesheet = any; // TODO: fix

export type ThemeAttribute<R> = ((props: { theme: ThemeConfig }) => R) | R;

export type GlobalThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  fontFamily?: ThemeAttribute<string>;
  fontSize?: ThemeAttribute<number>;
};
export type FontSizeThemeConfig = {
  [key: string]: ThemeAttribute<number>;
};
export type FontWeightsThemeConfig = {
  [key: string]: ThemeAttribute<number>;
};
export type LayoutThemeConfig = {
  mobileBreakpoint?: ThemeAttribute<number>;
  tabletBreakpoint?: ThemeAttribute<number>;
  desktopBreakpoint?: ThemeAttribute<number>;
  widescreenBreakpoint?: ThemeAttribute<number>;
  fullHDBreakpoint?: ThemeAttribute<number>;
  gapFactor?: ThemeAttribute<number>;
  minorUnit?: ThemeAttribute<number>;
  majorUnit?: ThemeAttribute<number>;
};
export type PaletteThemeConfig = {
  [key: string]: ThemeAttribute<string>;
};
export type BlockThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
};
export type BlockquoteThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
};
export type BoxThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
};
export type ButtonThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  disabled?: ThemeAttribute<Stylesheet>;
  focus?: ThemeAttribute<Stylesheet>;
  ghost?: ThemeAttribute<Stylesheet>;
  hover?: ThemeAttribute<Stylesheet>;
  hoveractive?: ThemeAttribute<Stylesheet>;
  loading?: ThemeAttribute<Stylesheet>;
  link?: ThemeAttribute<Stylesheet>;
  outlined?: ThemeAttribute<Stylesheet>;
  static?: ThemeAttribute<Stylesheet>;
  sizes?: {
    small?: ThemeAttribute<Stylesheet>;
    default?: ThemeAttribute<Stylesheet>;
    medium?: ThemeAttribute<Stylesheet>;
    large?: ThemeAttribute<Stylesheet>;
  };
};
export type FlexThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
};
export type GridThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  Item?: {
    base?: ThemeAttribute<Stylesheet>;
  };
};
export type InlineThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
};
export type InlineBlockThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
};
export type InlineFlexThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
};
export type ParagraphThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
};
export type TextThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
};

export type ThemeConfig = {
  fontSizes?: FontSizeThemeConfig;
  fontWeights?: FontWeightsThemeConfig;
  global?: GlobalThemeConfig;
  layout?: LayoutThemeConfig;
  palette?: PaletteThemeConfig;

  Box?: BoxThemeConfig;
  Block?: BlockThemeConfig;
  Blockquote?: BlockquoteThemeConfig;
  Button?: ButtonThemeConfig;
  Flex?: FlexThemeConfig;
  Grid?: GridThemeConfig;
  Inline?: InlineThemeConfig;
  InlineBlock?: InlineBlockThemeConfig;
  InlineFlex?: InlineFlexThemeConfig;
  Paragraph?: ParagraphThemeConfig;
  Text?: TextThemeConfig;
};
