import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import ConditionalWrap from 'conditional-wrap';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Group, GroupProps } from '../Group';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';

import { SelectMenu, SelectMenuProps } from './SelectMenu';
import * as styles from './SelectMenu.styles';

export type LocalSelectMenuFieldProps = {
  /** Addon component to the input (before). Similar to the addon components in Input. */
  addonBefore?: React.ReactElement<any>;
  /** Addon component to the input (after). Similar to the addon components in Input. */
  addonAfter?: React.ReactElement<any>;
  /** Additional props for the SelectMenu component */
  selectMenuProps?: Partial<SelectMenuProps>;
  /** If addonBefore or addonAfter exists, then the addons will render vertically. */
  orientation?: 'vertical' | 'horizontal';
};
export type SelectMenuFieldProps = BoxProps & FieldWrapperProps & SelectMenuProps & LocalSelectMenuFieldProps;

const useProps = createHook<SelectMenuFieldProps>(
  (props, { themeKey }) => {
    const {
      addonAfter,
      addonBefore,
      buttonProps,
      selectMenuProps,
      cacheKey,
      containLabel,
      children,
      defaultValue,
      defer,
      description,
      disabled,
      disableClear,
      errorText,
      emptyText,
      hasSearch,
      hasTags,
      hint,
      isDropdown,
      isLoading,
      isMultiSelect,
      isOptional,
      isRequired,
      orientation,
      label,
      limit,
      loadingText,
      loadingMoreText,
      loadOptions,
      loadVariables,
      options,
      pagination,
      placeholder,
      renderError,
      renderEmpty,
      renderLoading,
      renderLoadingMore,
      renderOption,
      itemProps,
      popoverProps,
      dropdownMenuInitialState,
      searchInputProps,
      state,
      tagProps,
      tooltip,
      tooltipTriggerComponent,
      value,
      onChange,
      overrides,
      validationText,
      variant,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.SelectMenuField,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return {
      ...boxProps,
      className,
      children: (
        <FieldWrapper
          description={description}
          hint={hint}
          isOptional={isOptional}
          isRequired={isRequired}
          label={label}
          overrides={overrides}
          state={state}
          tooltip={tooltip}
          tooltipTriggerComponent={tooltipTriggerComponent}
          validationText={validationText}
          variant={variant}
        >
          {({ elementProps }) => (
            <ConditionalWrap
              condition={Boolean(addonBefore || addonAfter)}
              wrap={(children: React.ReactNode) => (
                <Group orientation={orientation} overrides={overrides}>
                  {children}
                </Group>
              )}
            >
              <React.Fragment>
                {addonBefore}
                <SelectMenu
                  flex={addonBefore || addonAfter ? '1' : undefined}
                  cacheKey={cacheKey}
                  containLabel={containLabel}
                  defer={defer}
                  disabled={disabled}
                  disableClear={disableClear}
                  hasTags={hasTags}
                  hasSearch={hasSearch}
                  isDropdown={isDropdown}
                  isLoading={isLoading}
                  isMultiSelect={isMultiSelect}
                  limit={limit}
                  loadOptions={loadOptions}
                  loadVariables={loadVariables}
                  options={options}
                  onChange={onChange}
                  pagination={pagination}
                  placeholder={placeholder}
                  value={value}
                  errorText={errorText}
                  emptyText={emptyText}
                  loadingText={loadingText}
                  loadingMoreText={loadingMoreText}
                  renderError={renderError}
                  renderEmpty={renderEmpty}
                  renderLoading={renderLoading}
                  renderLoadingMore={renderLoadingMore}
                  renderOption={renderOption}
                  buttonProps={buttonProps}
                  itemProps={itemProps}
                  popoverProps={popoverProps}
                  searchInputProps={searchInputProps}
                  tagProps={tagProps}
                  dropdownMenuInitialState={dropdownMenuInitialState}
                  state={state}
                  overrides={overrides}
                  variant={variant}
                  {...elementProps}
                  {...selectMenuProps}
                />
                {addonAfter}
              </React.Fragment>
            </ConditionalWrap>
          )}
        </FieldWrapper>
      ),
    };
  },
  { themeKey: 'SelectMenuField' }
);

export const SelectMenuField = createComponent<SelectMenuFieldProps>(
  (props) => {
    const SelectMenuFieldProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: SelectMenuFieldProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'SelectMenuField',
    },
    themeKey: 'SelectMenuField',
  }
);
