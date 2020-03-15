export type ButtonType = 'button' | 'submit' | 'reset';
export type Breakpoint = 'fullHD' | 'widescreen' | 'desktop' | 'tablet' | 'mobile';
export type ColumnSpread = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColumnSpreadOffset = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 'left' | 'both' | 'right';
export type LayoutBreakpoint =
  | 'fullHD'
  | 'min-fullHD'
  | 'max-fullHD'
  | 'widescreen'
  | 'min-widescreen'
  | 'max-widescreen'
  | 'desktop'
  | 'min-desktop'
  | 'max-desktop'
  | 'tablet'
  | 'min-tablet'
  | 'max-tablet'
  | 'mobile'
  | 'min-mobile'
  | 'max-mobile';
export type Palette = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | string;
export type Placement =
  | 'center'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'top-start'
  | 'right-start'
  | 'bottom-start'
  | 'left-start'
  | 'top-end'
  | 'right-end'
  | 'bottom-end'
  | 'left-end';
export type Size = 'default' | 'small' | 'medium' | 'large';

export type AnimateProps = {
  /** Delay of the animation (in s/ms). */
  delay?: string;
  /** Duration of the animation (in s/ms). */
  duration?: string;
  /** Will the component have an expand animation when it is toggled on/off? */
  expand?: boolean | 'bottom' | 'left' | 'right' | 'top' | 'center';
  /** Will the component have a fade animation when it is toggled on/off? */
  fade?: boolean;
  /** Will the component have a slide animation when it is toggled on/off? */
  slide?: boolean | 'bottom' | 'left' | 'right' | 'top';
  /** Timing function of the animation */
  timingFunction?: string;
};
