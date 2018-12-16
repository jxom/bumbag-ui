// @ts-ignore
import PropTypes from 'prop-types';

export type ButtonType = 'default' | 'outlined' | 'link';
export const buttonTypePropType = PropTypes.oneOf(['default', 'outlined', 'link']);
export type Breakpoint = 'fullHD' | 'widescreen' | 'desktop' | 'tablet' | 'mobile';
export const breakpointPropType = PropTypes.oneOf(['fullHD', 'widescreen', 'desktop', 'tablet', 'mobile']);
export type ColumnSpread = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export const columnSpreadPropType = PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
export type ColumnSpreadOffset = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 'left' | 'both' | 'right';
export const columnSpreadOffsetPropType = PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'left', 'both', 'right']);
export type Palette = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
export type Placement =
  | 'auto'
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
export const placementPropType = PropTypes.oneOf([
  'auto',
  'top',
  'right',
  'bottom',
  'left',
  'top-start',
  'right-start',
  'bottom-start',
  'left-start',
  'top-end',
  'right-end',
  'bottom-end',
  'left-end'
]);
export type Size = 'default' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge';
export const sizePropType = PropTypes.oneOf(['default', 'small', 'medium', 'large', 'xlarge', 'xxlarge', 'xxxlarge']);

export type AnimateProps = {
  /** Delay of the animation if one is specified. */
  delay?: string;
  /** Duration of the animation if one is specified. */
  duration?: string;
  /** Will the component have an expand animation when it is toggled on/off? */
  expand?: boolean | 'bottom' | 'left' | 'right' | 'top' | 'center';
  /** Will the component have a fade animation when it is toggled on/off? */
  fade?: boolean;
  /** Will the component have a slide animation when it is toggled on/off? */
  slide?: boolean | 'bottom' | 'left' | 'right' | 'top';
  /** Timing of the animation */
  timing?: string;
};
export const animatePropTypes = {
  delay: PropTypes.string,
  duration: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  fade: PropTypes.bool,
  slide: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  timing: PropTypes.string
};
export const animateDefaultProps = {
  delay: undefined,
  duration: '250ms',
  expand: undefined,
  fade: false,
  slide: false,
  timing: undefined
};

export type RestrictHideProps = {
  /** Should the component be hidden when 'esc' is pressed?  */
  hideOnEsc?: boolean;
  /** Should the component be hidden when outside is clicked?  */
  hideOnClickOutside?: boolean;
};
export const restrictHidePropTypes = {
  hideOnEsc: PropTypes.bool,
  hideOnClickOutside: PropTypes.bool
};
export const restrictDefaultProps = {
  hideOnEsc: undefined,
  hideOnClickOutside: undefined
};

export type StyledProps = {
  theme: {};
  tone?: number;
};
