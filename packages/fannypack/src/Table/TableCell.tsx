import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts/Box/Box';
// @ts-ignore
import _get from 'lodash/get';

import { TableCell as _TableCell } from './styled';

export type LocalTableCellProps = {
  children?: React.ReactNode;
};
export type TableCellProps = ReakitBoxProps & LocalTableCellProps;

export type TableCellState = {
  title: string | undefined;
};

export const tableCellPropTypes = {
  children: PropTypes.node
};

export const tableCellDefaultProps = {
  children: undefined
};

export class TableCell extends React.Component<LocalTableCellProps, TableCellState> {
  static propTypes = tableCellPropTypes;
  static defaultProps = tableCellDefaultProps;

  state = {
    title: undefined
  };

  tableCellRef = React.createRef();

  componentDidMount = () => {
    if (_get(this, 'tableCellRef.current')) {
      // @ts-ignore
      const cellIndex = this.tableCellRef.current.cellIndex;
      // @ts-ignore
      const rowElement = this.tableCellRef.current.parentNode;
      const bodyElement = rowElement.parentNode;
      const tableElement = bodyElement.parentNode;
      const tableElementChildren = _get(tableElement, 'childNodes', []);
      if (tableElementChildren.length > 0) {
        // @ts-ignore
        NodeList.prototype.find = Array.prototype.find;
        const headElement = tableElementChildren.find((child: any) => child.tagName === 'THEAD');
        const headRowElement = headElement.childNodes[0];
        const headCellElement = headRowElement.childNodes[cellIndex];
        this.setState({ title: headCellElement.innerText });
      }
    }
  };

  render = () => {
    const { children, ...props } = this.props;
    const { title } = this.state;
    return (
      <_TableCell use="td" data-content={title} {...props} elementRef={this.tableCellRef}>
        {children}
      </_TableCell>
    );
  };
}

// @ts-ignore
const C: React.FunctionComponent<TableCellProps> = TableCell;
export default C;
