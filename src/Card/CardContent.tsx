import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { CardContent as _CardContent } from './styled';

export type LocalCardContentProps = {
  children: React.ReactNode;
  className?: string;
};
export type CardContentProps = LocalCardContentProps & ReakitBoxProps;

export const CardContent: React.FunctionComponent<LocalCardContentProps> = ({ children, ...props }) => (
  <_CardContent {...props}>{children}</_CardContent>
);

export const cardContentPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
CardContent.propTypes = cardContentPropTypes;

export const cardContentDefaultProps = {
  className: undefined
};
CardContent.defaultProps = cardContentDefaultProps;

const C: React.FunctionComponent<CardContentProps> = CardContent;
export default C;
