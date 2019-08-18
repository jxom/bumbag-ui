export type Stylesheet = any; // TODO: fix

export type ThemeAttribute<R> = R | ((props: { theme: ThemeConfig }) => R);

export type BreakpointsThemeConfig = {
  mobile?: ThemeAttribute<number>;
  tablet?: ThemeAttribute<number>;
  desktop?: ThemeAttribute<number>;
  widescreen?: ThemeAttribute<number>;
  fullHD?: ThemeAttribute<number>;
};
export type GlobalThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
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
  gapFactor?: ThemeAttribute<number>;
  minorUnit?: ThemeAttribute<number>;
  majorUnit?: ThemeAttribute<number>;
};
export type PaletteThemeConfig = {
  [key: string]: string;
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
export type CodeThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
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
export type HeadingThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  h1?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  h2?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  h3?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  h4?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  h5?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  h6?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  subHeading?: {
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
export type LinkThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  hover?: ThemeAttribute<Stylesheet>;
  focus?: ThemeAttribute<Stylesheet>;
};
export type ListThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  ordered?: ThemeAttribute<Stylesheet>;
  horizontal?: ThemeAttribute<Stylesheet>;
  Item?: {
    base?: ThemeAttribute<Stylesheet>;
  };
};
export type ParagraphThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
};
export type TextThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
};

export type ThemeConfig = {
  breakpoints?: BreakpointsThemeConfig;
  fontSizes?: FontSizeThemeConfig;
  fontWeights?: FontWeightsThemeConfig;
  global?: GlobalThemeConfig;
  layout?: LayoutThemeConfig;
  palette?: PaletteThemeConfig;

  Box?: BoxThemeConfig;
  Block?: BlockThemeConfig;
  Blockquote?: BlockquoteThemeConfig;
  Button?: ButtonThemeConfig;
  Code?: CodeThemeConfig;
  Flex?: FlexThemeConfig;
  Grid?: GridThemeConfig;
  Heading?: HeadingThemeConfig;
  Inline?: InlineThemeConfig;
  InlineBlock?: InlineBlockThemeConfig;
  InlineFlex?: InlineFlexThemeConfig;
  Link?: LinkThemeConfig;
  List?: ListThemeConfig;
  Paragraph?: ParagraphThemeConfig;
  Text?: TextThemeConfig;
};
