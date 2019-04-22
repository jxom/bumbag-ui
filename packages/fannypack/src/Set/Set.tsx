import * as React from 'react';
import * as PropTypes from 'prop-types';
import { FlexProps as ReakitFlexProps } from 'reakit/ts/Flex/Flex';

import _Set from './styled';

export type LocalSetProps = {
  className?: string;
  children: React.ReactNode;
  isFilled?: boolean;
  isVertical?: boolean;
  spacing?: string;
};
export type SetProps = ReakitFlexProps & LocalSetProps;

export const Set: React.FunctionComponent<LocalSetProps> = ({ children, ...props }) => (
  <_Set {...props}>{children}</_Set>
);

export const setPropTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isFilled: PropTypes.bool,
  isVertical: PropTypes.bool,
  spacing: PropTypes.string
};
Set.propTypes = setPropTypes;

export const setDefaultProps = {
  className: undefined,
  isFilled: false,
  isVertical: false,
  spacing: 'minor-2'
};
Set.defaultProps = setDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<SetProps> = Set;
export default C;
