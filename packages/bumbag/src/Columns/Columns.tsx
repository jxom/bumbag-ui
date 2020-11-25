import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { ColumnsThemeConfig } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Flex, FlexProps } from '../Flex';

import { ColumnsContext } from './ColumnsContext';
import * as styles from './Columns.styles';

export type LocalColumnsProps = {
  /** Indicates if the columns should be gapless. */
  isGapless?: boolean;
  /** Indicates if the columns should be placed on the one line. */
  isOneLine?: boolean;
  /** Indicates the minimum breakpoint where the columns should snap. */
  minBreakpoint?: 'tablet' | 'mobile';
  /** Sets the spacing between each column. */
  spacing?: string;
};
export type ColumnsProps = FlexProps & LocalColumnsProps;

const useProps = createHook<ColumnsProps>(
  (props, { themeKey }) => {
    const flexProps = Flex.useProps(props);

    const className = useClassName({
      style: styles.Columns,
      styleProps: props,
      themeKey,
      prevClassName: flexProps.className,
    });

    const contextValue = React.useMemo(
      () => ({
        isGapless: props.isGapless,
        minBreakpoint: props.minBreakpoint,
        spacing: props.spacing,
      }),
      [props.isGapless, props.minBreakpoint, props.spacing]
    );

    return {
      ...flexProps,
      className,
      children: <ColumnsContext.Provider value={contextValue}>{props.children}</ColumnsContext.Provider>,
    };
  },
  {
    defaultProps: {
      isGapless: false,
      isOneLine: false,
      minBreakpoint: undefined,
      spacing: 'major-2',
    },
    themeKey: 'Columns',
  }
);

export const Columns = createComponent<ColumnsProps>(
  (props) => {
    const columnsProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: columnsProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Columns',
    },
    themeKey: 'Columns',
  }
);
