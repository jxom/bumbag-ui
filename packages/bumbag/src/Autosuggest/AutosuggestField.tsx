import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import ConditionalWrap from 'conditional-wrap';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Group, GroupProps } from '../Group';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';

import { Autosuggest, AutosuggestProps } from './Autosuggest';
import * as styles from './Autosuggest.styles';

export type LocalAutosuggestFieldProps = {
  /** Addon component to the input (before). Similar to the addon components in Input. */
  addonBefore?: React.ReactElement<any>;
  /** Addon component to the input (after). Similar to the addon components in Input. */
  addonAfter?: React.ReactElement<any>;
  /** Additional props for the Autosuggest component */
  autosuggestProps?: Partial<AutosuggestProps>;
  /** If addonBefore or addonAfter exists, then the addons will render vertically. */
  orientation?: 'vertical' | 'horizontal';
};
export type AutosuggestFieldProps = BoxProps & FieldWrapperProps & AutosuggestProps & LocalAutosuggestFieldProps;

const useProps = createHook<AutosuggestFieldProps>(
  (props, { themeKey }) => {
    const {
      addonAfter,
      addonBefore,
      automaticSelection,
      autosuggestProps,
      cacheKey,
      containLabel,
      children,
      defaultValue,
      defer,
      description,
      disabled,
      errorText,
      emptyText,
      hint,
      isLoading,
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
      restrictToOptions,
      renderError,
      renderClearButton,
      renderEmpty,
      renderLoading,
      renderLoadingMore,
      renderOption,
      clearButtonProps,
      inputProps,
      itemProps,
      popoverProps,
      dropdownMenuInitialState,
      state,
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
      style: styles.AutosuggestField,
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
                <Autosuggest
                  flex={addonBefore || addonAfter ? '1' : undefined}
                  automaticSelection={automaticSelection}
                  cacheKey={cacheKey}
                  containLabel={containLabel}
                  defer={defer}
                  disabled={disabled}
                  isLoading={isLoading}
                  limit={limit}
                  loadOptions={loadOptions}
                  loadVariables={loadVariables}
                  options={options}
                  onChange={onChange}
                  pagination={pagination}
                  placeholder={placeholder}
                  restrictToOptions={restrictToOptions}
                  value={value}
                  errorText={errorText}
                  emptyText={emptyText}
                  loadingText={loadingText}
                  loadingMoreText={loadingMoreText}
                  renderClearButton={renderClearButton}
                  renderError={renderError}
                  renderEmpty={renderEmpty}
                  renderLoading={renderLoading}
                  renderLoadingMore={renderLoadingMore}
                  renderOption={renderOption}
                  clearButtonProps={clearButtonProps}
                  inputProps={{ isRequired, state, ...inputProps }}
                  itemProps={itemProps}
                  popoverProps={popoverProps}
                  dropdownMenuInitialState={dropdownMenuInitialState}
                  overrides={overrides}
                  variant={variant}
                  {...elementProps}
                  {...autosuggestProps}
                />
                {addonAfter}
              </React.Fragment>
            </ConditionalWrap>
          )}
        </FieldWrapper>
      ),
    };
  },
  { themeKey: 'AutosuggestField' }
);

export const AutosuggestField = createComponent<AutosuggestFieldProps>(
  (props) => {
    const AutosuggestFieldProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: AutosuggestFieldProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Autosuggest.Field',
    },
    themeKey: 'AutosuggestField',
  }
);
