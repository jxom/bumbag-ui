import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
// @ts-ignore
import InputMask from 'react-input-mask';
import ConditionalWrap from 'conditional-wrap';

import { Size } from '../types';
import { useClassName, createComponent, createElement, createHook, pickCSSProps, omitCSSProps } from '../utils';
import { Box, BoxProps } from '../Box';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';
import { Group } from '../Group';
import { Icon, IconProps } from '../Icon';
import { Spinner } from '../Spinner';

import * as styles from './Input.styles';

export type LocalInputProps = {
  after?: React.ReactElement<any>;
  autoComplete?: string;
  /** Automatically focus on the input */
  autoFocus?: boolean;
  before?: React.ReactElement<any>;
  /** Default value of the input */
  defaultValue?: string | string[];
  /** Disables the input */
  disabled?: boolean;
  inputProps?: Partial<InputProps>;
  inputRef?: React.Ref<any>;
  /** Adds a cute loading indicator to the input field */
  isLoading?: boolean;
  /** Makes the input required and sets aria-invalid to true */
  isRequired?: boolean;
  /** Name of the input field */
  name?: string;
  /** Alters the size of the input. Can be "small", "medium" or "large" */
  size?: Size;
  mask?: string;
  /** The maximum (numeric or date-time) value for the input. Must not be less than its minimum (min attribute) value. */
  max?: number | string;
  /** If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the maximum number of characters (in UTF-16 code units) that the user can enter. For other control types, it is ignored. */
  maxLength?: number;
  /** The minimum (numeric or date-time) value for this input, which must not be greater than its maximum (max attribute) value. */
  min?: number | string;
  /** If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the minimum number of characters (in UTF-16 code points) that the user can enter. For other control types, it is ignored. */
  minLength?: number;
  /** This prop indicates whether the user can enter more than one value. This attribute only applies when the type attribute is set to email or file. */
  multiple?: boolean;
  /** Regex pattern to apply to the input */
  pattern?: string;
  /** Hint text to display */
  placeholder?: string;
  /** This prop prevents the user from modifying the value of the input. It is ignored if the value of the type attribute is hidden, range, color, checkbox, radio, file, or a button type (such as button or submit). */
  readOnly?: boolean;
  /** Setting the value of this attribute to true indicates that the element needs to have its spelling and grammar checked. The value default indicates that the element is to act according to a default behavior, possibly based on the parent element's own spellcheck value. The value false indicates that the element should not be checked. */
  spellCheck?: boolean;
  /** Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set. */
  step?: number | string;
  /** State of the input. Can be any color in the palette. */
  state?: string;
  /** Specify the type of input. */
  type?: string;
  /** Value of the input */
  value?: string | number | string[];
  /** Function to invoke when focus is lost */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** Function to invoke when input has changed */
  onChange?: React.FormEventHandler<HTMLInputElement>;
  /** Function to invoke when input is focused */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};
export type InputProps = Omit<BoxProps, 'onBlur' | 'onChange' | 'onFocus'> & LocalInputProps;

const useProps = createHook<InputProps>(
  (props, { themeKey }) => {
    const { before, after, inputProps, inputRef, isLoading, isRequired, state, ...restProps } = props;

    const wrapperClassName = useClassName({
      style: styles.InputWrapper,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Wrapper',
      prevClassName: restProps.className,
    });
    const spinnerClassName = useClassName({
      style: styles.InputSpinner,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Spinner',
    });
    const boxProps = Box.useProps({
      ...omitCSSProps(restProps),
      ...inputProps,
      className: undefined,
      elementRef: inputRef || props.elementRef,
      wrapElement: (children) => (
        <Box className={wrapperClassName} {...pickCSSProps(props)}>
          {before && (
            <Box display="inline-flex" position="absolute" zIndex="3" height="100%">
              {before}
            </Box>
          )}
          {after && (
            <Box display="inline-flex" position="absolute" right="0" zIndex="3" height="100%">
              {after}
            </Box>
          )}
          {children}
          {isLoading && <Spinner className={spinnerClassName} color="text" />}
        </Box>
      ),
    });

    const className = useClassName({
      style: styles.Input,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className, 'aria-invalid': state === 'danger', 'aria-required': isRequired };
  },
  { defaultProps: { type: 'text' }, themeKey: 'Input' }
);

export const Input = createComponent<InputProps>(
  (props) => {
    const inputProps = useProps(props);

    let use = props.use;
    if (props.mask) {
      use = InputMask;
    }

    return createElement({
      children: props.children,
      component: ReakitBox,
      use,
      htmlProps: { ...inputProps, ...(props.mask ? { mask: props.mask } : {}) },
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Input',
    },
    defaultProps: {
      use: 'input',
    },
    themeKey: 'Input',
  }
);

////////////////////////////////////////////////////////////////

export function InputIcon(props: IconProps) {
  const className = useClassName({
    style: styles.InputIcon,
    styleProps: props,
    themeKey: 'Input.Icon',
    prevClassName: props.className,
  });

  return <Icon color="gray200" {...props} className={className} />;
}

////////////////////////////////////////////////////////////////

export type LocalInputFieldProps = {
  /** Addon component to the input (before). Similar to the addon components in Input. */
  addonBefore?: React.ReactElement<any>;
  /** Addon component to the input (after). Similar to the addon components in Input. */
  addonAfter?: React.ReactElement<any>;
  /** Additional props for the Input component */
  inputProps?: InputProps;
  /** If addonBefore or addonAfter exists, then the addons will render vertically. */
  orientation?: 'vertical' | 'horizontal';
};
export type InputFieldProps = BoxProps & FieldWrapperProps & InputProps & LocalInputFieldProps;

const useInputFieldProps = createHook<InputFieldProps>(
  (props, { themeKey }) => {
    const {
      addonAfter,
      addonBefore,
      children,
      after,
      autoComplete,
      autoFocus,
      before,
      defaultValue,
      description,
      disabled,
      hint,
      inputRef,
      inputProps,
      isLoading,
      isOptional,
      isRequired,
      orientation,
      label,
      name,
      size,
      mask,
      max,
      maxLength,
      min,
      minLength,
      multiple,
      pattern,
      placeholder,
      readOnly,
      spellCheck,
      step,
      state,
      tooltip,
      tooltipTriggerComponent,
      type,
      value,
      onBlur,
      onChange,
      onFocus,
      overrides,
      validationText,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.InputField,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });
    const groupClassName = useClassName({
      style: styles.InputFieldGroup,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Group',
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
                <Group className={groupClassName} orientation={orientation} overrides={overrides}>
                  {children}
                </Group>
              )}
            >
              <React.Fragment>
                {addonBefore}
                <Input
                  after={after}
                  autoComplete={autoComplete}
                  autoFocus={autoFocus}
                  before={before}
                  defaultValue={defaultValue}
                  disabled={disabled}
                  inputProps={inputProps}
                  inputRef={inputRef}
                  isLoading={isLoading}
                  isRequired={isRequired}
                  name={name}
                  size={size}
                  mask={mask}
                  max={max}
                  maxLength={maxLength}
                  min={min}
                  minLength={minLength}
                  multiple={multiple}
                  pattern={pattern}
                  placeholder={placeholder}
                  readOnly={readOnly}
                  spellCheck={spellCheck}
                  step={step}
                  state={state}
                  type={type}
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
  { defaultProps: { orientation: 'horizontal' }, themeKey: 'InputField' }
);

export const InputField = createComponent<InputFieldProps>(
  (props) => {
    const inputFieldProps = useInputFieldProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: inputFieldProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'InputField',
    },
    themeKey: 'InputField',
  }
);
