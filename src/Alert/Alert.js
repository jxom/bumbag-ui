// @flow
import React, { type Node } from 'react';

import type { Palette } from '../types';
import _Alert from './styled';

type Props = {
  className?: string,
  children: Node,
  palette?: Palette
};

const Alert = ({ className, children, palette, ...props }: Props) => (
  <_Alert role="alert" className={className} palette={palette} {...props}>
    {children}
  </_Alert>
);

Alert.defaultProps = {
  className: null,
  palette: 'default'
};

export default Alert;
