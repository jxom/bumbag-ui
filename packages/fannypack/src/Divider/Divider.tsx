import * as React from 'react';
import * as PropTypes from 'prop-types';
import { DividerProps as ReakitDividerProps } from 'reakit/ts';

import _Divider from './styled';

export type LocalDividerProps = {
  children?: React.ReactNode;
  className?: string;
  content?: string;
  isVertical?: boolean;
};
export type DividerProps = LocalDividerProps & ReakitDividerProps;

export const Divider: React.FunctionComponent<LocalDividerProps> = ({
  children,
  className,
  content,
  isVertical,
  ...props
}) => (
  <_Divider className={className} content={content} vertical={isVertical} {...props}>
    {children}
  </_Divider>
);

export const dividerPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  content: PropTypes.string,
  isVertical: PropTypes.bool
};
Divider.propTypes = dividerPropTypes;

export const dividerDefaultProps = {
  children: null,
  className: undefined,
  content: undefined,
  isVertical: false
};
Divider.defaultProps = dividerDefaultProps;

const C: React.FunctionComponent<DividerProps> = Divider;
export default C;
