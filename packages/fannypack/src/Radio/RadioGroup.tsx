import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts';

import { formikField, reduxFormField } from '../adaptors/fields';
import { RadioGroup as _RadioGroup } from './styled';
import Radio from './Radio';

export type LocalRadioGroupProps = {
  /** An accessible ID for the radio group */
  a11yId?: string;
  /** An accessible label for the radio group */
  a11yLabel?: string;
  className?: string;
  /** Default value of the radio group */
  defaultValue?: string;
  /** Disables the radio group */
  disabled?: boolean;
  isHorizontal?: boolean;
  name: string;
  /** Radio group options */
  options: Array<{ disabled?: boolean; label: string; value: string }>;
  /** State of the radio group. Can be any color in the palette. */
  state?: string;
  /** Controlled value of the radio group */
  value?: string;
  /** Function to invoke when radio group has changed */
  onChange?: React.FormEventHandler<HTMLInputElement>;
};
export type RadioGroupProps = ReakitBoxProps & LocalRadioGroupProps;

export const RadioGroup: React.FunctionComponent<LocalRadioGroupProps> & {
  Formik: React.FunctionComponent<RadioGroupFieldProps>;
  ReduxForm: React.FunctionComponent<RadioGroupFieldProps>;
} = ({ a11yId, a11yLabel, className, defaultValue, disabled, onChange, options, name, state, value, ...props }) => (
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
        a11yId={a11yId}
        checked={typeof value === 'undefined' ? undefined : option.value === value}
        defaultChecked={typeof defaultValue === 'undefined' ? undefined : option.value === defaultValue}
        disabled={disabled || option.disabled}
        name={name}
        label={option.label}
        onChange={onChange}
        state={state}
        value={option.value}
      />
    ))}
  </_RadioGroup>
);

RadioGroup.Formik = formikField(RadioGroup);
RadioGroup.ReduxForm = reduxFormField(RadioGroup);

export const radioGroupPropTypes = {
  a11yId: PropTypes.string,
  a11yLabel: PropTypes.string,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  state: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
RadioGroup.propTypes = radioGroupPropTypes;

export const radioGroupDefaultProps = {
  a11yId: undefined,
  a11yLabel: undefined,
  className: undefined,
  defaultValue: undefined,
  disabled: false,
  isHorizontal: false,
  onChange: undefined,
  state: undefined,
  value: undefined
};
RadioGroup.defaultProps = radioGroupDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<RadioGroupProps> = RadioGroup;
export default C;
