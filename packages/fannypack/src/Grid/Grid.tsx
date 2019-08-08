import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import * as utils from '../utils';
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
};
export type GridProps = BoxProps & LocalGridProps;

Grid.defaultProps = {};

function useProps(props: Partial<GridProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = utils.useClassName({
    style: styles.Grid,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}
Grid.useProps = useProps;

export function Grid(props: GridProps) {
  const { use, children, ...restProps } = props;
  const htmlProps = useProps(restProps);
  return (
    <utils.Element component={ReakitBox} use={use} htmlProps={htmlProps}>
      {children}
    </utils.Element>
  );
}
