import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Modal, ModalProps } from '../Modal';

import * as styles from './Overlay.styles';

export type LocalOverlayProps = {};
export type OverlayProps = ModalProps & LocalOverlayProps;

const useProps = createHook<Partial<OverlayProps>>(
  (props, { themeKey }) => {
    const htmlProps = Modal.useProps(props, { themeKey: 'Overlay' });

    const className = useClassName({
      style: styles.Overlay,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className,
    });

    return { ...htmlProps, className };
  },
  {
    defaultProps: {
      hideBackdrop: true,
      placement: 'center',
    },
    themeKey: 'Overlay',
  }
);

export const Overlay = createComponent<Partial<OverlayProps>>(
  (props) => {
    const overlayProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: overlayProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Overlay',
    },
    themeKey: 'Overlay',
  }
);
