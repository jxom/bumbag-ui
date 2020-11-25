import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { ModalDisclosure, ModalDisclosureProps } from '../Modal';

import * as styles from './Overlay.styles';

export type LocalOverlayDisclosureProps = {};
export type OverlayDisclosureProps = ModalDisclosureProps & LocalOverlayDisclosureProps;

const useProps = createHook<Partial<OverlayDisclosureProps>>(
  (props, { themeKey }) => {
    const htmlProps = ModalDisclosure.useProps(props);

    const className = useClassName({
      style: styles.OverlayDisclosure,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className,
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Overlay.Disclosure' }
);

export const OverlayDisclosure = createComponent<Partial<OverlayDisclosureProps>>(
  (props) => {
    const overlayDisclosureProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: overlayDisclosureProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Overlay.Disclosure',
    },
    defaultProps: {
      use: 'button',
    },
    themeKey: 'Overlay.Disclosure',
  }
);
