import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
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

export interface Props {
  /** Addon component to the input (before). Similar to the addon components in Input. */
  addonBefore?: React.ReactElement<any>;
  /** Addon component to the input (after). Similar to the addon components in Input. */
  addonAfter?: React.ReactElement<any>;
  /** If addonBefore or addonAfter exists, then the addons will render vertically. */
  isVertical?: boolean;
}
export type LocalSelectFieldProps = Omit<LocalFieldWrapperProps, 'children'> & LocalSelectProps & Props;
export type SelectFieldProps = LocalSelectFieldProps & SelectProps;

export const SelectField: React.FunctionComponent<LocalSelectFieldProps> = ({
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
        <Select {...props} {...elementProps} />
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

export default SelectField;
