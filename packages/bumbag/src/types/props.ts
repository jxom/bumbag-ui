import { Flexible } from './utils';

export type BorderRadii = Flexible<'default' | '1' | '2' | '3' | '4' | '5' | '6' | '7', string>;
export type ButtonType = 'button' | 'submit' | 'reset';
export type Breakpoint = Flexible<'fullHD' | 'widescreen' | 'desktop' | 'tablet' | 'mobile', string>;
export type ColumnSpread = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColumnSpreadOffset = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 'left' | 'both' | 'right';
export type FontFamily = Flexible<'default' | 'heading' | 'mono', string>;
export type FontSize = Flexible<'100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900', string>;
export type FontWeight = Flexible<'normal' | 'semibold' | 'bold', string>;
export type LineHeight = Flexible<'none' | 'default' | '100' | '200' | '300' | '400' | '500' | '600', string>;
export type LetterSpacing = Flexible<'default' | '100' | '200' | '300' | '400' | '500' | '600' | '700', string>;
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
export type Palette = Flexible<'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning', string>;
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
export type Size = Flexible<'default' | 'small' | 'medium' | 'large', string>;

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
