import { Menu as _Menu } from './Menu';
import { MenuItem } from './MenuItem';
import { MenuOptionGroup } from './MenuOptionGroup';
import { MenuOptionItem } from './MenuOptionItem';
import { MenuOptionList } from './MenuOptionList';
import * as menuStyles from './Menu.styles';

export * from './Menu';
export * from './MenuItem';
export * from './MenuOptionGroup';
export * from './MenuOptionItem';
export * from './MenuOptionList';

export { menuStyles };

export const Menu = Object.assign(_Menu, {
  Item: MenuItem,
  OptionGroup: MenuOptionGroup,
  OptionItem: MenuOptionItem,
  OptionList: MenuOptionList,
});
