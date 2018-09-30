export type ButtonType = 'default' | 'outlined' | 'link';
export type Breakpoint = 'fullHD' | 'widescreen' | 'desktop' | 'tablet' | 'mobile';

export type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColumnSpreadOffset = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 'left' | 'both' | 'right';

export type Palette = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

export type Size = 'default' | 'small' | 'medium' | 'large';

export type ThemeConfig = {
  palette?: Object,

  global?: string | Object,
  layout?: {},

  button?: {
    base?: string | Object,
    disabled?: string | Object,
    link?: string | Object,
    loading?: string | Object,
    sizes?: {
      small?: string | Object,
      medium?: string | Object,
      large?: string | Object
    }
  },
  column?: {
    base?: string | Object
  },
  columns?: {
    base?: string | Object
  },
  container: {
    base?: string | Object,
    fluidMargin?: string,
    tabletMargin?: string
  },
  spinner?: {
    base?: string | Object,
    sizes?: {
      small?: string | Object,
      medium?: string | Object,
      large?: string | Object
    }
  }
};
