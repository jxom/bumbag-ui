import { Box as ReakitBox, DialogProps as ReakitDialogProps, useDialog as useReakitDialog } from 'reakit';
import _omit from 'lodash/omit';

import { useClassName, createComponent, createElement } from '../utils';
import { BoxProps } from '../Box';
import { Modal, ModalProps } from '../Modal';

import * as styles from './styles';

export type LocalOverlayProps = {};
export type OverlayProps = ModalProps & LocalOverlayProps;

function useProps(props: OverlayProps) {
  const htmlProps = Modal.useProps(props);

  const className = useClassName({
    style: styles.Overlay,
    styleProps: props,
    prevClassName: htmlProps.className
  });

  return { ...htmlProps, className };
}

export const Overlay = createComponent<OverlayProps>(
  props => {
    const overlayProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: overlayProps });
  },
  {
    attach: {
      defaultProps: {
        modal: false,
        placement: 'center'
      },
      useProps
    },
    themeKey: 'Overlay'
  }
);
