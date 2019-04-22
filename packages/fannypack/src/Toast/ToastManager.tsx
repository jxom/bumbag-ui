import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import _get from 'lodash/get';

import { withTheme } from '../styled';
import { ThemeConfig } from '../types';
import Portal from '../Portal';

import { Toasts } from './styled';
import ToastContainer from './ToastContainer';
import Toast from './Toast';

export type ToastManagerProps = {
  theme?: {
    fannypack: ThemeConfig;
  };
};

export const ToastManager: React.FunctionComponent<ToastManagerProps> = ({ theme }) => {
  const ToastComponent = _get(theme, 'fannypack.Toast.component', Toast);
  const defaultProps = _get(theme, 'fannypack.Toast.defaultProps', {});
  const placement = _get(theme, 'fannypack.Toast.placement', 'top-end');
  const isStacked = _get(theme, 'fannypack.Toast.isStacked', true);
  return (
    <Portal>
      <Toasts placement={placement}>
        <ToastContainer placement={placement}>
          {state =>
            [...(isStacked ? state.toasts : [state.toasts[0]])].filter(Boolean).map(toast => (
              <ToastComponent
                key={toast.key}
                onClickClose={() => state.remove({ key: toast.key })}
                {...defaultProps}
                {...toast}
              >
                {toast.message}
              </ToastComponent>
            ))
          }
        </ToastContainer>
      </Toasts>
    </Portal>
  );
};

export const toastManagerPropTypes = {
  theme: PropTypes.object as PropTypes.Validator<ToastManagerProps['theme']>
};
ToastManager.propTypes = toastManagerPropTypes;

export const toastManagerDefaultProps = {
  theme: {
    fannypack: {}
  }
};
ToastManager.defaultProps = toastManagerDefaultProps;

export default withTheme(ToastManager);
