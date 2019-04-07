import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { CardFooter as _CardFooter } from './styled';

export type LocalCardFooterProps = {
  children: React.ReactNode;
  className?: string;
};
export type CardFooterProps = LocalCardFooterProps & ReakitBoxProps;

export const CardFooter: React.FunctionComponent<LocalCardFooterProps> = ({ children, ...props }) => (
  <_CardFooter {...props}>{children}</_CardFooter>
);

export const cardFooterPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
CardFooter.propTypes = cardFooterPropTypes;

export const cardFooterDefaultProps = {
  className: undefined
};
CardFooter.defaultProps = cardFooterDefaultProps;

const C: React.FunctionComponent<CardFooterProps> = CardFooter;
export default C;
