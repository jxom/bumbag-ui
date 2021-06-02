import * as React from 'react';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import { Icon, IconProps } from '../Icon';
import { Pressable, PressableProps } from '../Pressable';
import { Text, TextProps } from '../Text';
import * as styles from './Menu.styles';

export type LocalMenuItemProps = {
  hasDivider?: boolean;
  beforeWrapperProps?: Partial<BoxProps>;
  iconBefore?: IconProps['icon'];
  iconBeforeProps?: Partial<IconProps>;
  contentProps?: Partial<BoxProps>;
  contentTextProps?: Partial<TextProps>;
};
export type MenuItemProps = PressableProps & LocalMenuItemProps;

const useProps = createHook<MenuItemProps>(
  (props) => {
    const { beforeWrapperProps, contentProps, contentTextProps, hasDivider, iconBefore, iconBeforeProps } = props;
    const pressableProps = Pressable.useProps(props);
    return {
      ...pressableProps,
      children: (
        <React.Fragment>
          {iconBefore && (
            <styles.MenuItemBeforeWrapper {...beforeWrapperProps}>
              <Icon icon={iconBefore} {...iconBeforeProps} />
            </styles.MenuItemBeforeWrapper>
          )}
          <styles.MenuItemContent hasDivider={hasDivider} {...contentProps}>
            <styles.MenuItemContentText {...contentTextProps}>{props.children}</styles.MenuItemContentText>
          </styles.MenuItemContent>
        </React.Fragment>
      ),
    };
  },
  { defaultProps: { _hover: true, _focus: true, _active: true, _hoveractive: true }, themeKey: 'native.Menu.Item' }
);

export const MenuItem = createComponent<MenuItemProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.MenuItem,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Menu.Item',
    },
    themeKey: 'native.Menu.Item',
  }
);
