import * as styles from './Text.styles';
import { Text as _Text } from './Text';
import { TextBlock } from './TextBlock';
import { TextInline } from './TextInline';

export * from './Text';
export const Text = Object.assign(_Text, {
  Block: TextBlock,
  Inline: TextInline,
});
export { styles as textStyles };
