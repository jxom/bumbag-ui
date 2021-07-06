import * as React from 'react';
import { Button as ReakitButton, ButtonProps as ReakitButtonProps, useButton as useReakitButton } from 'reakit';
import ConditionalWrap from 'conditional-wrap';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { ButtonType, Omit, Size, Palette } from '../types';
import { Box, BoxProps } from '../Box';
import { Flex } from '../Flex';
import { Icon, IconProps } from '../Icon';
import { Text } from '../Text';
import { Spinner, SpinnerProps } from '../Spinner';

import * as styles from './Button.styles';

export type LocalButtonProps = {
  /** Icon that appears on the right side of the button. */
  iconAfter?: IconProps['icon'];
  iconAfterProps?: Omit<IconProps, 'icon'>;
  /** Icon that appears on the left side of the button. */
  iconBefore?: IconProps['icon'];
  iconBeforeProps?: Omit<IconProps, 'icon'>;
  /** Adds a loading indicator to the button. */
  isLoading?: boolean;
  /** Makes the button not interactable. */
  isStatic?: boolean;
  palette?: Palette;
  size?: Size;
  /** Custom props for the isLoading spinner. */
  spinnerProps?: SpinnerProps;
  type?: ButtonType;
  ignoreGrayOverride?: boolean;
};
export type ButtonProps = BoxProps & ReakitButtonProps & LocalButtonProps;

const useProps = createHook<ButtonProps>(
  (props, { themeKey }) => {
    let {
      disabled,
      focusable,
      iconAfter,
      iconAfterProps,
      iconBefore,
      iconBeforeProps,
      ignoreGrayOverride,
      spinnerProps,
      unstable_clickOnEnter,
      unstable_clickOnSpace,
      ...htmlProps
    } = props;
    if (props.palette === 'gray' && props.variant === 'default') {
      props.palette = 'grayTint';
    }

    const buttonProps = useReakitButton(
      { disabled, focusable, unstable_clickOnEnter, unstable_clickOnSpace },
      htmlProps
    );
    htmlProps = Box.useProps({ ...htmlProps, ...buttonProps });

    const className = useClassName({
      style: styles.Button,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className,
    });
    const iconBeforeClassName = useClassName({
      style: styles.ButtonIcon,
      styleProps: { ...props, isBefore: true },
      themeKey,
      themeKeySuffix: 'Icon',
    });
    const iconAfterClassName = useClassName({
      style: styles.ButtonIcon,
      styleProps: { ...props, isAfter: true },
      themeKey,
      themeKeySuffix: 'Icon',
    });
    const spinnerWrapperClassName = useClassName({
      style: styles.ButtonSpinnerWrapper,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'SpinnerWrapper',
    });
    const spinnerClassName = useClassName({
      style: styles.ButtonSpinner,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Spinner',
    });

    let spinnerColor = props.palette;
    if (props.variant === 'default') {
      spinnerColor = `${props.palette}Inverted`;
    }
    if (props.palette === 'default') {
      spinnerColor = 'defaultInverted';
    }

    let spinnerTrackColor;
    if (props.variant === 'default') {
      spinnerTrackColor = `${props.palette}300`;
    }
    if (props.palette === 'default') {
      spinnerColor = 'gray100';
    }

    const children = (
      <React.Fragment>
        {props.isLoading && (
          <Flex className={spinnerWrapperClassName}>
            <Spinner
              use={Flex}
              className={spinnerClassName}
              color={spinnerColor}
              trackColor={spinnerTrackColor}
              hasTrack
              {...spinnerProps}
            />
          </Flex>
        )}
        <ConditionalWrap condition={props.isLoading} wrap={(children) => <Text>{children}</Text>}>
          <React.Fragment>
            {iconBefore && <Icon className={iconBeforeClassName} icon={iconBefore} {...iconBeforeProps} />}
            {htmlProps.children}
            {iconAfter && <Icon className={iconAfterClassName} icon={iconAfter} {...iconAfterProps} />}
          </React.Fragment>
        </ConditionalWrap>
      </React.Fragment>
    );

    return { ...htmlProps, className, children };
  },
  {
    defaultProps: {
      disabled: false,
      iconAfter: undefined,
      iconBefore: undefined,
      isLoading: false,
      isStatic: false,
      variant: 'default',
      palette: 'default',
      size: 'default',
      type: 'button',
    },
    themeKey: 'Button',
  }
);

export const Button = createComponent<ButtonProps>(
  (props: ButtonProps) => {
    const buttonProps = useProps(props);
    return createElement({ children: props.children, component: ReakitButton, use: props.use, htmlProps: buttonProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Button',
    },
    themeKey: 'Button',
  }
);
