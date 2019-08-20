import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { ColumnsThemeConfig, ColumnSpread, ColumnSpreadOffset } from '../types';
import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import { ColumnsContext } from './ColumnsContext';
import * as styles from './styles';

export type LocalColumnProps = {
  spread?: ColumnSpread;
  spreadMobile?: ColumnSpread;
  spreadTablet?: ColumnSpread;
  spreadDesktop?: ColumnSpread;
  spreadWidescreen?: ColumnSpread;
  spreadFullHD?: ColumnSpread;
  spreadOffset?: ColumnSpreadOffset;
  spreadMobileOffset?: ColumnSpreadOffset;
  spreadTabletOffset?: ColumnSpreadOffset;
  spreadDesktopOffset?: ColumnSpreadOffset;
  spreadWidescreenOffset?: ColumnSpreadOffset;
  spreadFullHDOffset?: ColumnSpreadOffset;
  overrides?: ColumnsThemeConfig['Column'];
};
export type ColumnProps = BoxProps & LocalColumnProps;

function useProps(props: Partial<ColumnProps> = {}) {
  const boxProps = Box.useProps(props);
  const columnsContext = React.useContext(ColumnsContext);

  const className = useClassName({
    style: styles.Column,
    styleProps: { ...props, ...columnsContext },
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Column = createComponent<ColumnProps>(
  props => {
    const columnProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: columnProps });
  },
  {
    attach: {
      defaultProps: {
        spread: undefined,
        spreadMobile: undefined,
        spreadTablet: undefined,
        spreadDesktop: undefined,
        spreadWidescreen: undefined,
        spreadFullHD: undefined,
        spreadOffset: undefined,
        spreadMobileOffset: undefined,
        spreadTabletOffset: undefined,
        spreadDesktopOffset: undefined,
        spreadWidescreenOffset: undefined,
        spreadFullHDOffset: undefined
      },
      useProps
    },
    themeKey: 'Columns.Column'
  }
);
