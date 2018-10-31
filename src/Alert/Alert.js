// @flow
import React, { type Node } from 'react';

import type { Palette } from '../types';
import _Alert from './styled';
import _AlertTitle from './AlertTitle';

type Props = {
  className?: string,
  children: Node,
  palette?: Palette,
  title?: string
};

const Alert = ({ className, children, palette, title, ...props }: Props) => (
  <_Alert role="alert" className={className} palette={palette} {...props}>
    {title && <_AlertTitle>{title}</_AlertTitle>}
    {children}
  </_Alert>
);

Alert.defaultProps = {
  className: null,
  palette: 'default',
  title: undefined
};

export default Alert;
