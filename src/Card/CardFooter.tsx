import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { CardFooter as _CardFooter } from './styled';

export interface LocalCardFooterProps {
  children: React.ReactNode;
  className?: string;
}
export type CardFooterProps = LocalCardFooterProps & ReakitBoxProps;

const CardFooter: React.FunctionComponent<LocalCardFooterProps> = ({ children, ...props }) => (
  <_CardFooter {...props}>{children}</_CardFooter>
);

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
CardFooter.defaultProps = {
  className: undefined
};

const C: React.FunctionComponent<CardFooterProps> = CardFooter;
export default C;
