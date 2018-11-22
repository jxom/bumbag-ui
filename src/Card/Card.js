// @flow
import React, { type Element, type Node } from 'react';
import _Card from './styled';
import CardContent from './CardContent';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardTitle from './CardTitle';

type Props = {
  a11yDescriptionId?: string,
  a11yTitleId?: string,
  children: Node,
  className?: string,
  footer?: string | Element<any>,
  headerActions?: Element<any>,
  isFullWidth?: boolean,
  title?: string | Element<any>
};

const Card = ({ a11yDescriptionId, a11yTitleId, children, footer, headerActions, title, ...props }: Props) => (
  <_Card aria-describedby={a11yDescriptionId} aria-labelledby={a11yTitleId} border="shadow" padding="medium" {...props}>
    {title && (
      <CardHeader>
        {typeof title === 'string' ? <CardTitle id={a11yTitleId}>{title}</CardTitle> : title}
        {headerActions && <div>{headerActions}</div>}
      </CardHeader>
    )}
    <CardContent id={a11yDescriptionId}>{children}</CardContent>
    {footer && <CardFooter>{footer}</CardFooter>}
  </_Card>
);

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Title = CardTitle;

Card.defaultProps = {
  a11yDescriptionId: undefined,
  a11yTitleId: undefined,
  children: undefined,
  className: undefined,
  footer: undefined,
  headerActions: undefined,
  isFullWidth: false,
  title: undefined
};

export default Card;
