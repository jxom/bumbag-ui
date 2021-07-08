import { Menu as _Menu } from './Menu';
import { MenuItem } from './MenuItem';
import * as menuStyles from './Menu.styles';

export * from './Menu';
export * from './MenuItem';

export { menuStyles };

export const Menu = Object.assign(_Menu, {
  Item: MenuItem,
});
