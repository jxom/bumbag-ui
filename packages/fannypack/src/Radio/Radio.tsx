import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useUniqueId } from '../utils';
import { Box, BoxProps } from '../Box';
import { Label } from '../Label';

import * as styles from './styles';

export type LocalRadioProps = {
  /** Automatically focus on the radio */
  autoFocus?: boolean;
  checked?: boolean;
  radioProps?: React.InputHTMLAttributes<any>;
  /** Is the radio checked by default? */
  defaultChecked?: boolean;
  /** Disables the radio */
  disabled?: boolean;
  /** Makes the radio required and sets aria-invalid to true */
  isRequired?: boolean;
  /** Radio label */
  label?: string;
  name?: string;
  /** State of the radio. Can be any color in the palette. */
  state?: string;
  /** Initial value of the radio */
  value?: boolean | string;
  /** Function to invoke when focus is lost */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** Function to invoke when radio has changed */
  onChange?: React.FormEventHandler<HTMLInputElement>;
  /** Function to invoke when radio is focused */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};
export type RadioProps = BoxProps & LocalRadioProps;

const useProps = createHook<RadioProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const {
      autoFocus,
      checked,
      defaultChecked,
      disabled,
      isRequired,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      overrides,
      radioProps,
      state,
      value,
      ...restProps
    } = props;

    const boxProps = Box.useProps({ ...restProps, overrides });

    const className = useClassName({
      style: styles.Radio,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className,
    });
    const radioIconClassName = useClassName({
      style: styles.RadioIcon,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Icon',
    });
    const hiddenRadioClassName = useClassName({
      style: styles.HiddenRadio,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'HiddenInput',
    });
    const radioLabelClassName = useClassName({
      style: styles.RadioLabel,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Label',
    });

    const labelId = useUniqueId('label');
    const radioId = useUniqueId('radio');

    return {
      ...boxProps,
      'aria-describedby': labelId,
      'aria-invalid': state === 'danger',
      'aria-required': isRequired,
      className,
      children: (
        <React.Fragment>
          <Box
            use="input"
            className={hiddenRadioClassName}
            // @ts-ignore
            autoFocus={autoFocus}
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            id={radioId}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            name={name}
            type="radio"
            // @ts-ignore
            value={value}
            overrides={overrides}
            {...radioProps}
          />
          <Box className={radioIconClassName} overrides={overrides} />
          {label && (
            <Label
              use="span"
              id={labelId}
              className={radioLabelClassName}
              htmlFor={radioId}
              overrides={overrides}
              marginLeft="minor-2"
            >
              {label}
            </Label>
          )}
        </React.Fragment>
      ),
    };
  },
  { themeKey: 'Radio' }
);

export const Radio = createComponent<RadioProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Radio',
    },
    defaultProps: {
      use: Label,
    },
    themeKey: 'Radio',
  }
);
