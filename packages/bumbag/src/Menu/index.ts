import * as styles from './Menu.styles';
import { Menu as _Menu } from './Menu';
import { MenuOptionGroup } from './MenuOptionGroup';
import { MenuOptionItem } from './MenuOptionItem';
import { MenuDivider } from './MenuDivider';
import { MenuItem } from './MenuItem';
import { MenuGroup } from './MenuGroup';

export * from './Menu';
export * from './MenuOptionGroup';
export * from './MenuOptionItem';
export * from './MenuDivider';
export * from './MenuItem';
export * from './MenuGroup';
export const Menu = Object.assign(_Menu, {
  OptionGroup: MenuOptionGroup,
  OptionItem: MenuOptionItem,
  Divider: MenuDivider,
  Item: MenuItem,
  Group: MenuGroup,
});
export { styles as menuStyles };
