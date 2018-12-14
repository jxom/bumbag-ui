import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { CardContent as _CardContent } from './styled';

export interface LocalCardContentProps {
  children: React.ReactNode;
  className?: string;
}
export type CardContentProps = LocalCardContentProps & ReakitBoxProps;

const CardContent: React.FunctionComponent<LocalCardContentProps> = ({ children, ...props }) => (
  <_CardContent {...props}>{children}</_CardContent>
);

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
CardContent.defaultProps = {
  className: undefined
};

const C: React.FunctionComponent<CardContentProps> = CardContent;
export default C;
