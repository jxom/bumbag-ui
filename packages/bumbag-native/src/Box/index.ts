import { Box as _Box } from './Box';
import { BoxSafe } from './BoxSafe';
import { BoxScroll } from './BoxScroll';
import { BoxTouchable } from './BoxTouchable';
import { BoxTouchableWithoutFeedback } from './BoxTouchableWithoutFeedback';
import { BoxKeyboardAvoiding } from './BoxKeyboardAvoiding';
import * as boxStyles from './Box.styles';

export * from './Box';
export * from './BoxSafe';
export * from './BoxScroll';
export * from './BoxTouchable';
export * from './BoxTouchableWithoutFeedback';
export * from './BoxKeyboardAvoiding';
export { boxStyles };

export const Box = Object.assign(_Box, {
  KeyboardAvoiding: BoxKeyboardAvoiding,
  Safe: BoxSafe,
  Scroll: BoxScroll,
  Touchable: BoxTouchable,
  TouchableWithoutFeedback: BoxTouchableWithoutFeedback,
});
