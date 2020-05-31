import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { TableContext } from './Table';

import * as styles from './styles';

export type LocalTableBodyProps = {};
export type TableBodyProps = BoxProps & LocalTableBodyProps;

const useProps = createHook<TableBodyProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const boxProps = Box.useProps(props);

    const tableContext = React.useContext(TableContext);

    const className = useClassName({
      style: styles.TableBody,
      styleProps: { ...tableContext, ...props, overrides: { ...tableContext.overrides, ...props.overrides } },
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Table.Body' }
);

export const TableBody = createComponent<TableBodyProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
    },
    defaultProps: {
      use: 'tbody',
    },
    themeKey: 'Table.Body',
  }
);
