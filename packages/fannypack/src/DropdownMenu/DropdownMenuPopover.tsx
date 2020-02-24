import { Box as ReakitBox, useMenu as useReakitMenu, MenuProps as ReakitMenuProps } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';
import { Popover as popoverStyles } from '../Popover/styles';

export type LocalDropdownMenuPopoverProps = {};
export type DropdownMenuPopoverProps = BoxProps & ReakitMenuProps & LocalDropdownMenuPopoverProps;

const useProps = createHook<DropdownMenuPopoverProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const {
      baseId,
      first,
      hide,
      hideOnClickOutside,
      last,
      modal,
      move,
      next,
      orientation,
      placement,
      preventBodyScroll,
      previous,
      stops,
      unstable_initialFocusRef,
      unstable_finalFocusRef,
      unstable_popoverRef,
      unstable_popoverStyles,
      unstable_portal,
      unstable_orphan,
      unstable_autoFocusOnShow,
      unstable_autoFocusOnHide,
      unstable_animating,
      unstable_animated,
      unstable_setIsMounted,
      unstable_setBaseId,
      unstable_idCountRef,
      unstable_stopAnimation,
      visible,
      ...restProps
    } = props;
    const dropdownMenuPopoverProps = useReakitMenu(
      {
        baseId,
        first,
        hide,
        hideOnClickOutside,
        last,
        modal,
        move,
        next,
        orientation,
        placement,
        preventBodyScroll,
        previous,
        stops,
        unstable_initialFocusRef,
        unstable_finalFocusRef,
        unstable_popoverRef,
        unstable_popoverStyles,
        unstable_portal,
        unstable_orphan,
        unstable_autoFocusOnShow,
        unstable_autoFocusOnHide,
        unstable_animating,
        unstable_animated,
        unstable_setIsMounted,
        unstable_setBaseId,
        unstable_idCountRef,
        unstable_stopAnimation,
        visible
      },
      restProps
    );
    const boxProps = Box.useProps({ ...restProps, ...dropdownMenuPopoverProps });

    const className = useClassName({
      style: [styles.DropdownMenuPopover, popoverStyles],
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  { defaultProps: { altitude: '200' }, themeKey: 'DropdownMenu.Popover' }
);

export const DropdownMenuPopover = createComponent<DropdownMenuPopoverProps>(
  props => {
    const dropdownMenuPopoverProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: dropdownMenuPopoverProps
    });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'DropdownMenu.Popover'
  }
);
