import * as React from 'react';
import * as PropTypes from 'prop-types';

import Tag from '../../../src/Tag';
import Icon from '../../../src/Icon';
import { ComponentDetails, componentDetailsPropTypes } from '../utils/components';

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

type Props = {
  status: ComponentDetails['status'];
};

const ComponentStatusTag: React.FunctionComponent<Props> = ({ status }) => {
  return (
    <Tag palette={statusColors[status]} width="120px">
      <Icon a11yHidden icon={statusIcons[status]} marginRight="0.5em" />
      {statusTexts[status]}
    </Tag>
  );
};

ComponentStatusTag.propTypes = {
  status: componentDetailsPropTypes.status as PropTypes.Validator<ComponentDetails['status']>
};
ComponentStatusTag.defaultProps = {
  status: undefined
};

export default ComponentStatusTag;
