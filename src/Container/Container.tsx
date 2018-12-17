import * as React from 'react';
import { BoxProps as ReakitBoxProps } from '@jmoxey/reakit/ts';

import { Breakpoint } from '../types';
import _Container from './styled';

export type LocalContainerProps = {
  align?: 'left' | 'right' | 'center';
  use?: any;
  breakpoint?: Breakpoint;
  children: React.ReactNode;
  className?: string;
  isFluid?: boolean;
};
export type ContainerProps = LocalContainerProps & ReakitBoxProps;

export const Container: React.FunctionComponent<LocalContainerProps> = ({ align, children, className, ...props }) => (
  <_Container className={className} align={align} {...props}>
    {children}
  </_Container>
);

Container.defaultProps = {
  align: 'center',
  use: undefined,
  breakpoint: undefined,
  className: undefined,
  isFluid: false
};

const C: React.FunctionComponent<ContainerProps> = Container;
export default C;
