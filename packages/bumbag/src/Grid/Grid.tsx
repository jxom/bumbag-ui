import { Box as ReakitBox } from 'reakit';

import { GridThemeConfig } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Grid.styles';

export type LocalGridProps = {
  autoFlow?: 'row' | 'column' | 'dense';
  gap?: string | number;
  template?: string | number;
  templateAreas?: string | number;
  templateColumns?: string | number;
  templateRows?: string | number;
  autoColumns?: string | number;
  autoRows?: string | number;
};
export type GridProps = BoxProps & LocalGridProps;

const useProps = createHook<GridProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Grid,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Grid' }
);

export const Grid = createComponent(
  (props: GridProps) => {
    const gridProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: gridProps });
  },
  {
    attach: { useProps, displayName: 'Grid' },
    themeKey: 'Grid',
  }
);
