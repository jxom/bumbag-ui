import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useOptionsState } from '../utils';

import { DropdownMenuGroup, DropdownMenuGroupProps } from './DropdownMenuGroup';
import * as styles from './DropdownMenu.styles';

export type LocalDropdownMenuOptionGroupProps = {
  defaultValue?: Array<string> | string;
  onBlur?: (values: Array<string> | string) => void;
  onChange?: (values: Array<string> | string, value: string) => void;
  type: 'checkbox' | 'radio';
  value?: Array<string> | string;
};
export type DropdownMenuOptionGroupProps = Omit<DropdownMenuGroupProps, 'onBlur' | 'onChange'> &
  LocalDropdownMenuOptionGroupProps;

const useProps = createHook<DropdownMenuOptionGroupProps>(
  (props, { themeKey }) => {
    const { children, defaultValue, onBlur, onChange, type, value, ...restProps } = props;

    const { getOptionItemProps } = useOptionsState({
      defaultValue,
      onBlur,
      onChange,
      type,
      value,
    });

    const dropdownMenuGroupProps = DropdownMenuGroup.useProps({
      ...restProps,
      children: React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          ...child.props,
          ...getOptionItemProps({ value: child.props?.value }),
        });
      }),
    });

    const className = useClassName({
      style: styles.DropdownMenuOptionGroup,
      styleProps: props,
      themeKey,
      prevClassName: dropdownMenuGroupProps.className,
    });

    return {
      ...dropdownMenuGroupProps,
      className,
    };
  },
  { themeKey: 'DropdownMenu.OptionGroup' }
);

export const DropdownMenuOptionGroup = createComponent<DropdownMenuOptionGroupProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'DropdownMenu.OptionGroup',
    },
    themeKey: 'DropdownMenu.OptionGroup',
  }
);
