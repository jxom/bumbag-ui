import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
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
  };
export type SwitchFieldProps = LocalSwitchFieldProps & SwitchProps;

export const SwitchField: React.FunctionComponent<LocalSwitchFieldProps> = ({
  a11yId,
  description,
  hint,
  isFullWidth,
  isOptional,
  isRequired,
  label,
  switchLabel,
  state,
  validationText,
  ...props
}) => (
  <FieldWrapper
    a11yId={a11yId}
    description={description}
    hint={hint}
    isFullWidth={isFullWidth}
    isOptional={isOptional}
    isRequired={isRequired}
    label={label}
    state={state}
    validationText={validationText}
  >
    {({ elementProps }) => <Switch label={switchLabel} {...props} {...elementProps} />}
  </FieldWrapper>
);

SwitchField.propTypes = {
  a11yId: PropTypes.string,
  switchLabel: PropTypes.string,
  ..._omit(fieldWrapperPropTypes, 'children'),
  ...switchPropTypes
};

SwitchField.defaultProps = {
  a11yId: undefined,
  switchLabel: undefined,
  ...fieldWrapperDefaultProps,
  ...switchDefaultProps
};

export default SwitchField;
