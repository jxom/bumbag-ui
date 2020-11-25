import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Alert, AlertProps } from '../Alert';

import * as styles from './Toast.styles';

export type LocalToastProps = {
  countdown?: number;
};
export type ToastProps = AlertProps & LocalToastProps;

const useProps = createHook<ToastProps>(
  (props, { themeKey }) => {
    const alertProps = Alert.useProps(props, { themeKey: 'Toast' });

    const className = useClassName({
      style: styles.Toast,
      styleProps: props,
      themeKey,
      prevClassName: alertProps.className,
    });

    return { ...alertProps, className };
  },
  { defaultProps: { accent: true, showCloseButton: true }, themeKey: 'Toast' }
);

export const Toast = createComponent<ToastProps>(
  (props) => {
    const toastProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: toastProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Toast',
    },
    themeKey: 'Toast',
  }
);
