import { Box as ReakitBox } from 'reakit';

import { GridThemeConfig } from '../types';
import { useClassName, createComponent, createElement } from '../utils';
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
  overrides?: GridThemeConfig['Item'];
};
export type GridItemProps = BoxProps & LocalGridItemProps;

function useProps(props: Partial<GridItemProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.GridItem,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const GridItem = createComponent<GridItemProps>(
  props => {
    const { children, use, ...restProps } = props;
    const gridItemProps = useProps(restProps);
    return createElement({ children, component: ReakitBox, use, htmlProps: gridItemProps });
  },
  {
    attach: { useProps },
    themeKey: 'Grid.Item'
  }
);
