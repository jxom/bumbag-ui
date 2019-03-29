import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import ConditionalWrap from 'conditional-wrap';
// @ts-ignore
import _omit from 'lodash/omit';

import Group from '../Group';
import SelectMenu, {
  LocalSelectMenuProps,
  SelectMenuProps,
  selectMenuPropTypes,
  selectMenuDefaultProps
} from './SelectMenu';
import FieldWrapper, {
  LocalFieldWrapperProps,
  fieldWrapperPropTypes,
  fieldWrapperDefaultProps
} from '../FieldWrapper/FieldWrapper';
import { Omit } from '../types';
import { getUniqueId } from '../uniqueId';

export type LocalSelectMenuFieldProps = Omit<LocalFieldWrapperProps, 'children'> &
  LocalSelectMenuProps & {
    /** Addon component to the input (before). Similar to the addon components in Input. */
    addonBefore?: React.ReactElement<any>;
    /** Addon component to the input (after). Similar to the addon components in Input. */
    addonAfter?: React.ReactElement<any>;
    /** If addonBefore or addonAfter exists, then the addons will render vertically. */
    isVertical?: boolean;
  };
export type SelectMenuFieldProps = SelectMenuProps & LocalSelectMenuFieldProps;

export const SelectMenuField: React.FunctionComponent<LocalSelectMenuFieldProps> = ({
  a11yId,
  addonBefore,
  addonAfter,
  className,
  defaultKey,
  defaultKeys,
  defaultOption,
  defaultOptions,
  description,
  emptyText,
  filterOptions,
  hint,
  isDropdown,
  isLoading,
  isMultiSelect,
  isOptional,
  isRequired,
  isSearchable,
  isVertical,
  label,
  loadQuery,
  loadOptions,
  onChange,
  options,
  placeholder,
  renderBottomActions,
  renderEmpty,
  renderError,
  renderOption,
  renderValue,
  searchInputProps,
  state,
  validationText,
  value,
  useTags,
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
        <SelectMenu
          id={a11yId}
          className={className}
          defaultKey={defaultKey}
          defaultKeys={defaultKeys}
          defaultOption={defaultOption}
          defaultOptions={defaultOptions}
          emptyText={emptyText}
          filterOptions={filterOptions}
          isDropdown={isDropdown}
          isLoading={isLoading}
          isMultiSelect={isMultiSelect}
          isRequired={isRequired}
          isSearchable={isSearchable}
          loadQuery={loadQuery}
          loadOptions={loadOptions}
          // @ts-ignore
          onChange={onChange}
          options={options}
          placeholder={placeholder}
          renderBottomActions={renderBottomActions}
          renderEmpty={renderEmpty}
          renderError={renderError}
          renderOption={renderOption}
          renderValue={renderValue}
          searchInputProps={searchInputProps}
          state={state}
          // @ts-ignore
          value={value}
          useTags={useTags}
          {...elementProps}
        />
        {addonAfter}
      </ConditionalWrap>
    )}
  </FieldWrapper>
);

SelectMenuField.propTypes = {
  addonBefore: PropTypes.element,
  addonAfter: PropTypes.element,
  isVertical: PropTypes.bool,
  ..._omit(fieldWrapperPropTypes, 'children'),
  ...selectMenuPropTypes
};

SelectMenuField.defaultProps = {
  ...fieldWrapperDefaultProps,
  ...selectMenuDefaultProps,
  addonBefore: undefined,
  addonAfter: undefined,
  a11yId: getUniqueId('SelectMenuField'),
  isVertical: false
};

// @ts-ignore
const C: React.FunctionComponent<SelectMenuFieldProps> = SelectMenuField;
export default C;
