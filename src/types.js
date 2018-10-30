export type ButtonType = 'default' | 'outlined' | 'link';
export type Breakpoint = 'fullHD' | 'widescreen' | 'desktop' | 'tablet' | 'mobile';

export type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColumnSpreadOffset = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 'left' | 'both' | 'right';

export type Palette = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

export type Size = 'default' | 'small' | 'medium' | 'large';

/* ====== START: THEMES ====== */
export type Stylesheet = string | Object;
export type AlertThemeConfig = {
  base?: Stylesheet
};
export type BlockquoteThemeConfig = {
  base?: Stylesheet
};
export type ButtonThemeConfig = {
  base?: Stylesheet,
  disabled?: Stylesheet,
  link?: Stylesheet,
  loading?: Stylesheet,
  sizes?: {
    small?: Stylesheet,
    medium?: Stylesheet,
    large?: Stylesheet
  }
};
export type CheckboxThemeConfig = {
  base: Stylesheet,
  icon: {
    base: Stylesheet,
    checked: Stylesheet,
    disabled: Stylesheet,
    focus: Stylesheet,
    tick: Stylesheet
  }
};
export type CodeThemeConfig = {
  base?: Stylesheet,
  block?: Stylesheet,
  inline?: Stylesheet
};
export type ColumnThemeConfig = {
  base?: Stylesheet
};
export type ColumnsThemeConfig = {
  base?: Stylesheet
};
export type ContainerThemeConfig = {
  base?: Stylesheet,
  fluidMargin?: string,
  tabletMargin?: string
};
export type DividerThemeConfig = {
  base?: Stylesheet,
  content?: Stylesheet,
  vertical?: Stylesheet
};
export type FieldThemeConfig = {
  base?: Stylesheet,
  label?: Stylesheet,
  description?: Stylesheet,
  hint?: Stylesheet,
  optional?: Stylesheet,
  validation?: Stylesheet
};
export type FontSizeThemeConfig = {
  small: number,
  medium: number,
  large: number,
  xlarge: number,
  xxlarge: number,
  xxxlarge: number
};
export type GlobalThemeConfig = {
  base?: Stylesheet
};
export type GroupThemeConfig = {
  base?: Stylesheet
};
export type HeadingThemeConfig = {
  base?: Stylesheet,
  h1?: Stylesheet,
  h2?: Stylesheet,
  h3?: Stylesheet,
  h4?: Stylesheet,
  h5?: Stylesheet,
  h6?: Stylesheet,
  subHeading?: Stylesheet
};
export type ImageThemeConfig = {
  base?: Stylesheet,
  fixed?: Stylesheet,
  fit?: {
    base?: Stylesheet,
    cover?: Stylesheet,
    contain?: Stylesheet
  }
};
export type InputThemeConfig = {
  base?: Stylesheet,
  disabled?: Stylesheet,
  focus?: Stylesheet,
  placeholder?: Stylesheet,
  sizes?: {
    small?: Stylesheet,
    medium?: Stylesheet,
    large?: Stylesheet
  }
};
export type LabelThemeConfig = {
  base?: Stylesheet
};
export type LayoutThemeConfig = {
  mobileBreakpoint: number,
  tabletBreakpoint: number,
  desktopBreakpoint: number,
  widescreenBreakpoint: number,
  fullHDBreakpoint: number,
  gapFactor: number,
  spacing: {
    xxsmall: number,
    xsmall: number,
    small: number,
    medium: number,
    large: number,
    xlarge: number,
    xxlarge: number
  }
};
export type LinkThemeConfig = {
  base?: Stylesheet
};
export type ListThemeConfig = {
  base?: Stylesheet,
  item?: {
    base?: Stylesheet
  }
};
export type NavigationThemeConfig = {
  base?: Stylesheet
};
export type ParagraphThemeConfig = {
  base?: Stylesheet
};
export type RadioThemeConfig = {
  base?: Stylesheet,
  icon?: {
    base: Stylesheet,
    checked: Stylesheet,
    disabled: Stylesheet,
    focus: Stylesheet,
    tick: Stylesheet
  }
};
export type RadioGroupThemeConfig = {
  base?: Stylesheet,
  horizontal?: Stylesheet
};
export type RatingThemeConfig = {
  base?: Stylesheet,
  Star?: {
    base?: Stylesheet,
    color?: string,
    sizes?: {
      small?: Stylesheet,
      medium?: Stylesheet,
      large?: Stylesheet
    }
  }
};
export type SelectThemeConfig = {
  base?: Stylesheet,
  disabled?: Stylesheet,
  focus?: Stylesheet,
  sizes?: {
    small?: Stylesheet,
    medium?: Stylesheet,
    large?: Stylesheet
  }
};
export type SpinnerThemeConfig = {
  base?: Stylesheet,
  sizes?: {
    small?: Stylesheet,
    medium?: Stylesheet,
    large?: Stylesheet
  }
};
export type TableThemeConfig = {
  base?: Stylesheet,
  borderColor?: string,
  hover: {
    backgroundColor?: string
  },
  striped: {
    backgroundColor?: string
  },
  Body?: {
    base?: Stylesheet
  },
  Caption?: {
    base?: Stylesheet
  },
  Cell?: {
    base?: Stylesheet
  },
  Foot?: {
    base?: Stylesheet
  },
  Head?: {
    base?: Stylesheet
  },
  HeadCell?: {
    base?: Stylesheet
  },
  Row?: {
    base?: Stylesheet
  }
};
export type TextThemeConfig = {
  base?: Stylesheet
};
export type ThemeConfig = {
  palette?: Object,

  global?: GlobalThemeConfig,
  layout?: LayoutThemeConfig,
  fontSizes?: FontSizeThemeConfig,

  Alert?: AlertThemeConfig,
  Blockquote?: BlockquoteThemeConfig,
  Button?: ButtonThemeConfig,
  Checkbox?: CheckboxThemeConfig,
  Code?: CodeThemeConfig,
  Column?: ColumnThemeConfig,
  Columns?: ColumnsThemeConfig,
  Container?: ContainerThemeConfig,
  Divider?: DividerThemeConfig,
  Field?: FieldThemeConfig,
  Group?: GroupThemeConfig,
  Heading?: HeadingThemeConfig,
  Image?: ImageThemeConfig,
  Input?: InputThemeConfig,
  Label?: LabelThemeConfig,
  Link?: LinkThemeConfig,
  List?: ListThemeConfig,
  Navigation?: NavigationThemeConfig,
  Paragraph?: ParagraphThemeConfig,
  Radio?: RadioThemeConfig,
  RadioGroup?: RadioGroupThemeConfig,
  Rating?: RatingThemeConfig,
  Select?: SelectThemeConfig,
  Spinner?: SpinnerThemeConfig,
  Table?: TableThemeConfig,
  Text?: TextThemeConfig
};
/* ====== END: THEMES ====== */
