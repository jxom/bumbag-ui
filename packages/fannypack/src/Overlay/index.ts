import * as styles from './styles';
import { Overlay as _Overlay } from './Overlay';
import { OverlayDisclosure } from './OverlayDisclosure';
import { useOverlayState } from './OverlayState';

export * from './Overlay';
export * from './OverlayDisclosure';
export const Overlay = Object.assign(_Overlay, {
  Disclosure: OverlayDisclosure,
  useState: useOverlayState
});
export { styles as overlayStyles };
