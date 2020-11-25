import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { TableContext } from './Table';
import * as styles from './Table.styles';

export type LocalTableRowProps = {};
export type TableRowProps = BoxProps & LocalTableRowProps;

const useProps = createHook<TableRowProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const tableContext = React.useContext(TableContext);

    const className = useClassName({
      style: styles.TableRow,
      styleProps: { ...tableContext, ...props, overrides: { ...tableContext.overrides, ...props.overrides } },
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Table.Row' }
);

export const TableRow = createComponent<TableRowProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Table.Row',
    },
    defaultProps: {
      use: 'tr',
    },
    themeKey: 'Table.Row',
  }
);
