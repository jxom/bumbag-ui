// @flow
import React, { type Node } from 'react';
import Card from './styled';

type Props = {
  a11yDescriptionId?: string,
  a11yTitleId?: string,
  children: Node,
  className?: string
};

const CardCard = ({ a11yDescriptionId, a11yTitleId, children, ...props }: Props) => (
  <Card aria-describedby={a11yDescriptionId} aria-labelledby={a11yTitleId} border="shadow" padding="medium" {...props}>
    {children}
  </Card>
);

CardCard.defaultProps = {
  a11yDescriptionId: undefined,
  a11yTitleId: undefined,
  children: undefined,
  className: undefined
};

export default CardCard;
