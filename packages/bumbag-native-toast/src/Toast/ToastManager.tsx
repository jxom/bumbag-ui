import * as React from 'react';
import { createComponent, createElement, createHook } from 'bumbag/utils';
import { useSharedValue } from 'react-native-reanimated';

import { ToastContext } from './ToastContext';
import { Toast, ToastProps } from './Toast';

export type LocalToastManagerProps = {
  placement?: 'top' | 'bottom';
  timeout?: number;
};
export type ToastManagerProps = Omit<ToastProps, 'placement'> & LocalToastManagerProps;

const useProps = createHook<ToastManagerProps>(
  (props: any) => {
    const { placement: _placement, timeout, ...restProps } = props;
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
      [showToast.value, title.value, palette.value, timeout]
    );

    //////////////////////////////////////////////

    React.useEffect(() => {
      const unmount = mount({
        create: handleCreateToast,
      });
      return () => unmount();
    }, [handleCreateToast, mount]);

    //////////////////////////////////////////////

    return {
      title,
      palette,
      placement,
      show: showToast,
      ...restProps,
    };
  },
  { defaultProps: { placement: 'top', timeout: 2000 }, themeKey: 'native.ToastManager' }
);

export const ToastManager = createComponent<ToastManagerProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: Toast,
      htmlProps: htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.ToastManager',
    },
    themeKey: 'native.ToastManager',
  }
);
