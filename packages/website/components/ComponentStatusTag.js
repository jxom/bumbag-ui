import React from 'react';
import { Tag, Icon } from 'fannypack';

const statusColors = {
  complete: 'success',
  pending: 'primary'
};
const statusIcons = {
  complete: 'success',
  pending: 'solid-hand-paper'
};
const statusTexts = {
  complete: 'Complete',
  pending: 'Up for grabs'
};

const ComponentStatusTag = ({ status }) => {
  return (
    <Tag palette={statusColors[status]} width="120px">
      <Icon a11yHidden icon={statusIcons[status]} marginRight="0.5em" />
      {statusTexts[status]}
    </Tag>
  );
};

export default ComponentStatusTag;
