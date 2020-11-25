import * as styles from './Link.styles';
import { Link as _Link } from './Link';
import { LinkBlock } from './LinkBlock';
import { LinkInline } from './LinkInline';

export * from './Link';
export const Link = Object.assign(_Link, {
  Block: LinkBlock,
  Inline: LinkInline,
});
export { styles as linkStyles };
