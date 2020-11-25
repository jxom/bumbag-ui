import { cssClass } from '../styled';
import { altitude, space, theme } from '../utils';
import * as menuStyles from '../Menu/Menu.styles';

export const DropdownMenu = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const DropdownMenuPopover = (styleProps) => cssClass`
  ${altitude(styleProps.altitude)(styleProps)} !important;

  ${menuStyles.Menu(styleProps)}

  padding: ${space(2)(styleProps)}rem 0;
  position: absolute;
  min-width: 200px;
  width: unset;
`;

export const DropdownMenuItem = (styleProps) => cssClass`
  ${menuStyles.MenuItem(styleProps)}
`;

export const DropdownMenuButton = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const DropdownMenuDisclosure = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const DropdownMenuItemIcon = (styleProps) => cssClass`
  ${menuStyles.MenuItemIcon(styleProps)}
`;

export const DropdownMenuDivider = (styleProps) => cssClass`
  ${menuStyles.MenuDivider(styleProps)}
`;

export const DropdownMenuGroup = (styleProps) => cssClass`
  ${menuStyles.MenuGroup(styleProps)}
`;

export const DropdownMenuGroupTitle = (styleProps) => cssClass`
  ${menuStyles.MenuGroupTitle(styleProps)}
`;

export const DropdownMenuOptionGroup = (styleProps) => cssClass`
  ${menuStyles.MenuOptionGroup(styleProps)}
`;

export const DropdownMenuOptionItem = (styleProps) => cssClass`
  ${menuStyles.MenuOptionItem(styleProps)}
`;

export const DropdownMenuOptionItemIconWrapper = (styleProps) => cssClass`
  ${menuStyles.MenuOptionItemIconWrapper(styleProps)}
`;
