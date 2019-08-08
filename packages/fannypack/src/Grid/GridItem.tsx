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

GridItem.defaultProps = {};

function useProps(props: Partial<GridItemProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.GridItem,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}
GridItem.useProps = useProps;

export function GridItem(props: GridItemProps) {
  const { use, children, ...restProps } = props;
  const htmlProps = useProps(restProps);
  return (
    <utils.Element component={ReakitBox} use={use} htmlProps={htmlProps}>
      {children}
    </utils.Element>
  );
}
