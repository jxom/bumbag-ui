import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import _omit from 'lodash/omit';

import { Box } from '../primitives';
import { ButtonProps, buttonPropTypes } from '../Button/Button';
import { LocalPaneProps, PaneProps, panePropTypes, paneDefaultProps } from '../Pane/Pane';
import { Omit } from '../types';

import ToastClose, { ToastCloseProps } from './ToastClose';
import ToastContainer, { ToastContainerProps } from './ToastContainer';
import ToastIcon from './ToastIcon';
import ToastTitle from './ToastTitle';
import _Toast, { CountdownBar, Content } from './styled';

export type LocalToastProps = LocalPaneProps & {
  autoDismissTimeout?: number;
  children?: React.ReactNode;
  closeButtonProps?: Omit<ButtonProps, 'children'>;
  hasHorizontalBar?: boolean;
  hasIcon?: boolean;
  hasTint?: boolean;
  hideCloseButton?: boolean;
  onClickClose?: ToastCloseProps['onClickClose'];
  title?: string;
  type?: string;
};
export type ToastProps = PaneProps & LocalToastProps;
export type ToastComponents = {
  Container: React.FunctionComponent<ToastContainerProps>;
};

export const Toast: React.FunctionComponent<LocalToastProps> & ToastComponents = ({
  autoDismissTimeout,
  children,
  closeButtonProps,
  hasHorizontalBar,
  hasIcon,
  hideCloseButton,
  onClickClose,
  title,
  type,
  ...props
}) => (
  <_Toast type={type} {...props}>
    <CountdownBar isHorizontal={hasHorizontalBar} isBackground type={type} />
    <CountdownBar autoDismissTimeout={autoDismissTimeout} isHorizontal={hasHorizontalBar} type={type} />
    <Content>
      {hasIcon && type && <ToastIcon type={type} size={children ? '300' : undefined} />}
      <Box>
        {title && <ToastTitle marginBottom={children ? 'minor-2' : undefined}>{title}</ToastTitle>}
        {children}
      </Box>
    </Content>
    {!hideCloseButton && (
      <ToastClose isAbsolute={Boolean(children)} onClickClose={onClickClose} {...closeButtonProps} />
    )}
  </_Toast>
);

Toast.Container = ToastContainer;

export const toastPropTypes = {
  autoDismissTimeout: PropTypes.number,
  children: PropTypes.node,
  closeButtonProps: PropTypes.shape(_omit(buttonPropTypes, 'children')),
  hasHorizontalBar: PropTypes.bool,
  hasIcon: PropTypes.bool,
  hasTint: PropTypes.bool,
  hideCloseButton: PropTypes.bool,
  onClickClose: PropTypes.func,
  type: PropTypes.string,
  title: PropTypes.string,
  ...panePropTypes
};
Toast.propTypes = toastPropTypes;

export const toastDefaultProps = {
  ...paneDefaultProps,
  autoDismissTimeout: undefined,
  children: undefined,
  closeButtonProps: {},
  elevation: '300',
  hasHorizontalBar: false,
  hasIcon: true,
  hasTint: false,
  hideCloseButton: false,
  onClickClose: undefined,
  title: undefined,
  type: 'info'
};
Toast.defaultProps = toastDefaultProps;

const C: React.FunctionComponent<ToastProps> & ToastComponents = Toast;
export default C;
