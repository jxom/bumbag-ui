import { Box as ReakitBox } from 'reakit';

import { GridThemeConfig } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalGridItemProps = {
  area?: string | number;
  column?: string | number;
  row?: string | number;
  columnStart?: string | number;
  columnEnd?: string | number;
  rowStart?: string | number;
  rowEnd?: string | number;
};
export type GridItemProps = BoxProps & LocalGridItemProps;

const useProps = createHook<GridItemProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.GridItem,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Grid.Item' }
);

export const GridItem = createComponent<GridItemProps>(
  (props) => {
    const gridItemProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: gridItemProps });
  },
  {
    attach: { useProps },
    themeKey: 'Grid.Item',
  }
);
