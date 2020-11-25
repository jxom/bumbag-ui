import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';
import { Box, BoxProps } from '../Box';
import { Icon, IconProps } from '../Icon';

import { DropdownMenuItem, DropdownMenuItemProps } from './DropdownMenuItem';
import * as styles from './DropdownMenu.styles';

export type LocalDropdownMenuOptionItemProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: ({ checked: boolean, value: string }) => void;
  value?: string;
};
export type DropdownMenuOptionItemProps = DropdownMenuItemProps & LocalDropdownMenuOptionItemProps;

const useProps = createHook<DropdownMenuOptionItemProps>(
  (props, { themeKey }) => {
    const { children, checked, onChange, value, ...restProps } = props;

    //////////////////////////////////////////////////////

    const menuItemProps = DropdownMenuItem.useProps(restProps);

    //////////////////////////////////////////////////////

    const className = useClassName({
      style: styles.DropdownMenuOptionItem,
      styleProps: props,
      themeKey,
      prevClassName: menuItemProps.className,
    });
    const iconWrapperClassName = useClassName({
      style: styles.DropdownMenuOptionItemIconWrapper,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'IconWrapper',
    });

    //////////////////////////////////////////////////////

    return {
      ...menuItemProps,
      'aria-checked': checked,
      className,
      onClick: () => onChange && onChange({ checked: !checked, value }),
      children: (
        <>
          <Box className={iconWrapperClassName} overrides={props.overrides}>
            {checked && (
              <Icon
                icon={{
                  viewBoxWidth: 16,
                  viewBoxHeight: 16,
                  paths: [
                    'M14 3c-.28 0-.53.11-.71.29L6 10.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l8-8A1.003 1.003 0 0014 3z',
                  ],
                }}
                overrides={props.overrides}
              />
            )}
          </Box>
          {children}
        </>
      ),
    };
  },
  { themeKey: 'DropdownMenu.OptionItem' }
);

export const DropdownMenuOptionItem = createComponent<DropdownMenuOptionItemProps>(
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
      displayName: 'DropdownMenu.OptionItem',
    },
    themeKey: 'DropdownMenu.OptionItem',
  }
);
