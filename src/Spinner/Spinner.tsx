import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from '@jmoxey/reakit/ts/Box/Box';

import { Omit } from '../types';
import _Spinner from './styled';

export type LocalSpinnerProps = {
  className?: string;
  color?: string;
  size?: string;
};
export type SpinnerProps = Omit<ReakitBoxProps, 'children'> & LocalSpinnerProps;

export const Spinner: React.FunctionComponent<LocalSpinnerProps> = ({ className, color, size, ...props }) => (
  <_Spinner className={className} color={color} styledSize={size} {...props} />
);

Spinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
};
Spinner.defaultProps = {
  className: undefined,
  color: 'primary',
  size: 'default'
};

export default Spinner;
