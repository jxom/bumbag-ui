import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import ConditionalWrap from 'conditional-wrap';

import { Omit } from '../types';
import Group from '../Group';
import Input, { LocalInputProps, InputProps, inputDefaultProps, inputPropTypes } from './Input';
import FieldWrapper, {
  LocalFieldWrapperProps,
  fieldWrapperDefaultProps,
  fieldWrapperPropTypes
} from '../FieldWrapper/FieldWrapper';

export type LocalInputFieldProps = Omit<LocalFieldWrapperProps, 'children'> &
  LocalInputProps & {
    /** Addon component to the input (before). Similar to the addon components in Input. */
    addonBefore?: React.ReactElement<any>;
    /** Addon component to the input (after). Similar to the addon components in Input. */
    addonAfter?: React.ReactElement<any>;
    /** If addonBefore or addonAfter exists, then the addons will render vertically. */
    isVertical?: boolean;
  };
export type InputFieldProps = LocalInputFieldProps & InputProps;

export const InputField: React.FunctionComponent<LocalInputFieldProps> = ({
  addonBefore,
  addonAfter,
  a11yId,
  description,
  hint,
  isFullWidth,
  isOptional,
  isRequired,
  isVertical,
  label,
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
    {({ elementProps }) => (
      <ConditionalWrap
        condition={addonBefore || addonAfter}
        wrap={(children: React.ReactNode) => <Group isVertical={isVertical}>{children}</Group>}
      >
        {addonBefore}
        <Input {...elementProps} {...props} />
        {addonAfter}
      </ConditionalWrap>
    )}
  </FieldWrapper>
);

InputField.propTypes = {
  addonBefore: PropTypes.element,
  addonAfter: PropTypes.element,
  isVertical: PropTypes.bool,
  ...fieldWrapperPropTypes,
  ...inputPropTypes
};
InputField.defaultProps = {
  addonBefore: undefined,
  addonAfter: undefined,
  isVertical: false,
  ...fieldWrapperDefaultProps,
  ...inputDefaultProps
};

// @ts-ignore
const C: React.FunctionComponent<InputFieldProps> = InputField;
export default C;
