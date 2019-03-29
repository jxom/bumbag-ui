import * as React from 'react';
import * as PropTypes from 'prop-types';

import { DividerProps } from '../Divider/Divider';
import { Omit } from '../types';
import { MenuDivider as _MenuDivider } from './styled';

export type LocalMenuDividerProps = {};
export type MenuDividerProps = Omit<Omit<DividerProps, 'use'>, 'ref'> & LocalMenuDividerProps;

export const MenuDivider: React.FunctionComponent<MenuDividerProps> = ({ ...props }) => (
  <_MenuDivider role="separator" {...props} />
);

MenuDivider.propTypes = {};
MenuDivider.defaultProps = {};

const C: React.FunctionComponent<MenuDividerProps> = MenuDivider;
export default C;
