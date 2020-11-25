import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { Flexible } from '../types';
import { useClassName, createComponent, createElement, createHook, pickCSSProps, omitCSSProps } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Table.styles';

export type LocalTableProps = {
  /** Indicates if the table should have dividers. */
  hasDividers?: boolean;
  /** Indicates if the table should be striped. */
  isStriped?: boolean;
  /** Indicates if the table should be hoverable. */
  isHoverable?: boolean;
  /** Indicates if the table should be responsive. */
  isResponsive?: boolean;
  /** Indicates breakpoint at which the table should become responsive. */
  responsiveBreakpoint?: string;
  /** Sets the variant of the table. */
  variant?: Flexible<'default' | 'minimal' | 'shadowed', string>;
};
export type TableProps = BoxProps & LocalTableProps;

export const TableContext = React.createContext({ overrides: {}, tableVariant: 'default' });

const useProps = createHook<TableProps>(
  (props, { themeKey }) => {
    const { children, overrides, variant } = props;

    const tableWrapperClassName = useClassName({
      style: styles.TableWrapper,
      styleProps: props,
      themeKey,
    });
    const boxProps = Box.useProps({
      ...omitCSSProps(props),
      wrapElement: (element) => (
        <Box className={tableWrapperClassName} {...pickCSSProps(props)}>
          {element}
        </Box>
      ),
    });

    const className = useClassName({
      style: styles.Table,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    const contextValue = React.useMemo(() => ({ overrides, tableVariant: variant }), [overrides, variant]);

    return {
      ...boxProps,
      className,
      children: <TableContext.Provider value={contextValue}>{children}</TableContext.Provider>,
    };
  },
  {
    defaultProps: {
      responsiveBreakpoint: 'mobile',
      variant: 'default',
    },
    themeKey: 'Table',
  }
);

export const Table = createComponent<TableProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Table',
    },
    defaultProps: {
      use: 'table',
    },
    themeKey: 'Table',
  }
);
