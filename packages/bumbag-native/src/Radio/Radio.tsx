import * as React from 'react';
import { createComponent, createElement, createHook, useUniqueId } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import { TextProps } from '../Text';
import { IconProps } from '../Icon';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';
import * as styles from './Radio.styles';

export type LocalRadioProps = {
  /** Aligns the radio to the left or right side. */
  align?: 'left' | 'right';
  /** Indicates if the radio is checked. */
  checked?: boolean;
  /** Sets the default checked state. */
  defaultChecked?: boolean;
  /** Disables the radio */
  disabled?: boolean;
  /*** Sets the props of the icon */
  iconProps?: Partial<IconProps>;
  /*** Sets the props of the icon wrapper */
  iconWrapperProps?: Partial<BoxProps>;
  /** Radio label */
  label?: string;
  /*** Sets the props of the label */
  labelProps?: Partial<TextProps>;
  /*** Sets the color of the radio */
  palette?: string;
  /** Function to invoke when radio has changed */
  onChange?: ({ checked, value }: { checked: boolean; value?: any }) => void;
  /** State of the radio. Can be any color in the palette. */
  state?: string;
  value?: any;
};
export type RadioProps = BoxProps & LocalRadioProps;

const useProps = createHook<RadioProps>(
  (props) => {
    const {
      align,
      colorMode,
      checked,
      disabled,
      defaultChecked,
      iconProps,
      iconWrapperProps,
      label,
      labelProps,
      palette,
      onChange,
      overrides,
      state,
      variant,
      value,
    } = props;

    ///////////////////////////////////////////////////

    const boxProps = Box.useProps(props);

    ///////////////////////////////////////////////////

    const [controlledChecked, setControlledChecked] = React.useState(defaultChecked);
    const handlePress = React.useCallback(() => {
      if (typeof checked === 'undefined') {
        setControlledChecked(!controlledChecked);
      } else {
        onChange && onChange({ checked: !checked, value });
      }
    }, [checked, controlledChecked, onChange, value]);

    ///////////////////////////////////////////////////

    const isChecked = checked || controlledChecked;

    ///////////////////////////////////////////////////

    let checkedIconColor = palette;
    if (disabled) {
      checkedIconColor = 'gray300';
    }

    let iconSize = '150';
    if (variant === 'ghost') {
      iconSize = '300';
    }

    const radio = (
      <styles.RadioIcon
        // @ts-ignore
        align={align}
        colorMode={colorMode}
        checked={isChecked}
        checkedColor={palette}
        disabled={disabled}
        uncheckedColor="default"
        state={state}
        variant={variant}
        overrides={overrides}
        {...iconWrapperProps}
      >
        {isChecked && (
          <styles.RadioCheckIcon
            color={checkedIconColor}
            colorMode={colorMode}
            icon={variant === 'ghost' ? 'check' : 'circle'}
            variant={variant}
            // @ts-ignore
            state={state}
            size={iconSize}
            overrides={overrides}
            {...iconProps}
          />
        )}
      </styles.RadioIcon>
    );

    ///////////////////////////////////////////////////

    const labelId = useUniqueId();

    ///////////////////////////////////////////////////

    return {
      ...boxProps,
      accessibilityRole: 'radio',
      accessibilityLabelledBy: labelId,
      accessibilityChecked: isChecked,
      focusable: true,
      children: (
        <>
          {align === 'left' && radio}
          <styles.RadioLabel nativeID={labelId} colorMode={colorMode} overrides={overrides} {...labelProps}>
            {label}
          </styles.RadioLabel>
          {align === 'right' && radio}
        </>
      ),
      onPress: handlePress,
    };
  },
  {
    defaultProps: {
      align: 'left',
      palette: 'primary',
      variant: 'default',
    },
    themeKey: 'native.Radio',
  }
);

export const Radio = createComponent<RadioProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.Radio,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Radio',
    },
    themeKey: 'native.Radio',
  }
);
