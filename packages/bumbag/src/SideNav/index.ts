import * as styles from './SideNav.styles';
import { SideNav as _SideNav } from './SideNav';
import { SideNavLevel } from './SideNavLevel';
import { SideNavItem } from './SideNavItem';

export * from './SideNav';
export * from './SideNavLevel';
export * from './SideNavItem';
export const SideNav = Object.assign(_SideNav, {
  Level: SideNavLevel,
  Item: SideNavItem,
});
export { styles as sideNavStyles };
