import * as React from 'react';
import * as PropTypes from 'prop-types';
import { HeadingProps as ReakitHeadingProps } from 'reakit/ts/Heading/Heading';

import { CardTitle as _CardTitle } from './styled';

export type LocalCardTitleProps = {
  children: React.ReactNode;
  className?: string;
};
export type CardTitleProps = LocalCardTitleProps & ReakitHeadingProps;

export const CardTitle: React.FunctionComponent<LocalCardTitleProps> = ({ children, ...props }) => (
  <_CardTitle {...props}>{children}</_CardTitle>
);

export const cardTitlePropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
CardTitle.propTypes = cardTitlePropTypes;

export const cardTitleDefaultProps = {
  className: undefined
};
CardTitle.defaultProps = cardTitleDefaultProps;

const C: React.FunctionComponent<CardTitleProps> = CardTitle;
export default C;
