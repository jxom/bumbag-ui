// @flow
import React from 'react';

import type { Size } from '../types';
import _Spinner from './styled';

type Props = {
  className?: string,
  color?: string,
  size?: Size
};

const Spinner = ({ className, color, size, ...props }: Props) => (
  <_Spinner className={className} color={color} size={size} {...props} />
);

Spinner.defaultProps = {
  className: null,
  color: 'primary',
  size: 'default'
};

export default Spinner;
