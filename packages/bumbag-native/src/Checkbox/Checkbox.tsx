import * as React from 'react';
import { createComponent, createElement, createHook, useUniqueId } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import { TextProps } from '../Text';
import { IconProps } from '../Icon';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';
import * as styles from './Checkbox.styles';

export type LocalCheckboxProps = {
  /** Aligns the checkbox to the left or right side. */
  align?: 'left' | 'right';
  /** Indicates if the checkbox is checked. */
  checked?: boolean;
  /** Sets the default checked state. */
  defaultChecked?: boolean;
  /** Disables the checkbox */
  disabled?: boolean;
  /*** Sets the props of the icon */
  iconProps?: Partial<IconProps>;
  /*** Sets the props of the icon wrapper */
  iconWrapperProps?: Partial<BoxProps>;
  /** Checkbox label */
  label?: string;
  /*** Sets the props of the label */
  labelProps?: Partial<TextProps>;
  /*** Sets the color of the checkbox */
  palette?: string;
  /** Function to invoke when checkbox has changed */
  onChange?: ({ checked, value }: { checked: boolean; value?: any }) => void;
  /** State of the checkbox. Can be any color in the palette. */
  state?: string;
  value?: any;
};
export type CheckboxProps = BoxProps & LocalCheckboxProps;

const useProps = createHook<CheckboxProps>(
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
      value,
      variant,
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

    let checkedIconColor = `${palette}Inverted`;
    if (variant === 'ghost') {
      checkedIconColor = palette;
    }
    if (disabled) {
      checkedIconColor = 'gray300';
    }

    let iconSize = '200';
    if (variant === 'ghost') {
      iconSize = '300';
    }

    const checkbox = (
      <styles.CheckboxIcon
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
          <styles.CheckboxCheckIcon
            color={checkedIconColor}
            colorMode={colorMode}
            icon="check"
            variant={variant}
            // @ts-ignore
            state={state}
            size={iconSize}
            overrides={overrides}
            {...iconProps}
          />
        )}
      </styles.CheckboxIcon>
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
          {align === 'left' && checkbox}
          <styles.CheckboxLabel nativeID={labelId} colorMode={colorMode} overrides={overrides} {...labelProps}>
            {label}
          </styles.CheckboxLabel>
          {align === 'right' && checkbox}
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
    themeKey: 'native.Checkbox',
  }
);

export const Checkbox = createComponent<CheckboxProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.Checkbox,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Checkbox',
    },
    themeKey: 'native.Checkbox',
  }
);

////////////////////////////////////////////////////////////////

export type LocalCheckboxFieldProps = {
  /** Additional props for the Checkbox component */
  checkboxProps?: Partial<CheckboxProps>;
  /** Label for the checkbox */
  checkboxLabel?: string;
};
export type CheckboxFieldProps = BoxProps & FieldWrapperProps & CheckboxProps & LocalCheckboxFieldProps;

const useCheckboxFieldProps = createHook<CheckboxFieldProps>(
  (props) => {
    const {
      align,
      checkboxLabel,
      checked,
      defaultChecked,
      description,
      disabled,
      hint,
      iconProps,
      iconWrapperProps,
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
      value,
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
          <Checkbox
            align={align}
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            iconProps={iconProps}
            iconWrapperProps={iconWrapperProps}
            label={checkboxLabel}
            labelProps={labelProps}
            onChange={onChange}
            palette={palette}
            state={state}
            value={value}
            variant={variant}
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
    themeKey: 'CheckboxField',
  }
);

export const CheckboxField = createComponent<CheckboxFieldProps>(
  (props) => {
    const CheckboxFieldProps = useCheckboxFieldProps(props);
    return createElement({
      children: props.children,
      component: styles.CheckboxField,
      htmlProps: CheckboxFieldProps,
    });
  },
  {
    attach: {
      useProps: useCheckboxFieldProps,
      displayName: 'CheckboxField',
    },
    themeKey: 'CheckboxField',
  }
);
