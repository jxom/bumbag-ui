import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { CardHeader as _CardHeader } from './styled';

export type LocalCardHeaderProps = {
  children: React.ReactNode;
  className?: string;
};
export type CardHeaderProps = LocalCardHeaderProps & ReakitBoxProps;

const CardHeader: React.FunctionComponent<LocalCardHeaderProps> = ({ children, ...props }) => (
  <_CardHeader {...props}>{children}</_CardHeader>
);

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
CardHeader.defaultProps = {
  className: undefined
};

const C: React.FunctionComponent<CardHeaderProps> = CardHeader;
export default C;
