import {
  Box as ReakitBox,
  HiddenDisclosureProps as ReakitHiddenDisclosureProps,
  useHiddenDisclosure as useReakitHiddenDisclosure
} from 'reakit';
import _omit from 'lodash/omit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalHiddenDisclosureProps = {};
export type HiddenDisclosureProps = BoxProps & ReakitHiddenDisclosureProps & LocalHiddenDisclosureProps;

const useProps = createHook<HiddenDisclosureProps>(
  (props, themeKey) => {
    let { disabled, focusable, visible, toggle, baseId, ...htmlProps } = props;
    const hiddenDisclosureProps = useReakitHiddenDisclosure(
      { disabled, focusable, visible, toggle, baseId },
      htmlProps
    );
    htmlProps = Box.useProps({ ...htmlProps, ...hiddenDisclosureProps });

    const className = useClassName({
      style: styles.HiddenDisclosure,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Hidden.Disclosure' }
);

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
      useProps
    },
    defaultProps: {
      use: 'button'
    },
    themeKey: 'Hidden.Disclosure'
  }
);
