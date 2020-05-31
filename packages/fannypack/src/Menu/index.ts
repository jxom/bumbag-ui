import * as styles from './styles';
import { Menu as _Menu } from './Menu';
import { MenuDivider } from './MenuDivider';
import { MenuItem } from './MenuItem';
import { MenuGroup } from './MenuGroup';

export * from './Menu';
export * from './MenuDivider';
export * from './MenuItem';
export * from './MenuGroup';
export const Menu = Object.assign(_Menu, {
  Divider: MenuDivider,
  Item: MenuItem,
  Group: MenuGroup,
});
export { styles as menuStyles };
