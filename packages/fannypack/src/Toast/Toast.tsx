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
  showCountdownBar?: boolean;
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
  showCountdownBar,
  title,
  type,
  ...props
}) => (
  <_Toast type={type} {...props}>
    {showCountdownBar && (
      <React.Fragment>
        <CountdownBar isHorizontal={hasHorizontalBar} type={type} isBackground />
        <CountdownBar isHorizontal={hasHorizontalBar} type={type} autoDismissTimeout={autoDismissTimeout} />
      </React.Fragment>
    )}
    <Content showCountdownBar={showCountdownBar}>
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
  showCountdownBar: PropTypes.bool,
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
  showCountdownBar: true,
  title: undefined,
  type: 'info'
};
Toast.defaultProps = toastDefaultProps;

const C: React.FunctionComponent<ToastProps> & ToastComponents = Toast;
export default C;
