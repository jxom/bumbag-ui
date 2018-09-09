import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Buttons } from './styled';

export default class extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render = () => {
    const { children } = this.props;
    return <Buttons>{children}</Buttons>;
  };
}
