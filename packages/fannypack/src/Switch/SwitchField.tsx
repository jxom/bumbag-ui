import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import _omit from 'lodash/omit';

import FieldWrapper, {
  LocalFieldWrapperProps,
  fieldWrapperPropTypes,
  fieldWrapperDefaultProps
} from '../FieldWrapper/FieldWrapper';
import { Omit } from '../types';
import Switch, { LocalSwitchProps, SwitchProps, switchPropTypes, switchDefaultProps } from './Switch';

export type LocalSwitchFieldProps = Omit<LocalFieldWrapperProps, 'children'> &
  LocalSwitchProps & {
    a11yId?: string;
    /** Switch label */
    switchLabel?: string;
    switchProps?: LocalSwitchProps;
  };
export type SwitchFieldProps = LocalSwitchFieldProps & SwitchProps;

export const SwitchField: React.FunctionComponent<LocalSwitchFieldProps> = ({
  a11yId,
  description,
  hint,
  isOptional,
  isRequired,
  label,
  switchLabel,
  state,
  validationText,
  autoFocus,
  checked,
  className,
  defaultChecked,
  disabled,
  id,
  name,
  palette,
  value,
  onBlur,
  onChange,
  onFocus,
  ...props
}) => (
  <FieldWrapper
    a11yId={a11yId}
    description={description}
    hint={hint}
    isOptional={isOptional}
    isRequired={isRequired}
    label={label}
    state={state}
    validationText={validationText}
    {...props}
  >
    {({ elementProps }) => (
      <Switch
        label={switchLabel}
        autoFocus={autoFocus}
        checked={checked}
        className={className}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id}
        isRequired={isRequired}
        name={name}
        palette={palette}
        state={state}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        {...elementProps}
      />
    )}
  </FieldWrapper>
);

export const switchFieldPropTypes = {
  a11yId: PropTypes.string,
  switchLabel: PropTypes.string,
  switchProps: PropTypes.shape(switchPropTypes),
  ..._omit(fieldWrapperPropTypes, 'children'),
  ...switchPropTypes
};
SwitchField.propTypes = switchFieldPropTypes;

export const switchFieldDefaultProps = {
  a11yId: undefined,
  switchLabel: undefined,
  switchProps: {},
  ...fieldWrapperDefaultProps,
  ...switchDefaultProps
};
SwitchField.defaultProps = switchFieldDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<SwitchFieldProps> = SwitchField;
export default C;
