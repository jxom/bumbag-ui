import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import ConditionalWrap from 'conditional-wrap';

import { Size } from '../types';
import { useClassName, createComponent, createElement, createHook, pickCSSProps, omitCSSProps } from '../utils';
import { Box, BoxProps } from '../Box';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';

import * as styles from './Select.styles';

export type LocalSelectProps = {
  /** Automatically focus on the input */
  autoFocus?: boolean;
  /** Default value of the input */
  defaultValue?: string;
  /** Disables the input */
  disabled?: boolean;
  /** Adds a cute loading indicator to the input field */
  isLoading?: boolean;
  /** Makes the input required and sets aria-invalid to true */
  isRequired?: boolean;
  /** Name of the input field */
  name?: string;
  options: Array<{ label: string; value: any; disabled?: boolean }>;
  /** Alters the size of the input. Can be "small", "medium" or "large" */
  size?: Size;
  /** Hint text to display */
  placeholder?: string;
  selectProps?: Partial<SelectProps>;
  selectRef?: React.Ref<any>;
  /** State of the input. Can be any color in the palette. */
  state?: string;
  /** Value of the input */
  value?: any;
  /** Function to invoke when focus is lost */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** Function to invoke when input has changed */
  onChange?: React.FormEventHandler<HTMLInputElement>;
  /** Function to invoke when input is focused */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};
export type SelectProps = Omit<BoxProps, 'onBlur' | 'onChange' | 'onFocus'> & LocalSelectProps;

const useProps = createHook<SelectProps>(
  (props, { themeKey }) => {
    const {
      disabled,
      isLoading,
      isRequired,
      onChange,
      options,
      placeholder: _placeholder,
      selectProps,
      selectRef,
      state,
      ...restProps
    } = props;

    let placeholder = _placeholder;
    if (isLoading && options.length === 0) {
      placeholder = 'Loading...';
    }

    const [isPlaceholderSelected, setIsPlaceholderSelected] = React.useState(Boolean(placeholder));
    const handleChange = React.useCallback(
      (e) => {
        setIsPlaceholderSelected(false);
        onChange && onChange(e);
      },
      [onChange]
    );

    const wrapperClassName = useClassName({
      style: styles.SelectWrapper,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Wrapper',
      prevClassName: restProps.className,
    });
    const iconClassName = useClassName({
      style: styles.SelectIcon,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Icon',
    });
    const spinnerClassName = useClassName({
      style: styles.SelectSpinner,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Spinner',
    });

    const boxProps = Box.useProps({
      ...omitCSSProps(restProps),
      ...selectProps,
      className: undefined,
      elementRef: selectRef || props.elementRef,
      wrapElement: (children) => (
        <Box className={wrapperClassName} {...pickCSSProps(props)}>
          {children}
          {isLoading ? (
            <Spinner className={spinnerClassName} color="text" />
          ) : (
            <Icon className={iconClassName} icon="chevron-down" />
          )}
        </Box>
      ),
    });

    const className = useClassName({
      style: styles.Select,
      styleProps: { ...props, isPlaceholderSelected },
      themeKey,
      prevClassName: boxProps.className,
    });

    return {
      ...boxProps,
      className,
      'aria-invalid': state === 'danger',
      'aria-required': isRequired,
      disabled,
      onChange: handleChange,
      children: (
        <React.Fragment>
          {placeholder && (
            <option disabled={typeof restProps.value !== 'undefined'} value="">
              {placeholder}
            </option>
          )}
          {options.map((option, i) => (
            <option
              key={i} // eslint-disable-line
              disabled={disabled || option.disabled}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </React.Fragment>
      ),
    };
  },
  { themeKey: 'Select' }
);

export const Select = createComponent<SelectProps>(
  (props) => {
    const selectProps = useProps(props);

    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: selectProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Select',
    },
    defaultProps: {
      use: 'select',
    },
    themeKey: 'Select',
  }
);

////////////////////////////////////////////////////////////////

export type LocalSelectFieldProps = {
  /** Addon component to the input (before). Similar to the addon components in Input. */
  addonBefore?: React.ReactElement<any>;
  /** Addon component to the input (after). Similar to the addon components in Input. */
  addonAfter?: React.ReactElement<any>;
  /** Additional props for the Select component */
  selectProps?: SelectProps;
  /** If addonBefore or addonAfter exists, then the addons will render vertically. */
  orientation?: 'vertical' | 'horizontal';
};
export type SelectFieldProps = BoxProps & FieldWrapperProps & SelectProps & LocalSelectFieldProps;

const useSelectFieldProps = createHook<SelectFieldProps>(
  (props, { themeKey }) => {
    const {
      addonAfter,
      addonBefore,
      children,
      autoFocus,
      defaultValue,
      description,
      disabled,
      hint,
      selectProps,
      isLoading,
      isOptional,
      isRequired,
      orientation,
      label,
      name,
      options,
      size,
      placeholder,
      state,
      tooltip,
      tooltipTriggerComponent,
      value,
      onBlur,
      onChange,
      onFocus,
      overrides,
      selectRef,
      validationText,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.SelectField,
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
          overrides={overrides}
          state={state}
          tooltip={tooltip}
          tooltipTriggerComponent={tooltipTriggerComponent}
          validationText={validationText}
        >
          {({ elementProps }) => (
            <ConditionalWrap
              condition={Boolean(addonBefore || addonAfter)}
              wrap={(children: React.ReactNode) => (
                <Group orientation={orientation} overrides={overrides}>
                  {children}
                </Group>
              )}
            >
              <React.Fragment>
                {addonBefore}
                <Select
                  autoFocus={autoFocus}
                  defaultValue={defaultValue}
                  disabled={disabled}
                  isLoading={isLoading}
                  isRequired={isRequired}
                  name={name}
                  size={size}
                  options={options}
                  placeholder={placeholder}
                  selectProps={selectProps}
                  selectRef={selectRef}
                  state={state}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  onFocus={onFocus}
                  overrides={overrides}
                  {...elementProps}
                />
                {addonAfter}
              </React.Fragment>
            </ConditionalWrap>
          )}
        </FieldWrapper>
      ),
    };
  },
  { themeKey: 'SelectField' }
);

export const SelectField = createComponent<SelectFieldProps>(
  (props) => {
    const SelectFieldProps = useSelectFieldProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: SelectFieldProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'SelectField',
    },
    themeKey: 'SelectField',
  }
);
