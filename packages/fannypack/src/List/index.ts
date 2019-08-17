import * as styles from './styles';
import { List as _List } from './List';
import { ListItem } from './ListItem';

export const List = Object.assign(_List, { Item: ListItem });
export { styles as listStyles };
