import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Container } from 'reakit';
import { ActionMap, EffectMap } from 'constate/dist/ts/src';
// @ts-ignore
import _uniqueId from 'lodash/uniqueId';

import { Placement, placementPropType } from '../types';
import { LocalToastProps } from './Toast';

type Toast = LocalToastProps & {
  key?: string;
  message: string | React.ReactElement<any>;
};
type Actions = {
  remove: ({ key }: { key: Toast['key'] }) => void;
};
type Effects = {
  add: (toast: Toast) => void;
  info: (toast: Toast) => void;
  success: (toast: Toast) => void;
  danger: (toast: Toast) => void;
  warning: (toast: Toast) => void;
};
type State = {
  toasts: Array<Toast>;
  props: {};
};
export type ToastContainerProps = {
  children: (props: Actions & Effects & { toasts: Array<Toast> }) => React.ReactNode;
  placement?: Placement;
};

const initialState = { autoDismissTimeout: 5000, toasts: [] };

const add = (toast: Toast) => ({ setState, state }: any) => {
  const { placement } = state.props;
  const key = _uniqueId('toast-');
  const autoDismissTimeout =
    typeof toast.autoDismissTimeout === 'number' ? toast.autoDismissTimeout : state.autoDismissTimeout;

  setState((state: State) => ({
    toasts: [
      ...(placement.includes('bottom') ? state.toasts : []),
      { key, autoDismissTimeout, ...toast },
      ...(!placement.includes('bottom') ? state.toasts : [])
    ]
  }));

  if (autoDismissTimeout > 0) {
    setTimeout(
      () => setState((state: State) => ({ toasts: state.toasts.filter(toast => toast.key !== key) })),
      toast.autoDismissTimeout || state.autoDismissTimeout
    );
  }
};
const effects: EffectMap<State, Effects> = {
  add,
  info: (toast: Toast) => add({ ...toast, type: 'info' }),
  success: (toast: Toast) => add({ ...toast, type: 'success' }),
  danger: (toast: Toast) => add({ ...toast, type: 'danger' }),
  warning: (toast: Toast) => add({ ...toast, type: 'warning' })
};

const actions: ActionMap<State, Actions> = {
  remove: ({ key }) => state => ({
    toasts: state.toasts.filter(toast => toast.key !== key)
  })
};

export const ToastContainer: React.FunctionComponent<ToastContainerProps> = ({ children, ...props }) => (
  <Container context="toasts" initialState={{ ...initialState, props }} actions={actions} effects={effects}>
    {children}
  </Container>
);

ToastContainer.propTypes = {
  children: PropTypes.func.isRequired,
  placement: placementPropType
};
ToastContainer.defaultProps = {
  placement: 'top-end'
};

export default ToastContainer;

export const withToasts = (C: React.ComponentType<any>) => (props: any) => (
  <ToastContainer>{toast => <C toast={toast} {...props} />}</ToastContainer>
);
