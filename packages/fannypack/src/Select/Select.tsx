import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { Size } from '../types';
import { useClassName, createComponent, createElement, createHook, pickCSSProps, omitCSSProps } from '../utils';
import { Box, BoxProps } from '../Box';
import { Icon, IconProps } from '../Icon';
import { Spinner, SpinnerProps } from '../Spinner';

import * as styles from './styles';

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
  options: Array<{ label: string; value: string; disabled?: boolean }>;
  /** Alters the size of the input. Can be "small", "medium" or "large" */
  size?: Size;
  /** Hint text to display */
  placeholder?: string;
  /** State of the input. Can be any color in the palette. */
  state?: string;
  /** Value of the input */
  value?: string;
  /** Function to invoke when focus is lost */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** Function to invoke when input has changed */
  onChange?: React.FormEventHandler<HTMLInputElement>;
  /** Function to invoke when input is focused */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};
export type SelectProps = BoxProps & LocalSelectProps;

const useProps = createHook<SelectProps>(
  (props, themeKey) => {
    const {
      disabled,
      isLoading,
      isRequired,
      onChange,
      options,
      placeholder: _placeholder,
      state,
      ...restProps
    } = props;

    let placeholder = _placeholder;
    if (isLoading && options.length === 0) {
      placeholder = 'Loading...';
    }

    const [isPlaceholderSelected, setIsPlaceholderSelected] = React.useState(Boolean(placeholder));
    const handleChange = React.useCallback(
      e => {
        setIsPlaceholderSelected(false);
        onChange && onChange(e);
      },
      [onChange]
    );

    const wrapperClassName = useClassName({
      style: styles.SelectWrapper,
      styleProps: props,
      themeKey: `${themeKey}.Wrapper`,
      prevClassName: restProps.className
    });
    const iconClassName = useClassName({
      style: styles.SelectIcon,
      styleProps: props,
      themeKey: `${themeKey}.Icon`
    });
    const spinnerClassName = useClassName({
      style: styles.SelectSpinner,
      styleProps: props,
      themeKey: `${themeKey}.Spinner`
    });

    const boxProps = Box.useProps({
      ...omitCSSProps(restProps),
      className: undefined,
      unstable_wrap: children => (
        <Box className={wrapperClassName} {...pickCSSProps(props)}>
          {children}
          {isLoading ? (
            <Spinner className={spinnerClassName} color="text" />
          ) : (
            <Icon className={iconClassName} icon="chevron-down" />
          )}
        </Box>
      )
    });

    const className = useClassName({
      style: styles.Select,
      styleProps: { ...props, isPlaceholderSelected },
      themeKey,
      prevClassName: boxProps.className
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
      )
    };
  },
  { themeKey: 'Select' }
);

export const Select = createComponent<SelectProps>(
  props => {
    const selectProps = useProps(props);

    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: selectProps
    });
  },
  {
    attach: {
      useProps
    },
    defaultProps: {
      use: 'select'
    },
    themeKey: 'Select'
  }
);
