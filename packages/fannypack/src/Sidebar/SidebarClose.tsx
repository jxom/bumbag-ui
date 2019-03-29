import * as React from 'react';
import * as PropTypes from 'prop-types';

import { ButtonProps } from '../Button/Button';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { Omit } from '../types';
import { SidebarClose as _SidebarClose } from './styled';

export type LocalSidebarCloseProps = {
  sidebarAlign?: string;
  sidebarWidth?: string;
};
export type SidebarCloseProps = Omit<ButtonProps, 'children'> & LocalSidebarCloseProps;

export const SidebarClose: React.FunctionComponent<LocalSidebarCloseProps> = props => (
  <_SidebarClose kind="link" {...props}>
    <VisuallyHidden>Close</VisuallyHidden>
    <Icon a11yHidden icon="times" />
  </_SidebarClose>
);

SidebarClose.propTypes = {};

SidebarClose.defaultProps = {};

const C: React.FunctionComponent<SidebarCloseProps> = SidebarClose;
export default C;
