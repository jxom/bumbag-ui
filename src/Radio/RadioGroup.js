// @flow
import React from 'react';

import { RadioGroup as _RadioGroup } from './styled';
import Radio from './Radio';

type Props = {
  /** An accessible label for the radio group */
  a11yLabel?: string,
  className?: string,
  /** Default value of the radio group */
  defaultValue?: string | boolean | Object,
  /** Disables the radio group */
  disabled?: boolean,
  /** ID for the radio group */
  id?: string,
  name: string,
  /** Radio group options */
  options: Array<{ disabled: boolean, label: string, value: string | boolean | Object }>,
  /** State of the radio group. Can be any color in the palette. */
  state?: string,
  /** Controlled value of the radio group */
  value?: string,
  /** Function to invoke when radio group has changed */
  onChange?: Function
};

const RadioGroup = ({
  a11yLabel,
  className,
  defaultValue,
  disabled,
  id,
  onChange,
  options,
  name,
  state,
  value,
  ...props
}: Props) => (
  <_RadioGroup
    aria-describedby="label"
    aria-invalid={state === 'danger'}
    aria-label={a11yLabel}
    role="group"
    {...props}
  >
    {options.map((option, i) => (
      <Radio
        key={i} // eslint-disable-line
        checked={typeof value === 'undefined' ? undefined : JSON.stringify(option.value) === JSON.stringify(value)}
        defaultChecked={
          typeof defaultValue === 'undefined'
            ? undefined
            : JSON.stringify(option.value) === JSON.stringify(defaultValue)
        }
        disabled={disabled || option.disabled}
        name={name}
        label={option.label}
        onChange={onChange ? e => onChange(e.target.value) : undefined}
        state={state}
        value={option.value}
      />
    ))}
  </_RadioGroup>
);

RadioGroup.defaultProps = {
  a11yLabel: undefined,
  className: undefined,
  defaultValue: undefined,
  disabled: false,
  id: undefined,
  onChange: undefined,
  state: undefined,
  value: undefined
};

export default RadioGroup;
