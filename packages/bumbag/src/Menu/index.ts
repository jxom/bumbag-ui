import * as styles from './styles';
import { Menu as _Menu } from './Menu';
import { MenuCheckboxGroup } from './MenuCheckboxGroup';
import { MenuCheckboxItem } from './MenuCheckboxItem';
import { MenuDivider } from './MenuDivider';
import { MenuItem } from './MenuItem';
import { MenuGroup } from './MenuGroup';

export * from './Menu';
export * from './MenuCheckboxGroup';
export * from './MenuCheckboxItem';
export * from './MenuDivider';
export * from './MenuItem';
export * from './MenuGroup';
export const Menu = Object.assign(_Menu, {
  CheckboxGroup: MenuCheckboxGroup,
  CheckboxItem: MenuCheckboxItem,
  Divider: MenuDivider,
  Item: MenuItem,
  Group: MenuGroup,
});
export { styles as menuStyles };
