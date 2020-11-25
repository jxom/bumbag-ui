import * as styles from './Drawer.styles';
import { Drawer as _Drawer } from './Drawer';
import { DrawerDisclosure } from './DrawerDisclosure';
import { DrawerState, useDrawerState } from './DrawerState';

export * from './Drawer';
export * from './DrawerDisclosure';
export * from './DrawerState';
export const Drawer = Object.assign(_Drawer, {
  Disclosure: DrawerDisclosure,
  useState: useDrawerState,
  State: DrawerState,
});
export { styles as drawerStyles };
