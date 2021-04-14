import * as React from 'react';
import { Platform, SwitchProps as RNSwitchProps } from 'react-native';
import { createComponent, createElement, createHook, useUniqueId } from 'bumbag/utils';

import { usePalette } from '../utils';
import { Box, BoxProps } from '../Box';
import { TextProps } from '../Text';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';
import * as styles from './Switch.styles';

export type LocalSwitchProps = {
  /** Color of the active thumb (web only). */
  activeThumbColor?: string;
  /** Color of the active track (web only). */
  activeTrackColor?: string;
  /** Aligns the switch to the left or right side. */
  align?: 'left' | 'right';
  /** Indicates if the switch is checked. */
  checked?: boolean;
  /** Sets the default checked state. */
  defaultChecked?: boolean;
  /** Disables the switch */
  disabled?: boolean;
  /** Switch label */
  label?: string;
  /*** Sets the props of the label */
  labelProps?: Partial<TextProps>;
  /*** Sets the color of the switch */
  palette?: string;
  /** Function to invoke when switch has changed */
  onChange?: (checked: boolean) => void;
  /** State of the switch. Can be any color in the palette. */
  state?: string;
  switchProps?: Partial<RNSwitchProps>;
};
export type SwitchProps = BoxProps & RNSwitchProps & LocalSwitchProps;

const useProps = createHook<SwitchProps>(
  (props) => {
    const {
      align,
      colorMode,
      checked,
      disabled,
      defaultChecked,
      label,
      labelProps,
      palette,
      onChange,
      overrides,
      switchProps,
      state,
    } = props;

    ///////////////////////////////////////////////////

    const boxProps = Box.useProps(props);

    ///////////////////////////////////////////////////

    const [controlledChecked, setControlledChecked] = React.useState(defaultChecked);
    const handlePress = React.useCallback(() => {
      setControlledChecked(!controlledChecked);
      onChange && onChange(!checked);
    }, [checked, controlledChecked, onChange]);

    ///////////////////////////////////////////////////

    const isChecked = checked || controlledChecked;

    ///////////////////////////////////////////////////

    let trackColor = props.trackColor || 'white900';
    if (state && Platform.OS !== 'ios') {
      trackColor = `${state}100`;
    }

    let thumbColor = props.thumbColor || 'white';
    if (state && Platform.OS !== 'ios') {
      thumbColor = state;
    }

    let activeThumbColor = usePalette(props.activeThumbColor || palette);
    let activeTrackColor = usePalette(props.activeTrackColor || `${palette}100`);
    let thumbPalette = usePalette(thumbColor);
    let trackPalette = usePalette(trackColor as any);

    const switchToggle = (
      <styles.SwitchToggle
        activeThumbColor={activeThumbColor}
        activeTrackColor={activeTrackColor}
        thumbColor={thumbPalette}
        trackColor={trackPalette}
        align={align}
        colorMode={colorMode}
        disabled={disabled}
        onValueChange={handlePress}
        value={isChecked}
        {...switchProps}
      />
    );

    ///////////////////////////////////////////////////

    const labelId = useUniqueId();

    ///////////////////////////////////////////////////

    return {
      ...boxProps,
      accessibilityRole: 'checkbox',
      accessibilityLabelledBy: labelId,
      accessibilityChecked: isChecked,
      focusable: true,
      children: (
        <>
          {align === 'left' && switchToggle}
          {label && (
            <styles.SwitchLabel nativeID={labelId} colorMode={colorMode} overrides={overrides} {...labelProps}>
              {label}
            </styles.SwitchLabel>
          )}
          {align === 'right' && switchToggle}
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
    themeKey: 'native.Switch',
  }
);

export const Switch = createComponent<SwitchProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.Switch,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Switch',
    },
    themeKey: 'native.Switch',
  }
);

////////////////////////////////////////////////////////////////

export type LocalSwitchFieldProps = {
  /** Additional props for the Switch component */
  switchProps?: Partial<SwitchProps>;
  /** Label for the switch */
  switchLabel?: string;
};
export type SwitchFieldProps = BoxProps & FieldWrapperProps & SwitchProps & LocalSwitchFieldProps;

const useSwitchFieldProps = createHook<SwitchFieldProps>(
  (props) => {
    const {
      align,
      switchLabel,
      checked,
      defaultChecked,
      description,
      disabled,
      hint,
      isOptional,
      isRequired,
      label,
      labelProps,
      onChange,
      overrides,
      palette,
      state,
      variant,
      validationText,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    return {
      ...boxProps,
      children: (
        <FieldWrapper
          description={description}
          hint={hint}
          isOptional={isOptional}
          isRequired={isRequired}
          label={label}
          overrides={overrides}
          state={state}
          variant={variant}
          validationText={validationText}
        >
          <Switch
            align={align}
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            label={switchLabel}
            labelProps={labelProps}
            onChange={onChange}
            palette={palette}
            state={state}
            overrides={overrides}
          />
        </FieldWrapper>
      ),
    };
  },
  {
    defaultProps: {
      align: 'left',
      palette: 'primary',
      variant: 'default',
    },
    themeKey: 'SwitchField',
  }
);

export const SwitchField = createComponent<SwitchFieldProps>(
  (props) => {
    const SwitchFieldProps = useSwitchFieldProps(props);
    return createElement({
      children: props.children,
      component: styles.SwitchField,
      htmlProps: SwitchFieldProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'SwitchField',
    },
    themeKey: 'SwitchField',
  }
);
