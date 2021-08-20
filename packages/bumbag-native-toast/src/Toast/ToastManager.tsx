import * as React from 'react';
import { useSharedValue } from 'react-native-reanimated';

import { ToastContext } from './ToastContext';
import { Toast, ToastProps } from './Toast';

export type LocalToastManagerProps = {
  placement?: 'top' | 'bottom';
  timeout?: number;
};
export type ToastManagerProps = ToastProps & LocalToastManagerProps;

export function ToastManager({ placement: _placement = 'top', timeout = 2000, ...props }: ToastManagerProps) {
  const { mount } = React.useContext(ToastContext);

  //////////////////////////////////////////////

  const timeoutRef = React.useRef<any>();
  const showToast = useSharedValue(false);
  const title = useSharedValue('');
  const palette = useSharedValue(undefined);
  const placement = useSharedValue(_placement);

  const handleCreateToast = React.useCallback(
    (args) => {
      showToast.value = true;
      title.value = args.title;
      palette.value = args.palette;

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        showToast.value = false;
      }, args.timeout || timeout);

      return () => clearTimeout(timeoutRef.current);
    },
    [showToast, timeout, title, palette]
  );

  //////////////////////////////////////////////

  React.useEffect(() => {
    const unmount = mount({
      create: handleCreateToast,
    });
    return () => unmount();
  }, [handleCreateToast, mount]);

  return <Toast title={title} palette={palette} placement={placement} show={showToast} {...props} />;
}
