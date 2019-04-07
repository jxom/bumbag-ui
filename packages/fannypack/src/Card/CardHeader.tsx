import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { CardHeader as _CardHeader } from './styled';

export type LocalCardHeaderProps = {
  children: React.ReactNode;
  className?: string;
};
export type CardHeaderProps = LocalCardHeaderProps & ReakitBoxProps;

export const CardHeader: React.FunctionComponent<LocalCardHeaderProps> = ({ children, ...props }) => (
  <_CardHeader {...props}>{children}</_CardHeader>
);

export const cardHeaderPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
CardHeader.propTypes = cardHeaderPropTypes;

export const cardHeaderDefaultProps = {
  className: undefined
};
CardHeader.defaultProps = cardHeaderDefaultProps;

const C: React.FunctionComponent<CardHeaderProps> = CardHeader;
export default C;
