import {
  Box as ReakitBox,
  PopoverBackdropProps as ReakitPopoverBackdropProps,
  usePopoverBackdrop as useReakitPopoverBackdrop
} from 'reakit';
import _omit from 'lodash/omit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalPopoverBackdropProps = {};
export type PopoverBackdropProps = BoxProps & ReakitPopoverBackdropProps & LocalPopoverBackdropProps;

const useProps = createHook<PopoverBackdropProps>(
  (props, themeKey) => {
    let {
      visible,
      unstable_hiddenId,
      unstable_animating,
      unstable_animated,
      unstable_stopAnimation,
      unstable_setIsMounted,
      ...htmlProps
    } = props;
    const popoverBackdropProps = useReakitPopoverBackdrop(
      {
        visible,
        unstable_hiddenId,
        unstable_animating,
        unstable_animated,
        unstable_stopAnimation,
        unstable_setIsMounted
      },
      htmlProps
    );
    htmlProps = Box.useProps({ ...htmlProps, ...popoverBackdropProps });

    const className = useClassName({
      style: styles.PopoverBackdrop,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Popover.Backdrop' }
);

export const PopoverBackdrop = createComponent<PopoverBackdropProps>(
  props => {
    const popoverBackdropProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: popoverBackdropProps
    });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Popover.Backdrop'
  }
);
