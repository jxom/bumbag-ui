import * as React from 'react';
import * as PropTypes from 'prop-types';
import { HeadingProps as ReakitHeadingProps } from 'reakit/ts/Heading/Heading';

import { CardTitle as _CardTitle } from './styled';

export type LocalCardTitleProps = {
  children: React.ReactNode;
  className?: string;
};
export type CardTitleProps = LocalCardTitleProps & ReakitHeadingProps;

const CardTitle: React.FunctionComponent<LocalCardTitleProps> = ({ children, ...props }) => (
  <_CardTitle use="h5" isSubHeading {...props}>
    {children}
  </_CardTitle>
);

CardTitle.propTypes = {
  children: PropTypes.node.isRequired
};

CardTitle.defaultProps = {
  className: undefined
};

const C: React.FunctionComponent<CardTitleProps> = CardTitle;
export default C;
