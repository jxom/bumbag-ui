import * as styles from './styles';
import { SelectMenu as _SelectMenu } from './SelectMenu';
import { SelectMenuStaticItem } from './SelectMenuStaticItem';
import { SelectMenuItem } from './SelectMenuItem';

export * from './SelectMenu';
export * from './SelectMenuField';
export const SelectMenu = Object.assign(_SelectMenu, {
  StaticItem: SelectMenuStaticItem,
  Item: SelectMenuItem,
});
export { styles as SelectMenuStyles };
