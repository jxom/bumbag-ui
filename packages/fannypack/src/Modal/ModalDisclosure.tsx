import {
  Box as ReakitBox,
  DialogDisclosureProps as ReakitDialogDisclosureProps,
  useDialogDisclosure as useReakitDialogDisclosure
} from 'reakit';
import _omit from 'lodash/omit';

import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalModalDisclosureProps = {};
export type ModalDisclosureProps = BoxProps & ReakitDialogDisclosureProps & LocalModalDisclosureProps;

function useProps(props: ModalDisclosureProps) {
  let { disabled, focusable, visible, toggle, unstable_hiddenId, ...htmlProps } = props;
  const modalDisclosureProps = useReakitDialogDisclosure(
    { disabled, focusable, visible, toggle, unstable_hiddenId },
    htmlProps
  );
  htmlProps = Box.useProps({ ...htmlProps, ...modalDisclosureProps });

  const className = useClassName({
    style: styles.ModalDisclosure,
    styleProps: props,
    prevClassName: htmlProps.className
  });

  return { ...htmlProps, className };
}

export const ModalDisclosure = createComponent<ModalDisclosureProps>(
  props => {
    const modalDisclosureProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: modalDisclosureProps
    });
  },
  {
    attach: {
      defaultProps: {
        use: 'button'
      },
      useProps
    },
    themeKey: 'Modal.Disclosure'
  }
);
