import { Box as _Box } from './Box';
import { BoxSafe } from './BoxSafe';
import * as boxStyles from './Box.styles';

export * from './Box';
export * from './BoxSafe';
export { boxStyles };

export const Box = Object.assign(_Box, {
  Safe: BoxSafe,
});
