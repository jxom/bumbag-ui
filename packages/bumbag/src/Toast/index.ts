import * as styles from './Toast.styles';
import { Toast as _Toast } from './Toast';
import { ToastManager } from './ToastManager';

export * from './Toast';
export * from './ToastManager';
export * from './ToastContext';
export const Toast = Object.assign(_Toast || {}, {
  Manager: ToastManager,
});
export { styles as ToastStyles };
