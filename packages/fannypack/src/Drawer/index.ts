import * as styles from './styles';
import { Drawer as _Drawer } from './Drawer';
import { DrawerBackdrop } from './DrawerBackdrop';
import { DrawerContent } from './DrawerContent';
import { DrawerDisclosure } from './DrawerDisclosure';
import { DrawerState, useDrawerState } from './DrawerState';

export * from './Drawer';
export * from './DrawerContent';
export * from './DrawerBackdrop';
export * from './DrawerDisclosure';
export * from './DrawerState';
export const Drawer = Object.assign(_Drawer, {
  Backdrop: DrawerBackdrop,
  Content: DrawerContent,
  Disclosure: DrawerDisclosure,
  useState: useDrawerState,
  State: DrawerState
});
export { styles as drawerStyles };
