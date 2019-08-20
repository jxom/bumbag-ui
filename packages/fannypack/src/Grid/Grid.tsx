import { Box as ReakitBox } from 'reakit';

import { GridThemeConfig } from '../types';
import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalGridProps = {
  autoFlow?: 'row' | 'column' | 'dense';
  gap?: string | number;
  template?: string | number;
  templateAreas?: string | number;
  templateColumns?: string | number;
  templateRows?: string | number;
  autoColumns?: string | number;
  autoRows?: string | number;
  overrides?: GridThemeConfig;
};
export type GridProps = BoxProps & LocalGridProps;

function useProps(props: Partial<GridProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.Grid,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Grid = createComponent(
  (props: GridProps) => {
    const gridProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: gridProps });
  },
  {
    attach: { useProps },
    themeKey: 'Grid'
  }
);
