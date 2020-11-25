import {
  Box as ReakitBox,
  useMenuButton as useReakitMenuButton,
  MenuButtonProps as ReakitMenuButtonProps,
} from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './DropdownMenu.styles';

export type LocalDropdownMenuButtonProps = {};
export type DropdownMenuButtonProps = BoxProps & ReakitMenuButtonProps & LocalDropdownMenuButtonProps;

const useProps = createHook<DropdownMenuButtonProps>(
  (props, { themeKey }) => {
    const {
      baseId,
      currentId,
      disabled,
      first,
      focusable,
      hide,
      last,
      placement,
      show,
      toggle,
      visible,
      unstable_clickOnEnter,
      unstable_clickOnSpace,
      unstable_disclosureRef,
      unstable_moves,
      unstable_popoverStyles,
      unstable_arrowStyles,
      unstable_referenceRef,
      ...restProps
    } = props;
    const dropdownMenuButtonProps = useReakitMenuButton(
      {
        baseId,
        currentId,
        disabled,
        first,
        focusable,
        hide,
        last,
        placement,
        show,
        toggle,
        visible,
        unstable_clickOnEnter,
        unstable_clickOnSpace,
        unstable_disclosureRef,
        unstable_moves,
        unstable_popoverStyles,
        unstable_arrowStyles,
        unstable_referenceRef,
      },
      restProps
    );
    const boxProps = Box.useProps({ ...restProps, ...dropdownMenuButtonProps });

    const className = useClassName({
      style: styles.DropdownMenuButton,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'DropdownMenu.Button' }
);

export const DropdownMenuButton = createComponent<DropdownMenuButtonProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'DropdownMenu.Button',
    },
    themeKey: 'DropdownMenu.Button',
  }
);
