import * as React from 'react';
import * as PropTypes from 'prop-types';

import MenuTrigger from './MenuTrigger';
import { buttonPropTypes, buttonDefaultProps, LocalButtonProps, ButtonProps } from '../Button/Button';
import { Omit } from '../types';
import { MenuButton as _MenuButton } from './styled';

export type LocalMenuButtonProps = LocalButtonProps & {
  onClick?(e: React.MouseEvent<any>): void;
};
export type MenuButtonProps = Omit<ButtonProps, 'use'> & LocalMenuButtonProps;

export const menuButtonPropTypes = {
  ...buttonPropTypes,
  onClick: PropTypes.func
};
export const menuButtonDefaultProps = {
  ...buttonDefaultProps
};

export const MenuButton: React.FunctionComponent<LocalMenuButtonProps> = ({ ...props }) => (
  <_MenuButton use={MenuTrigger} {...props} />
);

// @ts-ignore
const C: React.FunctionComponent<MenuButtonProps> = MenuButton;
export default C;
