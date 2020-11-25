import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useTheme } from '../utils';
import { Box, BoxProps } from '../Box';
import { Overlay, OverlayProps } from '../Overlay';
import { Stack, StackProps } from '../Stack';

import { ToastContext } from './ToastContext';
import { Toast, ToastProps } from './Toast';
import * as styles from './Toast.styles';

export type LocalToastManagerProps = {
  fade?: boolean;
  isStacked?: boolean;
  slide?: boolean;
  spacing?: StackProps['spacing'];
  overlayProps?: Partial<OverlayProps>;
  toastProps?: Partial<ToastProps>;
};
export type ToastManagerProps = BoxProps & LocalToastManagerProps;

const useProps = createHook<ToastManagerProps>(
  (props, { themeKey }) => {
    const { children, isStacked, overlayProps, spacing, ...restProps } = props;

    const { theme } = useTheme();
    const boxProps = Box.useProps(restProps);
    const overlay = Overlay.useState({ visible: true, animated: true });
    const { toasts } = React.useContext(ToastContext);
    const placement = theme?.Toast?.placement;

    const className = useClassName({
      style: styles.Toast,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });
    const overlayClassName = useClassName({
      style: styles.ToastOverlay,
      styleProps: { ...props, placement },
      themeKey,
      themeKeySuffix: 'Overlay',
    });

    return {
      ...boxProps,
      className,
      children: (
        <Overlay {...overlay} {...overlayProps} className={overlayClassName} placement={placement}>
          <Stack spacing={spacing}>
            {toasts.map((toast) => (
              <Toast key={toast.key} {...toast}>
                {toast.message}
              </Toast>
            ))}
          </Stack>
        </Overlay>
      ),
    };
  },
  { defaultProps: { fade: true, slide: true, spacing: 'major-2' }, themeKey: 'Toast.Manager' }
);

export const ToastManager = createComponent<ToastManagerProps>(
  (props) => {
    const toastManagerProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: toastManagerProps,
    });
  },
  {
    attach: {
      useProps,
    },
    themeKey: 'Toast.Manager',
  }
);
