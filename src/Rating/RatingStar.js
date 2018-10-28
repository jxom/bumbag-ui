// @flow
import React from 'react';

import type { Size } from '../types';
import { RatingStar as _RatingStar } from './styled';

type Props = {
  size?: Size,
  active?: boolean
};

const RatingStar = ({ size, active, ...props }: Props) => (
  <_RatingStar size={size} active={active} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </_RatingStar>
);

RatingStar.defaultProps = {
  size: 'default',
  index: 0,
  active: false
};

export default RatingStar;
