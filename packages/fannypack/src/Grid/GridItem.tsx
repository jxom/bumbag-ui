import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
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

function useProps(props: Partial<GridItemProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.GridItem,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const GridItem = utils.createComponent<GridItemProps>(
  props => {
    const { children, use, ...restProps } = props;
    const gridItemProps = useProps(restProps);
    return utils.createElement({ children, component: ReakitBox, use, htmlProps: gridItemProps });
  },
  { useProps }
);
