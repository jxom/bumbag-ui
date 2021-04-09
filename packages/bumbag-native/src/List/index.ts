import { ListFlat } from './ListFlat';
import { ListSection } from './ListSection';
import { ListVirtualized } from './ListVirtualized';
import * as listStyles from './List.styles';

export * from './ListFlat';
export * from './ListSection';
export * from './ListVirtualized';
export { listStyles };

export const List = Object.assign(ListFlat, {
  Flat: ListFlat,
  Section: ListSection,
  Virtualized: ListVirtualized
});
