import {
  Box as ReakitBox,
  useMenuButton as useReakitMenuDisclosure,
  MenuButtonProps as ReakitMenuDisclosureProps,
} from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalDropdownMenuDisclosureProps = {};
export type DropdownMenuDisclosureProps = BoxProps & ReakitMenuDisclosureProps & LocalDropdownMenuDisclosureProps;

const useProps = createHook<DropdownMenuDisclosureProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const {
      baseId,
      currentId,
      disabled,
      first,
      focusable,
      hide,
      move,
      last,
      placement,
      show,
      toggle,
      visible,
      unstable_arrowStyles,
      unstable_clickOnEnter,
      unstable_clickOnSpace,
      unstable_disclosureRef,
      unstable_popoverStyles,
      unstable_moves,
      unstable_referenceRef,
      ...restProps
    } = props;
    const dropdownMenuDisclosureProps = useReakitMenuDisclosure(
      {
        baseId,
        currentId,
        disabled,
        first,
        focusable,
        hide,
        move,
        last,
        placement,
        show,
        toggle,
        visible,
        unstable_arrowStyles,
        unstable_clickOnEnter,
        unstable_clickOnSpace,
        unstable_disclosureRef,
        unstable_popoverStyles,
        unstable_moves,
        unstable_referenceRef,
      },
      restProps
    );
    const boxProps = Box.useProps({ ...restProps, ...dropdownMenuDisclosureProps });

    const className = useClassName({
      style: styles.DropdownMenuDisclosure,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'DropdownMenu.Disclosure' }
);

export const DropdownMenuDisclosure = createComponent<DropdownMenuDisclosureProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'DropdownMenu.Disclosure',
    },
    themeKey: 'DropdownMenu.Disclosure',
  }
);
