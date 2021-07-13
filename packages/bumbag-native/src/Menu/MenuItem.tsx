import * as React from 'react';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { BoxProps, BoxTouchable, BoxTouchableProps } from '../Box';
import { Icon, IconProps } from '../Icon';
import { TextProps } from '../Text';
import * as styles from './Menu.styles';

export type LocalMenuItemProps = {
  disabled?: boolean;
  hasDivider?: boolean;
  isStatic?: boolean;
  after?: React.ReactElement;
  before?: React.ReactElement;
  disableLeftPadding?: boolean;
  iconAfter?: IconProps['icon'];
  iconAfterProps?: Partial<IconProps>;
  iconBefore?: IconProps['icon'];
  iconBeforeProps?: Partial<IconProps>;
  afterWrapperProps?: Partial<BoxProps>;
  beforeWrapperProps?: Partial<BoxProps>;
  contentProps?: Partial<BoxProps>;
  contentTextProps?: Partial<TextProps>;
};
export type MenuItemProps = BoxTouchableProps & LocalMenuItemProps;

const useProps = createHook<MenuItemProps>(
  (props) => {
    const {
      after,
      before,
      afterWrapperProps,
      beforeWrapperProps,
      contentProps,
      contentTextProps,
      disabled,
      hasDivider,
      iconAfter,
      iconAfterProps,
      iconBefore,
      iconBeforeProps,
      isStatic,
      disableLeftPadding,
      overrides,
    } = props;
    const boxTouchableProps = BoxTouchable.useProps(props);
    return {
      ...boxTouchableProps,
      activeOpacity: isStatic ? 1 : 0.2,
      focusable: !disabled && !isStatic,
      children: (
        <React.Fragment>
          {(before || iconBefore) && (
            <styles.MenuItemBeforeWrapper overrides={overrides} {...beforeWrapperProps}>
              {iconBefore && <Icon icon={iconBefore} overrides={overrides} {...iconBeforeProps} />}
              {before}
            </styles.MenuItemBeforeWrapper>
          )}
          <styles.MenuItemContent
            hasDivider={hasDivider}
            disabled={disabled}
            isStatic={isStatic}
            disableLeftPadding={disableLeftPadding}
            _hoveractive
            overrides={overrides}
            {...contentProps}
          >
            <styles.MenuItemContentText overrides={overrides} {...contentTextProps}>
              {props.children}
            </styles.MenuItemContentText>
            {(after || iconAfter) && (
              <styles.MenuItemAfterWrapper overrides={overrides} {...afterWrapperProps}>
                {iconAfter && <Icon overrides={overrides} icon={iconAfter} {...iconAfterProps} />}
                {after}
              </styles.MenuItemAfterWrapper>
            )}
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
