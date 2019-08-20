import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { ColumnsThemeConfig } from '../types';
import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import { ColumnsContext } from './ColumnsContext';
import * as styles from './styles';

export type LocalColumnsProps = {
  isGapless?: boolean;
  isOneLine?: boolean;
  minBreakpoint?: 'tablet' | 'mobile';
  overrides?: ColumnsThemeConfig;
};
export type ColumnsProps = BoxProps & LocalColumnsProps;

function useProps(props: Partial<ColumnsProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.Columns,
    styleProps: props,
    prevClassName: boxProps.className
  });

  const contextValue = React.useMemo(
    () => ({
      isGapless: props.isGapless,
      minBreakpoint: props.minBreakpoint
    }),
    [props.isGapless, props.minBreakpoint]
  );

  return {
    ...boxProps,
    className,
    children: <ColumnsContext.Provider value={contextValue}>{props.children}</ColumnsContext.Provider>
  };
}

export const Columns = createComponent<ColumnsProps>(
  props => {
    const columnsProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: columnsProps });
  },
  {
    attach: {
      defaultProps: {
        isGapless: false,
        isOneLine: false,
        minBreakpoint: undefined
      },
      useProps
    },
    themeKey: 'Columns'
  }
);
