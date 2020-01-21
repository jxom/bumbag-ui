import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { LayoutSet } from '../LayoutSet';
import { Radio, RadioProps } from '../Radio';

import * as styles from './styles';

export type LocalRadioGroupProps = {
  /** Default value of the radio group */
  defaultValue?: string;
  /** Disables the radio group */
  disabled?: boolean;
  isHorizontal?: boolean;
  name: string;
  /** Radio group options */
  options: Array<RadioProps>;
  /** State of the radio group. Can be any color in the palette. */
  state?: string;
  /** Controlled value of the radio group */
  value?: string;
  /** Function to invoke when radio group has changed */
  onChange?: React.FormEventHandler<HTMLInputElement>;
};
export type RadioGroupProps = BoxProps & LocalRadioGroupProps;

const useProps = createHook<RadioGroupProps>(
  (props, themeKey) => {
    const { defaultValue, disabled, onChange, options, overrides, name, state, value, ...restProps } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.RadioGroup,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className
    });

    return {
      role: 'radiogroup',
      ...boxProps,
      className,
      children: (
        <LayoutSet spacing="major-1">
          {options.map((option, i) => (
            <Radio
              key={i}
              {...option}
              checked={typeof value === 'undefined' ? undefined : option.value === value}
              defaultChecked={typeof defaultValue === 'undefined' ? undefined : option.value === defaultValue}
              name={name}
              onChange={onChange}
              overrides={overrides}
              state={state || option.state}
              disabled={disabled || option.disabled}
            />
          ))}
        </LayoutSet>
      )
    };
  },
  { themeKey: 'RadioGroup' }
);

export const RadioGroup = createComponent<RadioGroupProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'RadioGroup'
  }
);
