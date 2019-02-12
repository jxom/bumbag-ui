import * as React from 'react';
import * as PropTypes from 'prop-types';
import { FlexProps as ReakitFlexProps } from 'reakit/ts/Flex/Flex';

import _Set from './styled';

export type LocalSetProps = {
  className?: string;
  children: React.ReactNode;
  isVertical?: boolean;
  spacing?: string;
};
export type SetProps = ReakitFlexProps & LocalSetProps;

export const Set: React.FunctionComponent<LocalSetProps> = ({ children, ...props }) => (
  <_Set {...props}>{children}</_Set>
);

Set.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isVertical: PropTypes.bool,
  spacing: PropTypes.string
};
Set.defaultProps = {
  className: undefined,
  isVertical: false,
  spacing: 'minor-2'
};

// @ts-ignore
const C: React.FunctionComponent<SetProps> = Set;
export default C;
