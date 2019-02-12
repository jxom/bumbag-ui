import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import ConditionalWrap from 'conditional-wrap';
// @ts-ignore
import _omit from 'lodash/omit';

import Group from '../Group';
import Select, { LocalSelectProps, SelectProps, selectPropTypes, selectDefaultProps } from './Select';
import FieldWrapper, {
  LocalFieldWrapperProps,
  fieldWrapperPropTypes,
  fieldWrapperDefaultProps
} from '../FieldWrapper/FieldWrapper';
import { Omit } from '../types';

export type LocalSelectFieldProps = Omit<LocalFieldWrapperProps, 'children'> &
  LocalSelectProps & {
    /** Addon component to the input (before). Similar to the addon components in Input. */
    addonBefore?: React.ReactElement<any>;
    /** Addon component to the input (after). Similar to the addon components in Input. */
    addonAfter?: React.ReactElement<any>;
    /** If addonBefore or addonAfter exists, then the addons will render vertically. */
    isVertical?: boolean;
  };
export type SelectFieldProps = LocalSelectFieldProps & SelectProps;

export const SelectField: React.FunctionComponent<LocalSelectFieldProps> = ({
  a11yLabel,
  a11yId,
  addonBefore,
  addonAfter,
  autoComplete,
  autoFocus,
  className,
  description,
  defaultValue,
  disabled,
  hint,
  isLoading,
  isFullWidth,
  isOptional,
  isRequired,
  isVertical,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  options,
  placeholder,
  size,
  state,
  validationText,
  value,
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
      <ConditionalWrap
        condition={addonBefore || addonAfter}
        wrap={(children: React.ReactNode) => <Group isVertical={isVertical}>{children}</Group>}
      >
        {addonBefore}
        <Select
          a11yId={a11yId}
          a11yLabel={a11yLabel}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          className={className}
          defaultValue={defaultValue}
          disabled={disabled}
          isFullWidth={isFullWidth}
          isLoading={isLoading}
          isRequired={isRequired}
          name={name}
          options={options}
          placeholder={placeholder}
          size={size}
          state={state}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          {...elementProps}
        />
        {addonAfter}
      </ConditionalWrap>
    )}
  </FieldWrapper>
);

SelectField.propTypes = {
  addonBefore: PropTypes.element,
  addonAfter: PropTypes.element,
  isVertical: PropTypes.bool,
  ..._omit(fieldWrapperPropTypes, 'children'),
  ...selectPropTypes
};

SelectField.defaultProps = {
  addonBefore: undefined,
  addonAfter: undefined,
  isVertical: false,
  ...fieldWrapperDefaultProps,
  ...selectDefaultProps
};

// @ts-ignore
const C: React.FunctionComponent<SelectFieldProps> = SelectField;
export default C;
