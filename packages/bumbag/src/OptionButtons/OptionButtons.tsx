import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useOptionsState } from '../utils';
import { Box, BoxProps } from '../Box';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';
import { Group, GroupProps } from '../Group';
import { Rover } from '../Rover';

import { OptionButton, OptionButtonProps } from './OptionButton';
import * as styles from './OptionButtons.styles';

export type LocalOptionButtonsProps = {
  defaultValue?: Array<string> | string;
  disabled?: boolean;
  isFullWidth?: boolean;
  onBlur?: (values: Array<string> | string) => void;
  onChange?: (values: Array<string> | string, value: string) => void;
  options?: Array<OptionButtonProps & { label: string; value: string }>;
  palette?: OptionButtonProps['palette'];
  readOnly?: boolean;
  size?: OptionButtonProps['size'];
  state?: string;
  type: 'checkbox' | 'radio';
  value?: Array<string> | string;
};
export type OptionButtonsProps = GroupProps & LocalOptionButtonsProps;

const useProps = createHook<OptionButtonsProps>(
  (props, { themeKey }) => {
    const {
      borderRadius,
      children,
      defaultValue,
      disabled,
      isFullWidth,
      readOnly,
      onBlur,
      onChange,
      options,
      orientation,
      overrides,
      palette,
      size,
      type,
      value,
      verticalBelow,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.OptionButtons,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });
    const wrapperClassName = useClassName({
      style: styles.OptionButtonsWrapper,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Wrapper',
    });

    const { getOptionItemProps } = useOptionsState({
      defaultValue,
      onBlur,
      onChange,
      type,
      value,
    });

    return {
      ...boxProps,
      'aria-disabled': disabled,
      className,
      children: (
        <Rover.State>
          <Group
            className={wrapperClassName}
            borderRadius={borderRadius}
            orientation={orientation}
            verticalBelow={verticalBelow}
          >
            {options.map(({ label, ...option }, index) => (
              <Rover key={index}>
                {(roverProps) => (
                  <OptionButton
                    {...roverProps}
                    {...getOptionItemProps({ readOnly, value: option.value })}
                    disabled={disabled}
                    // @ts-ignore
                    isFullWidth={isFullWidth}
                    overrides={overrides}
                    palette={palette}
                    readOnly={readOnly}
                    size={size}
                    {...option}
                  >
                    {label}
                  </OptionButton>
                )}
              </Rover>
            ))}
          </Group>
        </Rover.State>
      ),
    };
  },
  { themeKey: 'OptionButtons' }
);

export const OptionButtons = createComponent<OptionButtonsProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps });
  },
  {
    attach: {
      useProps,
      displayName: 'OptionButtons',
    },
    themeKey: 'OptionButtons',
  }
);

//////////////////////////////////////////////////////////////////

export type LocalOptionButtonsFieldProps = {
  /** Additional props for the OptionButtons component */
  optionButtonsProps?: OptionButtonsProps;
};
export type OptionButtonsFieldProps = BoxProps & FieldWrapperProps & OptionButtonsProps & LocalOptionButtonsFieldProps;

const useOptionButtonsFieldProps = createHook<OptionButtonsFieldProps>(
  (props, { themeKey }) => {
    const {
      borderRadius,
      defaultValue,
      description,
      disabled,
      hint,
      isFullWidth,
      isOptional,
      isRequired,
      label,
      options,
      orientation,
      onBlur,
      onChange,
      overrides,
      palette,
      optionButtonsProps,
      readOnly,
      size,
      state,
      tooltip,
      tooltipTriggerComponent,
      type,
      value,
      validationText,
      verticalBelow,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.OptionButtonsField,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return {
      ...boxProps,
      className,
      children: (
        <FieldWrapper
          description={description}
          hint={hint}
          isOptional={isOptional}
          isRequired={isRequired}
          label={label}
          labelType="legend"
          overrides={overrides}
          state={state}
          tooltip={tooltip}
          tooltipTriggerComponent={tooltipTriggerComponent}
          validationText={validationText}
        >
          {({ elementProps }) => (
            <OptionButtons
              borderRadius={borderRadius}
              defaultValue={defaultValue}
              disabled={disabled}
              isFullWidth={isFullWidth}
              onBlur={onBlur}
              onChange={onChange}
              options={options}
              orientation={orientation}
              palette={palette}
              readOnly={readOnly}
              size={size}
              state={state}
              type={type}
              value={value}
              verticalBelow={verticalBelow}
              overrides={overrides}
              {...elementProps}
              {...optionButtonsProps}
            />
          )}
        </FieldWrapper>
      ),
    };
  },
  { themeKey: 'OptionButtonsField' }
);

export const OptionButtonsField = createComponent<OptionButtonsFieldProps>(
  (props) => {
    const htmlProps = useOptionButtonsFieldProps(props);
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
      displayName: 'OptionButtonsField',
    },
    defaultProps: {
      use: 'fieldset',
    },
    themeKey: 'OptionButtonsField',
  }
);
