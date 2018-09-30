// @flow
import React, { type Node } from 'react';
import type { Breakpoint } from '../types';
import _Container from './styled';

type Props = {
  align?: 'left' | 'right' | 'center',
  breakpoint?: Breakpoint,
  children: Node,
  className?: string,
  isFluid?: boolean
};

const Container = ({ align, children, className, ...props }: Props) => (
  <_Container className={className} align={align} {...props}>
    {children}
  </_Container>
);

Container.defaultProps = {
  align: 'center',
  breakpoint: null,
  className: null,
  isFluid: false
};

export default Container;
