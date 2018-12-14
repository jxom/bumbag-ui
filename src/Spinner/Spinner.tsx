import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts/Box/Box';

import { Omit } from '../types';
import _Spinner from './styled';

export interface LocalSpinnerProps {
  className?: string;
  color?: string;
  size?: string;
}
export type SpinnerProps = Omit<ReakitBoxProps, 'children'> & LocalSpinnerProps;

export const Spinner: React.FunctionComponent<LocalSpinnerProps> = ({ className, color, size, ...props }) => (
  <_Spinner className={className} color={color} size={size} {...props} />
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
