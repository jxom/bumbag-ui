import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { ColumnsThemeConfig, ColumnSpread, ColumnSpreadOffset } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { ColumnsContext } from './ColumnsContext';
import * as styles from './Columns.styles';

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
};
export type ColumnProps = BoxProps & LocalColumnProps;

const useProps = createHook<ColumnProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);
    const columnsContext = React.useContext(ColumnsContext);

    const className = useClassName({
      style: styles.Column,
      styleProps: { ...props, ...columnsContext },
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  {
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
      spreadFullHDOffset: undefined,
    },
    themeKey: 'Columns.Column',
  }
);

export const Column = createComponent<ColumnProps>(
  (props) => {
    const columnProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: columnProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Columns.Column',
    },
    themeKey: 'Columns.Column',
  }
);
