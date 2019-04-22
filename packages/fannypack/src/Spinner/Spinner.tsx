import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts/Box/Box';

import { Omit } from '../types';
import { Box } from '../primitives';
import _Spinner, { Circle } from './styled';

export type LocalSpinnerProps = {
  className?: string;
  color?: string;
  size?: string;
  value?: number;
};
export type SpinnerProps = Omit<Omit<ReakitBoxProps, 'children'>, 'size'> & LocalSpinnerProps;

export const Spinner: React.FunctionComponent<LocalSpinnerProps> = ({ ...props }) => (
  <Box {...props} size={undefined}>
    <_Spinner viewBox="22 22 44 44" styledSize={props.size} value={props.value}>
      <Circle cx="44" cy="44" r="20" fill="none" strokeWidth="4" color={props.color} value={props.value} />
    </_Spinner>
  </Box>
);

export const spinnerPropTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.number
};
Spinner.propTypes = spinnerPropTypes;

export const spinnerDefaultProps = {
  className: undefined,
  color: 'primary',
  size: 'default',
  value: undefined
};
Spinner.defaultProps = spinnerDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<SpinnerProps> = Spinner;
export default C;
