import { Box as ReakitBox, useMenu as useReakitMenu, MenuProps as ReakitMenuProps } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';
import { Popover as popoverStyles } from '../Popover/styles';

export type LocalDropdownMenuPopoverProps = {
  isTabbable?: boolean;
};
export type DropdownMenuPopoverProps = BoxProps & ReakitMenuProps & LocalDropdownMenuPopoverProps;

const useProps = createHook<DropdownMenuPopoverProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const {
      baseId,
      currentId,
      first,
      hide,
      hideOnClickOutside,
      groups,
      last,
      modal,
      move,
      next,
      orientation,
      placement,
      preventBodyScroll,
      previous,
      setModal,
      items,
      setCurrentId,
      wrap,
      unstable_initialFocusRef,
      unstable_finalFocusRef,
      unstable_popoverRef,
      unstable_popoverStyles,
      unstable_modal,
      unstable_moves,
      unstable_orphan,
      unstable_autoFocusOnShow,
      unstable_autoFocusOnHide,
      animating,
      animated,
      stopAnimation,
      unstable_virtual,
      visible,
      ...restProps
    } = props;
    const dropdownMenuPopoverProps = useReakitMenu(
      {
        baseId,
        currentId,
        first,
        hide,
        hideOnClickOutside,
        groups,
        last,
        modal,
        move,
        next,
        orientation,
        placement,
        preventBodyScroll,
        previous,
        setModal,
        items,
        setCurrentId,
        wrap,
        unstable_initialFocusRef,
        unstable_finalFocusRef,
        unstable_popoverRef,
        unstable_popoverStyles,
        unstable_modal,
        unstable_moves,
        unstable_orphan,
        unstable_autoFocusOnShow,
        unstable_autoFocusOnHide,
        animating,
        animated,
        stopAnimation,
        unstable_virtual,
        visible,
      },
      restProps
    );
    const boxProps = Box.useProps({ ...restProps, ...dropdownMenuPopoverProps });

    const className = useClassName({
      style: [styles.DropdownMenuPopover, popoverStyles],
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className, tabIndex: props.isTabbable ? boxProps.tabIndex : undefined };
  },
  { defaultProps: { altitude: '200', isTabbable: true }, themeKey: 'DropdownMenu.Popover' }
);

export const DropdownMenuPopover = createComponent<DropdownMenuPopoverProps>(
  (props) => {
    const dropdownMenuPopoverProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: dropdownMenuPopoverProps,
    });
  },
  {
    attach: {
      useProps,
    },
    themeKey: 'DropdownMenu.Popover',
  }
);
