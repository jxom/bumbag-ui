import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { InlineFlexProps as ReakitInlineFlexProps } from 'reakit/ts/InlineFlex/InlineFlex';

import _Set from './styled';

export interface LocalSetProps {
  className?: string;
  children: React.ReactNode;
  isVertical?: boolean;
  spacing?: string;
}
export type SetProps = ReakitInlineFlexProps & LocalSetProps;

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
  spacing: 'xxsmall'
};

// @ts-ignore
const C: React.FunctionComponent<SetProps> = Set;
export default C;
