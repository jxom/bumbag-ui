import * as styles from './Overlay.styles';
import { Overlay as _Overlay } from './Overlay';
import { OverlayDisclosure } from './OverlayDisclosure';
import { useOverlayState, OverlayState } from './OverlayState';

export * from './Overlay';
export * from './OverlayDisclosure';
export const Overlay = Object.assign(_Overlay, {
  Disclosure: OverlayDisclosure,
  useState: useOverlayState,
  State: OverlayState,
});
export { styles as overlayStyles };
