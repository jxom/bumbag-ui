import { Box as ReakitBox } from 'reakit';
import _omit from 'lodash/omit';

import { useClassName, createComponent, createElement } from '../utils';
import { ModalDisclosure, ModalDisclosureProps } from '../Modal';

import * as styles from './styles';

export type LocalOverlayDisclosureProps = {};
export type OverlayDisclosureProps = ModalDisclosureProps & LocalOverlayDisclosureProps;

function useProps(props: OverlayDisclosureProps) {
  const htmlProps = ModalDisclosure.useProps(props);

  const className = useClassName({
    style: styles.OverlayDisclosure,
    styleProps: props,
    prevClassName: htmlProps.className
  });

  return { ...htmlProps, className };
}

export const OverlayDisclosure = createComponent<OverlayDisclosureProps>(
  props => {
    const overlayDisclosureProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: overlayDisclosureProps
    });
  },
  {
    attach: {
      defaultProps: {
        use: 'button'
      },
      useProps
    },
    themeKey: 'Overlay.Disclosure'
  }
);
