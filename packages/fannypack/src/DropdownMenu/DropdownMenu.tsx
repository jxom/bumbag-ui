import { Box as ReakitBox, useMenu as useReakitMenu, MenuProps as ReakitMenuProps } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';
import { Popover as popoverStyles } from '../Popover/styles';

export type LocalDropdownMenuProps = {};
export type DropdownMenuProps = BoxProps & ReakitMenuProps & LocalDropdownMenuProps;

const useProps = createHook<DropdownMenuProps>(
  (props, themeKey) => {
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
    const dropdownMenuProps = useReakitMenu(
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
    const boxProps = Box.useProps({ ...restProps, ...dropdownMenuProps });

    const className = useClassName({
      style: [styles.DropdownMenu, popoverStyles],
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  { defaultProps: { altitude: '200' }, themeKey: 'DropdownMenu' }
);

export const DropdownMenu = createComponent<DropdownMenuProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'DropdownMenu'
  }
);
