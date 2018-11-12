// @flow
import React, { type Node } from 'react';

import type { Palette } from '../types';
import _Alert from './styled';
import AlertTitle from './AlertTitle';
import Text from '../Text';

type Props = {
  className?: string,
  children?: Node,
  palette?: Palette,
  title?: string
};

const Alert = ({ className, children, palette, title, ...props }: Props) => (
  <_Alert role="alert" className={className} palette={palette} {...props}>
    {title && <AlertTitle>{title}</AlertTitle>}
    {typeof children === 'string' ? <Text>{children}</Text> : children}
  </_Alert>
);

Alert.defaultProps = {
  className: undefined,
  children: undefined,
  palette: 'default',
  title: undefined
};

export default Alert;
