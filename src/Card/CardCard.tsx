import * as React from 'react';
import * as PropTypes from 'prop-types';

import { LocalPaneProps, PaneProps, panePropTypes, paneDefaultProps } from '../Pane/Pane';
import Card from './styled';

export type LocalCardCardProps = LocalPaneProps & {
  a11yDescriptionId?: string;
  a11yTitleId?: string;
  children: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
};
export type CardCardProps = LocalCardCardProps & PaneProps;

const CardCard: React.FunctionComponent<LocalCardCardProps> = ({
  a11yDescriptionId,
  a11yTitleId,
  children,
  ...props
}) => (
  <Card aria-describedby={a11yDescriptionId} aria-labelledby={a11yTitleId} padding="6u" {...props}>
    {children}
  </Card>
);

export const cardCardPropTypes = {
  a11yDescriptionId: PropTypes.string,
  a11yTitleId: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isFullWidth: PropTypes.bool,
  ...panePropTypes
};
CardCard.propTypes = cardCardPropTypes;

export const cardCardDefaultProps = {
  ...paneDefaultProps,
  a11yDescriptionId: undefined,
  a11yTitleId: undefined,
  border: 'shadow' as 'shadow',
  children: undefined,
  className: undefined,
  isFullWidth: false
};
CardCard.defaultProps = cardCardDefaultProps;

const C: React.FunctionComponent<CardCardProps> = CardCard;
export default C;
