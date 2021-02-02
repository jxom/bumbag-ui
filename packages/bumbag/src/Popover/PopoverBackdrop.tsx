import * as React from 'react';
import {
  Box as ReakitBox,
  PopoverBackdropProps as ReakitPopoverBackdropProps,
  usePopoverBackdrop as useReakitPopoverBackdrop,
} from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { PopoverStateContext } from './PopoverState';
import * as styles from './Popover.styles';

export type LocalPopoverBackdropProps = {
  usePortal?: boolean;
};
export type PopoverBackdropProps = BoxProps & ReakitPopoverBackdropProps & LocalPopoverBackdropProps;

const useProps = createHook<PopoverBackdropProps>(
  (props, { themeKey }) => {
    const popoverContext = React.useContext(PopoverStateContext);
    props = { ...props, ...popoverContext.popover };

    let { visible, baseId, animating, animated, stopAnimation, modal, usePortal, ...htmlProps } = props;
    const popoverBackdropProps = useReakitPopoverBackdrop(
      {
        visible,
        baseId,
        animating,
        animated,
        stopAnimation,
        modal: process.env.NODE_ENV === 'test' ? false : usePortal || modal,
      },
      htmlProps
    );
    htmlProps = Box.useProps({ ...htmlProps, ...popoverBackdropProps });

    const className = useClassName({
      style: styles.PopoverBackdrop,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className,
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Popover.Backdrop' }
);

export const PopoverBackdrop = createComponent<PopoverBackdropProps>(
  (props) => {
    const popoverBackdropProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: popoverBackdropProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Popover.Backdrop',
    },
    themeKey: 'Popover.Backdrop',
  }
);
