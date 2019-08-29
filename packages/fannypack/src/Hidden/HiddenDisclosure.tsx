import {
  Box as ReakitBox,
  HiddenDisclosureProps as ReakitHiddenDisclosureProps,
  useHiddenDisclosure as useReakitHiddenDisclosure
} from 'reakit';
import _omit from 'lodash/omit';

import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalHiddenDisclosureProps = {};
export type HiddenDisclosureProps = BoxProps & ReakitHiddenDisclosureProps & LocalHiddenDisclosureProps;

function useProps(props: HiddenDisclosureProps) {
  let { disabled, focusable, visible, toggle, unstable_hiddenId, ...htmlProps } = props;
  const hiddenDisclosureProps = useReakitHiddenDisclosure(
    { disabled, focusable, visible, toggle, unstable_hiddenId },
    htmlProps
  );
  htmlProps = Box.useProps({ ...htmlProps, ...hiddenDisclosureProps });

  const className = useClassName({
    style: styles.HiddenDisclosure,
    styleProps: props,
    prevClassName: htmlProps.className
  });

  return { ...htmlProps, className };
}

export const HiddenDisclosure = createComponent<HiddenDisclosureProps>(
  props => {
    const hiddenDisclosureProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: hiddenDisclosureProps
    });
  },
  {
    attach: {
      defaultProps: {
        use: 'button'
      },
      useProps
    },
    themeKey: 'Hidden.Disclosure'
  }
);
