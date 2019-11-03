import {
  Box as ReakitBox,
  PopoverDisclosureProps as ReakitPopoverDisclosureProps,
  usePopoverDisclosure as useReakitPopoverDisclosure
} from 'reakit';
import _omit from 'lodash/omit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalPopoverDisclosureProps = {};
export type PopoverDisclosureProps = BoxProps & ReakitPopoverDisclosureProps & LocalPopoverDisclosureProps;

const useProps = createHook<PopoverDisclosureProps>(
  (props, themeKey) => {
    let { disabled, focusable, visible, toggle, unstable_hiddenId, unstable_referenceRef, ...htmlProps } = props;
    const popoverDisclosureProps = useReakitPopoverDisclosure(
      { disabled, focusable, visible, toggle, unstable_hiddenId, unstable_referenceRef },
      htmlProps
    );
    htmlProps = Box.useProps({ ...htmlProps, ...popoverDisclosureProps });

    const className = useClassName({
      style: styles.PopoverDisclosure,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Popover.Disclosure' }
);

export const PopoverDisclosure = createComponent<PopoverDisclosureProps>(
  props => {
    const popoverDisclosureProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: popoverDisclosureProps
    });
  },
  {
    attach: {
      useProps
    },
    defaultProps: {
      use: 'button'
    },
    themeKey: 'Popover.Disclosure'
  }
);
