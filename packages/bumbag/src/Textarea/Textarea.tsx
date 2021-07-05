import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { Size } from '../types';
import {
  useClassName,
  createComponent,
  createElement,
  createHook,
  mergeRefs,
  pickCSSProps,
  omitCSSProps,
  useLabelPlaceholder,
} from '../utils';
import { Box, BoxProps } from '../Box';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';
import { Text, TextProps } from '../Text';

import * as styles from './Textarea.styles';

export type LocalTextareaProps = {
  autoComplete?: string;
  /** Automatically focus on the textarea */
  autoFocus?: boolean;
  containLabel?: boolean;
  /** Default value of the textarea */
  defaultValue?: string | string[];
  /** Disables the textarea */
  disabled?: boolean;
  label?: string;
  /** Makes the textarea required and sets aria-invalid to true */
  isRequired?: boolean;
  /** Name of the textarea field */
  name?: string;
  /** Alters the size of the textarea. Can be "small", "medium" or "large" */
  size?: Size;
  /** If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the maximum number of characters (in UTF-16 code units) that the user can enter. For other control types, it is ignored. */
  maxLength?: number;
  /** If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the minimum number of characters (in UTF-16 code points) that the user can enter. For other control types, it is ignored. */
  minLength?: number;
  /** This prop indicates whether the user can enter more than one value. This attribute only applies when the type attribute is set to email or file. */
  multiple?: boolean;
  /** Regex pattern to apply to the textarea */
  pattern?: string;
  /** Hint text to display */
  placeholder?: string;
  /** This prop prevents the user from modifying the value of the textarea. It is ignored if the value of the type attribute is hidden, range, color, checkbox, radio, file, or a button type (such as button or submit). */
  readOnly?: boolean;
  /** Setting the value of this attribute to true indicates that the element needs to have its spelling and grammar checked. The value default indicates that the element is to act according to a default behavior, possibly based on the parent element's own spellcheck value. The value false indicates that the element should not be checked. */
  spellCheck?: boolean;
  /** Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set. */
  step?: number | string;
  /** State of the textarea. Can be any color in the palette. */
  state?: string;
  textareaRef?: React.Ref<any>;
  textareaProps?: Partial<TextareaProps>;
  /** Specify the type of textarea. */
  type?: string;
  /** Value of the textarea */
  value?: string | number | string[];
  /** Function to invoke when focus is lost */
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  /** Function to invoke when textarea has changed */
  onChange?: React.FormEventHandler<HTMLTextAreaElement>;
  /** Function to invoke when textarea is focused */
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
};
export type TextareaProps = Omit<BoxProps, 'onBlur' | 'onChange' | 'onFocus'> & LocalTextareaProps;

const useProps = createHook<TextareaProps>(
  (props, { themeKey }) => {
    const ref = React.useRef();

    const { containLabel, isRequired, state, textareaProps, textareaRef, ...restProps } = props;
    const label = props?.label || textareaProps?.label;

    const { isFocused, inputProps: labelPlaceholderInputProps } = useLabelPlaceholder({
      enabled: Boolean(label),
      ...props,
    });

    const wrapperClassName = useClassName({
      style: styles.TextareaWrapper,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Wrapper',
      prevClassName: restProps.className,
    });
    const labelWrapperClassName = useClassName({
      style: styles.LabelWrapper,
      styleProps: { ...props, isFocused },
      themeKey,
      themeKeySuffix: 'LabelWrapper',
    });
    const labelWrapperBackgroundClassName = useClassName({
      style: styles.LabelWrapperBackground,
      styleProps: { ...props, isFocused },
      themeKey,
      themeKeySuffix: 'LabelWrapperBackground',
    });

    const boxProps = Box.useProps({
      ...omitCSSProps(restProps),
      ...textareaProps,
      ...labelPlaceholderInputProps,
      className: undefined,
      elementRef: mergeRefs(ref, textareaRef, props.elementRef),
      wrapElement: (children) => (
        <Box className={wrapperClassName} {...pickCSSProps(props)}>
          {label && (
            <>
              {!containLabel && (
                <Box className={labelWrapperBackgroundClassName}>
                  <Text opacity="0">{label}</Text>
                </Box>
              )}
              {/*
                // @ts-ignore */}
              <Box className={labelWrapperClassName} onClick={() => ref?.current?.focus()}>
                <Text>{label}</Text>
              </Box>
            </>
          )}
          {children}
        </Box>
      ),
    });

    const className = useClassName({
      style: styles.Textarea,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className, 'aria-invalid': state === 'danger', 'aria-required': isRequired };
  },
  { defaultProps: { variant: 'bordered', type: 'text' }, themeKey: 'Textarea' }
);

export const Textarea = createComponent<TextareaProps>(
  (props) => {
    const textareaProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: { ...textareaProps, ...(props.mask ? { mask: props.mask } : {}) },
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Textarea',
    },
    defaultProps: {
      use: 'textarea',
    },
    themeKey: 'Textarea',
  }
);

////////////////////////////////////////////////////////////////

export type LocalTextareaFieldProps = {
  /** Additional props for the Textarea component */
  textareaProps?: TextareaProps;
};
export type TextareaFieldProps = BoxProps & FieldWrapperProps & TextareaProps & LocalTextareaFieldProps;

const useTextareaFieldProps = createHook<TextareaFieldProps>(
  (props, { themeKey }) => {
    const {
      children,
      autoComplete,
      autoFocus,
      containLabel,
      defaultValue,
      description,
      disabled,
      hint,
      textareaProps,
      isOptional,
      isRequired,
      label,
      name,
      size,
      mask,
      maxLength,
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
      textareaRef,
      variant,
      validationText,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.TextareaField,
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
            <Textarea
              autoComplete={autoComplete}
              autoFocus={autoFocus}
              containLabel={containLabel}
              defaultValue={defaultValue}
              disabled={disabled}
              isRequired={isRequired}
              name={name}
              size={size}
              mask={mask}
              maxLength={maxLength}
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
              variant={variant}
              textareaRef={textareaRef}
              {...elementProps}
              {...textareaProps}
            />
          )}
        </FieldWrapper>
      ),
    };
  },
  { themeKey: 'TextareaField' }
);

export const TextareaField = createComponent<TextareaFieldProps>(
  (props) => {
    const textareaFieldProps = useTextareaFieldProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: textareaFieldProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'TextareaField',
    },
    themeKey: 'TextareaField',
  }
);
