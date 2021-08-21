import * as React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
import { createComponent, createElement, createHook, useOptionsState } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import { SetProps } from '../Set';
import { SwitchProps } from './Switch';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';
import * as styles from './Switch.styles';

export type LocalSwitchGroupProps = {
  /** Alignment of the switch group */
  align?: 'left' | 'right';
  /** Default value(s) of the switch group */
  defaultValue?: Array<string>;
  /** Disables the switch group */
  disabled?: boolean;
  /** Switch group options */
  options: Array<SwitchProps & { value: string }>;
  /** Are the switch inputs layed out horizontally or vertically? */
  orientation?: 'vertical' | 'horizontal';
  /** Color of the switch group. Can be any color in the palette. */
  palette?: string;
  spacing?: SetProps['spacing'];
  /** State of the switch group. Can be any color in the palette. */
  state?: string;
  /** Controlled value of the switch group */
  value?: Array<string>;
  /** Function to invoke when switch group has changed */
  onChange?: (value: Array<string>, targetValue: string) => void;
  /** Overrides for the SwitchGroup `Set` component. */
  setProps?: Partial<SetProps>;
};
export type SwitchGroupProps = BoxProps & RNViewProps & LocalSwitchGroupProps;

const useProps = createHook<SwitchGroupProps>(
  (props) => {
    const {
      align,
      colorMode,
      defaultValue,
      disabled,
      onChange,
      options,
      orientation,
      overrides,
      palette,
      spacing,
      state,
      value,
      variant,
      setProps,
      ...restProps
    } = props;

    ////////////////////////////////////////////

    const boxProps = Box.useProps(props);

    ////////////////////////////////////////////

    const { getOptionItemProps } = useOptionsState({
      defaultValue,
      onChange,
      type: 'checkbox',
      value,
    });

    ////////////////////////////////////////////

    return {
      ...boxProps,
      children: (
        <styles.SwitchGroupSet
          colorMode={colorMode}
          orientation={orientation}
          overrides={overrides}
          spacing={spacing}
          {...setProps}
        >
          {options.map((option: any, i) => (
            <styles.SwitchGroupItem
              key={i} // eslint-disable-line
              {...option}
              {...getOptionItemProps({ value: option.value })}
              colorMode={colorMode}
              overrides={overrides}
              // @ts-ignore
              align={align}
              state={state || option.state}
              palette={palette || option.palette}
              disabled={disabled || option.disabled}
              variant={variant}
              width={orientation === 'vertical' ? '100%' : undefined}
            />
          ))}
        </styles.SwitchGroupSet>
      ),
    };
  },
  { defaultProps: { orientation: 'vertical', spacing: 'minor-2' }, themeKey: 'native.SwitchGroup' }
);

export const SwitchGroup = createComponent<SwitchGroupProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.SwitchGroup,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.SwitchGroup',
    },
    themeKey: 'native.SwitchGroup',
  }
);

////////////////////////////////////////////////////////////////

export type LocalSwitchGroupFieldProps = {
  /** Additional props for the Switch component */
  switchGroupProps?: Partial<SwitchGroupProps>;
};
export type SwitchGroupFieldProps = BoxProps & FieldWrapperProps & SwitchGroupProps & LocalSwitchGroupFieldProps;

const useSwitchGroupFieldProps = createHook<SwitchGroupFieldProps>(
  (props) => {
    const {
      align,
      colorMode,
      defaultValue,
      description,
      disabled,
      hint,
      isOptional,
      isRequired,
      label,
      options,
      onChange,
      orientation,
      overrides,
      palette,
      spacing,
      setProps,
      state,
      switchGroupProps,
      value,
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
          <SwitchGroup
            align={align}
            colorMode={colorMode}
            defaultValue={defaultValue}
            disabled={disabled}
            onChange={onChange}
            options={options}
            orientation={orientation}
            palette={palette}
            spacing={spacing}
            setProps={setProps}
            state={state}
            value={value}
            variant={variant}
            overrides={overrides}
            {...switchGroupProps}
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
    themeKey: 'SwitchGroupField',
  }
);

export const SwitchGroupField = createComponent<SwitchGroupFieldProps>(
  (props) => {
    const SwitchGroupFieldProps = useSwitchGroupFieldProps(props);
    return createElement({
      children: props.children,
      component: styles.SwitchGroupField,
      htmlProps: SwitchGroupFieldProps,
    });
  },
  {
    attach: {
      useProps: useSwitchGroupFieldProps,
      displayName: 'SwitchGroupField',
    },
    themeKey: 'SwitchGroupField',
  }
);
