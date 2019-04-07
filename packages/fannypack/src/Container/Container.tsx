import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { Breakpoint, breakpointPropType } from '../types';
import _Container from './styled';

export type LocalContainerProps = {
  align?: 'left' | 'right' | 'center';
  breakpoint?: Breakpoint;
  children: React.ReactNode;
  className?: string;
  isFluid?: boolean;
  isLayout?: boolean;
};
export type ContainerProps = LocalContainerProps & ReakitBoxProps;

export const Container: React.FunctionComponent<LocalContainerProps> = ({ align, children, className, ...props }) => (
  <_Container className={className} align={align} {...props}>
    {children}
  </_Container>
);

export const containerPropTypes = {
  align: PropTypes.oneOf(['left', 'right', 'center']) as PropTypes.Validator<LocalContainerProps['align']>,
  breakpoint: breakpointPropType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isFluid: PropTypes.bool,
  isLayout: PropTypes.bool
};
Container.propTypes = containerPropTypes;

export const containerDefaultProps = {
  align: 'center',
  breakpoint: undefined,
  className: undefined,
  isFluid: false,
  isLayout: false
};
Container.defaultProps = containerDefaultProps;

const C: React.FunctionComponent<ContainerProps> = Container;
export default C;
