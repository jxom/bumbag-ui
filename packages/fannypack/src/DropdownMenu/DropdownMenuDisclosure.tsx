import {
  Box as ReakitBox,
  useMenuDisclosure as useReakitMenuDisclosure,
  MenuDisclosureProps as ReakitMenuDisclosureProps
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
      unstable_referenceRef,
      ...restProps
    } = props;
    const dropdownMenuDisclosureProps = useReakitMenuDisclosure(
      {
        baseId,
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
        unstable_referenceRef
      },
      restProps
    );
    const boxProps = Box.useProps({ ...restProps, ...dropdownMenuDisclosureProps });

    const className = useClassName({
      style: styles.DropdownMenuDisclosure,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  { themeKey: 'DropdownMenu.Disclosure' }
);

export const DropdownMenuDisclosure = createComponent<DropdownMenuDisclosureProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'DropdownMenu.Disclosure'
  }
);
