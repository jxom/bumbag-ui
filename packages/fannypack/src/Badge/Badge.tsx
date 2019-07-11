import * as React from 'react';
import * as PropTypes from 'prop-types';
import { InlineFlexProps as ReakitInlineFlexProps } from 'reakit/ts';
// @ts-ignore
import _get from 'lodash/get';

import { Size, sizePropType } from '../types';
import _Badge from './styled';

export type LocalBadgeProps = {
  children?: React.ReactNode;
  isAbsolute?: boolean;
  palette?: string;
  size?: Size;
};
export type BadgeProps = ReakitInlineFlexProps & LocalBadgeProps;

export const badgePropTypes = {
  children: PropTypes.node,
  isAbsolute: PropTypes.bool,
  palette: PropTypes.string,
  size: sizePropType
};

export const badgeDefaultProps = {
  children: undefined,
  isAbsolute: false,
  palette: 'text',
  size: 'default'
};

export class Badge extends React.Component<LocalBadgeProps> {
  static propTypes = badgePropTypes;
  static defaultProps = badgeDefaultProps;

  badge = React.createRef();

  state = {
    parentElement: undefined
  };

  componentDidMount = () => {
    const parentElement = _get(this.badge, 'current.parentElement');
    parentElement.setAttribute('style', 'position:relative;');
    this.setState({ parentElement });
  };

  render = () => {
    const { children, ...props } = this.props;
    return (
      <_Badge elementRef={this.badge} {...props}>
        {children}
      </_Badge>
    );
  };
}

// @ts-ignore
const C: React.FunctionComponent<BadgeProps> = Badge;
export default C;
