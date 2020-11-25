import * as styles from './Table.styles';
import { Table as _Table } from './Table';
import { TableHead } from './TableHead';
import { TableCell } from './TableCell';
import { TableFoot } from './TableFoot';
import { TableHeadCell } from './TableHeadCell';
import { TableRow } from './TableRow';
import { TableBody } from './TableBody';

export * from './Table';
export * from './TableHead';
export * from './TableCell';
export * from './TableFoot';
export * from './TableHeadCell';
export * from './TableBody';
export * from './TableRow';
export const Table = Object.assign(_Table, {
  Head: TableHead,
  Cell: TableCell,
  Foot: TableFoot,
  Row: TableRow,
  Body: TableBody,
  HeadCell: TableHeadCell,
});
export { styles as tableStyles };
