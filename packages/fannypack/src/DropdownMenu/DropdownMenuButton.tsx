import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Button, ButtonProps } from '../Button';
import { DropdownMenuDisclosure, DropdownMenuDisclosureProps } from './DropdownMenuDisclosure';

import * as styles from './styles';

export type LocalDropdownMenuButtonProps = {};
export type DropdownMenuButtonProps = ButtonProps & DropdownMenuDisclosureProps & LocalDropdownMenuButtonProps;

const useProps = createHook<DropdownMenuButtonProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const { ...restProps } = props;
    const dropdownMenuDisclosureProps = DropdownMenuDisclosure.useProps({ ...restProps });
    const buttonProps = Button.useProps({ ...dropdownMenuDisclosureProps, ...restProps });

    const className = useClassName({
      style: styles.DropdownMenuButton,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: buttonProps.className
    });

    return { ...buttonProps, className };
  },
  { themeKey: 'DropdownMenu.Button' }
);

export const DropdownMenuButton = createComponent<DropdownMenuButtonProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'DropdownMenu.Button'
  }
);
