import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { TableContext } from './Table';
import * as styles from './Table.styles';

export type LocalTableHeadProps = {};
export type TableHeadProps = BoxProps & LocalTableHeadProps;

const useProps = createHook<TableHeadProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const tableContext = React.useContext(TableContext);

    const className = useClassName({
      style: styles.TableHead,
      styleProps: { ...tableContext, ...props, overrides: { ...tableContext.overrides, ...props.overrides } },
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Table.Head' }
);

export const TableHead = createComponent<TableHeadProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Table.Head',
    },
    defaultProps: {
      use: 'thead',
    },
    themeKey: 'Table.Head',
  }
);
