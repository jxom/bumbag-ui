import * as styles from './styles';
import { DropdownMenu as _DropdownMenu } from './DropdownMenu';
import { DropdownMenuButton } from './DropdownMenuButton';
import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownMenuDisclosure } from './DropdownMenuDisclosure';
import { DropdownMenuDivider } from './DropdownMenuDivider';
import { DropdownMenuGroup } from './DropdownMenuGroup';
import { useDropdownMenuState } from './DropdownMenuState';

export * from './DropdownMenu';
export * from './DropdownMenuButton';
export * from './DropdownMenuItem';
export * from './DropdownMenuDisclosure';
export * from './DropdownMenuState';
export const DropdownMenu = Object.assign(_DropdownMenu, {
  Button: DropdownMenuButton,
  Item: DropdownMenuItem,
  Disclosure: DropdownMenuDisclosure,
  Divider: DropdownMenuDivider,
  Group: DropdownMenuGroup,
  useState: useDropdownMenuState
});
export { styles as DropdownMenuStyles };
