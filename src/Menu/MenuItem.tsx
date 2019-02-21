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
  hideOnClick?: boolean;
  icon?: IconProps['icon'];
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?(): void;
};
export type MenuItemProps = Omit<ReakitButtonProps, 'elementRef'> & LocalMenuItemProps;

export const menuItemPropTypes = {
  children: PropTypes.node.isRequired,
  hideOnClick: PropTypes.bool,
  icon: iconPropTypes['icon'],
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
};
export const menuItemDefaultProps = {
  hideOnClick: true,
  icon: undefined,
  isActive: false,
  isDisabled: false,
  onClick: undefined
};

export class MenuItem extends React.Component<LocalMenuItemProps> {
  static propTypes = menuItemPropTypes;
  static defaultProps = menuItemDefaultProps;

  handleClick = () => {
    const { context, hideOnClick, onClick } = this.props;
    onClick && onClick();
    hideOnClick && context && context.hide();
  };

  render = () => {
    const { children, icon, isDisabled, ...props } = this.props;
    return (
      <_MenuItem role="menuitem" disabled={isDisabled} {...props} onClick={this.handleClick} type="button">
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
