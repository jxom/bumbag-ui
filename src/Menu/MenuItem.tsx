import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ButtonProps as ReakitButtonProps } from 'reakit/ts/Button/Button';

import { Omit } from '../types';
import { IconProps, iconPropTypes } from '../Icon/Icon';

import { withMenuContext, MenuContextState } from './MenuContext';
import { MenuItem as _MenuItem, MenuIcon } from './styled';

export type LocalMenuItemProps = {
  children: React.ReactNode;
  context?: MenuContextState;
  icon?: IconProps['icon'];
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?(): void;
};
export type MenuItemProps = Omit<Omit<ReakitButtonProps, 'as'>, 'elementRef'> & LocalMenuItemProps;

export class MenuItem extends React.Component<LocalMenuItemProps> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    icon: iconPropTypes['icon'],
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func
  };
  static defaultProps = {
    icon: undefined,
    isActive: false,
    isDisabled: false,
    onClick: undefined
  };

  handleClick = () => {
    const { context, onClick } = this.props;
    onClick && onClick();
    context && context.hide();
  };

  render = () => {
    const { children, icon, isDisabled, ...props } = this.props;
    return (
      <_MenuItem role="menuitem" disabled={isDisabled} {...props} onClick={this.handleClick}>
        {icon && (
          // @ts-ignore
          <MenuIcon a11yHidden icon={icon} />
        )}
        {children}
      </_MenuItem>
    );
  };
}

// @ts-ignore
const C: React.FunctionComponent<MenuItemProps> = withMenuContext(MenuItem);
export default C;
