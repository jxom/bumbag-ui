import * as React from 'react';
import * as PropTypes from 'prop-types';

import { LocalPaneProps, PaneProps, panePropTypes } from '../Pane/Pane';
import _Toast from './styled';

export type LocalToastProps = LocalPaneProps & {
  children: React.ReactNode;
};
export type ToastProps = PaneProps & LocalToastProps;

export const Toast: React.FunctionComponent<LocalToastProps> = ({ children, ...props }) => (
  <_Toast {...props}>{children}</_Toast>
);

Toast.propTypes = {
  children: PropTypes.node.isRequired,
  ...panePropTypes
};

const C: React.FunctionComponent<ToastProps> = Toast;
export default C;
