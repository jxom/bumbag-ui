import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import _get from 'lodash/get';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { TableContext } from './Table';
import * as styles from './styles';

export type LocalTableCellProps = {};
export type TableCellProps = BoxProps & LocalTableCellProps;

const useProps = createHook<TableCellProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const tableCellRef = React.useRef();
    const boxProps = Box.useProps({ ...props, elementRef: tableCellRef });

    const tableContext = React.useContext(TableContext);

    const [title, setTitle] = React.useState('');

    const className = useClassName({
      style: styles.TableCell,
      styleProps: { ...tableContext, ...props, overrides: { ...tableContext.overrides, ...props.overrides } },
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    React.useEffect(() => {
      if (tableCellRef && tableCellRef.current) {
        // @ts-ignore
        const cellIndex = tableCellRef.current.cellIndex;
        // @ts-ignore
        const rowElement = tableCellRef.current.parentNode;
        const bodyElement = rowElement.parentNode;
        const tableElement = bodyElement.parentNode;
        const tableElementChildren = _get(tableElement, 'childNodes', []);
        if (tableElementChildren.length > 0) {
          // @ts-ignore
          NodeList.prototype.find = Array.prototype.find;
          const headElement = tableElementChildren.find((child: any) => child.tagName === 'THEAD');
          if (headElement && headElement.childNodes) {
            const headRowElement = _get(headElement, 'childNodes[0]');
            const headCellElement = _get(headRowElement, `childNodes[${cellIndex}]`);
            setTitle(_get(headCellElement, 'innerText'));
          }
        }
      }
    }, []);

    return { ...boxProps, className, 'data-content': title };
  },
  { themeKey: 'Table.Cell' }
);

export const TableCell = createComponent<TableCellProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    defaultProps: {
      use: 'td'
    },
    themeKey: 'Table.Cell'
  }
);
