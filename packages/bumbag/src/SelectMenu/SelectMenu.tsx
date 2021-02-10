import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import * as Loads from 'react-loads-next';

import { useClassName, createComponent, createElement, createHook, useDebounce } from '../utils';
import { Box, BoxProps } from '../Box';
import { Button, ButtonProps } from '../Button';
import {
  DropdownMenu,
  DropdownMenuPopover,
  DropdownMenuButton,
  DropdownMenuPopoverProps,
  DropdownMenuItemProps,
  DropdownMenuInitialState,
} from '../DropdownMenu';
import { Icon } from '../Icon';
import { Input, InputProps } from '../Input';
import { Menu } from '../Menu';
import { Set } from '../Set';
import { Spinner } from '../Spinner';
import { Tag, TagProps } from '../Tag';
import { Text } from '../Text';

import { SelectMenuItem } from './SelectMenuItem';
import { SelectMenuStaticItem } from './SelectMenuStaticItem';
import * as styles from './SelectMenu.styles';
import { Size } from '../types';

type Option = { key: number | string; label: string; value: any };
type Options = Array<Option>;

export type LocalSelectMenuProps = {
  /** The key to cache the loadOptions results against. */
  cacheKey?: string;
  /** Whether or not the invocation of loadOptions should be deferred until it the Autosuggest is opened. */
  defer?: boolean;
  /** Indicates if the  Autosuggest is disabled. */
  disabled?: boolean;
  /** Indicates if the clear button should be disabled. */
  disableClear?: boolean;
  /** Indicates if the select menu has a search component. */
  hasSearch?: boolean;
  /** Indicates if the select menu should have tags of the selected options. */
  hasTags?: boolean;
  /** Indicates if the select menu is a dropdown menu. Default: `true` */
  isDropdown?: boolean;
  /** Indicates if the select menu is loading. */
  isLoading?: boolean;
  /** Indicates if multiple options should be selected. */
  isMultiSelect?: boolean;
  /** Applies a limit to the number of options that appear in the list. */
  limit?: number;
  /** Supply an async function to `loadOptions` to load options from an external data source. */
  loadOptions?: (options: { page?: number; searchText?: string; variables?: any }) => Promise<{ options: Options }>;
  /** Supply variables (i.e. query parameters) to the `loadOptions` function. */
  loadVariables?: { [key: string]: any };
  /** Options to show in the list. If `loadOptions` is supplied, then you don't need to supply this. */
  options?: Options;
  /** Function to invoke when the option has been changed. */
  onChange: (newOptions: Array<Option> | Option | '', option: Option | '') => void;
  /** Indicates if the list should be paginated. If `true`, then pagination will be applied to `loadOptions`. */
  pagination?: boolean;
  /** Sets the height of the popover list. */
  popoverHeight?: string;
  /** Sets the placeholder of the search input. */
  placeholder?: string;
  /** Sets the size of the select menu button */
  size?: Size;
  /** Sets the visual state of the Autosuggest. */
  state?: string;
  /** Sets the value of the Autosuggest. Must be in the shape of an option (i.e. `{ key: 1, label: 'Jake', value: 'legend' }`). */
  value: Partial<Option>;

  errorText?: string;
  emptyText?: string;
  loadingText?: string;
  loadingMoreText?: string;

  renderDisclosure?: any;
  renderError?: any;
  renderEmpty?: any;
  renderLoading?: any;
  renderLoadingMore?: any;
  renderOption?: any;

  buttonProps?: Partial<ButtonProps>;
  itemProps?: Partial<DropdownMenuItemProps>;
  popoverProps?: Partial<DropdownMenuPopoverProps>;
  searchInputProps?: Partial<InputProps>;
  tagProps?: Partial<TagProps>;

  dropdownMenuInitialState?: Partial<DropdownMenuInitialState>;
};
export type SelectMenuProps = BoxProps & LocalSelectMenuProps;
export type SelectMenuContextOptions = {
  dropdownMenu?: any;
  overrides?: any;
  themeKey?: string;
};

export const SelectMenuContext = React.createContext<SelectMenuContextOptions>({});

function reducer(state, event) {
  switch (event.type) {
    case 'VALUE_CHANGE': {
      return {
        ...state,
        page: 1,
        selectedOptions: event.value ? (Array.isArray(event.value) ? event.value : [event.value]) : [],
      };
    }
    case 'INPUT_CHANGE': {
      return {
        ...state,
        page: 1,
        searchText: event.searchText,
      };
    }
    case 'OPTIONS_SET': {
      return { ...state, options: event.options };
    }
    case 'OPTIONS_FILTERED': {
      return { ...state, filteredOptions: event.filteredOptions };
    }
    case 'PAGE_INCREMENT': {
      return { ...state, page: state.page + 1 };
    }
    default: {
      return state;
    }
  }
}

const useProps = createHook<SelectMenuProps>(
  (props, { themeKey }) => {
    const {
      buttonProps,
      cacheKey,
      disabled,
      disableClear,
      dropdownMenuInitialState,
      emptyText,
      errorText,
      loadingText,
      loadingMoreText,
      popoverProps,
      hasSearch,
      hasTags,
      itemProps,
      isDropdown,
      isLoading,
      isMultiSelect,
      limit,
      loadOptions,
      loadVariables,
      onChange,
      options: initialOptions,
      overrides,
      pagination,
      renderDisclosure,
      renderEmpty: Empty,
      renderError: Error,
      renderLoading: Loading,
      renderLoadingMore: LoadingMore,
      renderOption: Option,
      searchInputProps,
      placeholder,
      state: fieldState,
      size,
      tagProps,
      value,
      ...restProps
    } = props;

    /////////////////////////////////////////////////

    const boxProps = Box.useProps(restProps);

    //////////////////////////////////////////////////

    const dropdownMenu = DropdownMenu.useState({
      loop: true,
      gutter: 4,
      ...dropdownMenuInitialState,
    });

    //////////////////////////////////////////////////

    const [blockLoad, setBlockLoad] = React.useState(false);
    const [defer, setDefer] = React.useState(props.defer || !loadOptions);

    //////////////////////////////////////////////////

    const className = useClassName({
      style: styles.SelectMenu,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });
    const dropdownMenuPopoverClassName = useClassName({
      style: styles.SelectMenuPopover,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Popover',
    });
    const selectMenuItemsWrapperClassName = useClassName({
      style: styles.SelectMenuItemsWrapper,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'ItemsWrapper',
    });

    //////////////////////////////////////////////////

    const [
      { searchText, filteredOptions, options, page, selectedOptions, selectedIndexes },
      dispatch,
    ] = React.useReducer(reducer, {
      searchText: '',
      filteredOptions: initialOptions,
      options: initialOptions,
      page: 1,
      selectedOptions: [],
    });

    React.useEffect(() => {
      dispatch({ type: 'OPTIONS_SET', options: initialOptions });
      dispatch({ type: 'OPTIONS_FILTERED', filteredOptions: initialOptions });
    }, [initialOptions]);

    //////////////////////////////////////////////////

    const debouncedInputValue = useDebounce(searchText, 500);

    const getOptions = React.useCallback(
      async ({ loadVariables, page, searchText = '' }) => {
        if (typeof loadOptions === 'function') {
          if (blockLoad) return new Promise((res) => res({ options }));

          return loadOptions({
            page,
            searchText,
            variables: loadVariables,
          }).then(({ options: fetchedOptions }) => {
            let newOptions = [...options, ...fetchedOptions];
            if (page === 1) {
              newOptions = fetchedOptions;
            }
            if (page > 1 && fetchedOptions.length === 0) {
              setBlockLoad(true);
            }

            return { options: newOptions };
          }) as any;
        }
        return new Promise((res) => res(undefined));
      },
      [blockLoad, loadOptions, options]
    );
    const optionsRecord: any = Loads.useLoads(cacheKey, getOptions, {
      defer,
      variables: [{ loadVariables, page, searchText: debouncedInputValue }],
    });

    //////////////////////////////////////////////////

    const visibleOptions = React.useMemo(
      () =>
        filteredOptions.slice(0, limit).filter((option) => {
          if (!option) return false;
          if (hasTags) {
            return !selectedOptions.includes(option);
          }
          return true;
        }),
      [filteredOptions, hasTags, limit, selectedOptions]
    );

    //////////////////////////////////////////////////

    const isLoadingMore = loadOptions && (optionsRecord.isPending || optionsRecord.isIdle) && page > 1;

    let state = 'empty';
    if (
      visibleOptions.length > 0 ||
      (loadOptions && ((optionsRecord.isResolved && visibleOptions.length > 0) || isLoadingMore))
    ) {
      state = 'success';
    } else if (isLoading || (loadOptions && (optionsRecord.isPending || optionsRecord.isIdle) && page === 1)) {
      state = 'loading';
    } else if (loadOptions && optionsRecord.isRejected) {
      state = 'error';
    }

    //////////////////////////////////////////////////

    const filterOptions = React.useCallback(
      ({ searchText }) => {
        if (loadOptions) return;
        const filteredOptions = options.filter((option) =>
          option.label.toLowerCase().includes(searchText.trim().toLowerCase())
        );
        dispatch({ type: 'OPTIONS_FILTERED', filteredOptions });
        return filteredOptions;
      },
      [loadOptions, options]
    );

    //////////////////////////////////////////////////

    const handleClickItem = React.useCallback(
      ({ option }) => () => {
        if (isMultiSelect) {
          let newOptions = [];
          if (selectedOptions.some((selectedOption) => selectedOption.key === option.key)) {
            newOptions = selectedOptions.filter((selectedOption) => option.key !== selectedOption.key);
          } else {
            newOptions = [...selectedOptions, option];
          }
          onChange && onChange(newOptions, option);
        } else {
          let newOptions = selectedOptions;
          if (!selectedOptions.includes(option)) {
            newOptions = option;
          } else if (!disableClear) {
            newOptions = '';
          }
          onChange && onChange(newOptions, newOptions);
        }
      },
      [disableClear, isMultiSelect, onChange, selectedOptions]
    );

    const handleClickButton = React.useCallback(() => {
      if (defer) {
        setDefer(false);
        optionsRecord.load();
      }
    }, [defer, optionsRecord]);

    const handleChangeInput = React.useCallback(
      (event) => {
        const searchText = event.target.value || '';
        setBlockLoad(false);
        dispatch({ type: 'INPUT_CHANGE', searchText });
        filterOptions({ searchText });
      },
      [filterOptions]
    );

    const handleClearTag = React.useCallback(
      ({ option }) => {
        handleClickItem({ option })();
      },
      [handleClickItem]
    );

    const handleClearOptions = React.useCallback(
      (e) => {
        e.stopPropagation();
        dispatch({ type: 'VALUE_CHANGE', value: '' });
        onChange && onChange('', '');
      },
      [onChange]
    );

    const handleScrollPopover = React.useCallback(
      (event) => {
        const target = event.currentTarget;
        if (
          pagination &&
          !isLoadingMore &&
          !blockLoad &&
          target.scrollHeight > target.offsetHeight &&
          target.scrollHeight - target.offsetHeight - target.scrollTop <= 200
        ) {
          dispatch({ type: 'PAGE_INCREMENT' });
        }
        return;
      },
      [blockLoad, isLoadingMore, pagination]
    );

    //////////////////////////////////////////////////

    React.useEffect(() => {
      dispatch({ type: 'VALUE_CHANGE', value });
    }, [value]);

    React.useEffect(() => {
      if (!dropdownMenu.visible) {
        handleChangeInput({ target: { value: '' } });
      }
    }, [dropdownMenu.visible, handleChangeInput]);

    React.useEffect(() => {
      if (loadOptions && optionsRecord.isResolved) {
        const options = optionsRecord.response?.options ?? [];
        dispatch({ type: 'OPTIONS_SET', options });
        dispatch({ type: 'OPTIONS_FILTERED', filteredOptions: options });
      }
    }, [loadOptions, optionsRecord.isResolved, optionsRecord.response]);

    //////////////////////////////////////////////////

    const context = React.useMemo(
      () => ({
        dropdownMenu,
        overrides,
        themeKey,
      }),
      [dropdownMenu, overrides, themeKey]
    );

    //////////////////////////////////////////////////

    const EmptyStaticItem = React.useCallback(
      (props) => (
        <SelectMenuStaticItem
          {...dropdownMenu}
          {...props}
          onClick={(e) => {
            props.onClick && props.onClick(e);
            dropdownMenu.hide();
          }}
        />
      ),
      [] // eslint-disable-line
    );

    const EmptyItem = React.useCallback(
      (props) => (
        <SelectMenuItem
          isDropdown={isDropdown}
          {...dropdownMenu}
          {...props}
          onClick={(e) => {
            props.onClick && props.onClick(e);
            dropdownMenu.hide();
          }}
        />
      ),
      [] // eslint-disable-line
    );

    //////////////////////////////////////////////////

    const MenuWrapper = isDropdown ? DropdownMenuPopover : Menu;

    //////////////////////////////////////////////////

    return {
      ...boxProps,
      className,
      children: (
        <SelectMenuContext.Provider value={context}>
          {isDropdown && (
            <SelectMenuButton
              disabled={disabled}
              disableClear={disableClear}
              isLoading={isLoading}
              onClick={handleClickButton}
              onClear={handleClearOptions}
              placeholder={placeholder}
              renderDisclosure={renderDisclosure}
              selectedOptions={selectedOptions}
              size={size}
              state={fieldState}
              {...buttonProps}
            />
          )}
          <MenuWrapper
            {...dropdownMenu}
            className={dropdownMenuPopoverClassName}
            overrides={overrides}
            role="listbox"
            {...popoverProps}
          >
            {!isDropdown || dropdownMenu.visible ? (
              <React.Fragment>
                {hasSearch && (
                  <SelectMenuSearchInput
                    onChange={handleChangeInput}
                    value={searchText}
                    searchInputProps={searchInputProps}
                    autoFocus={isDropdown}
                  />
                )}
                {hasTags && selectedOptions.length > 0 && (
                  <SelectMenuTags onClearTag={handleClearTag} selectedOptions={selectedOptions} tagProps={tagProps} />
                )}
                <Box
                  use="ul"
                  className={selectMenuItemsWrapperClassName}
                  onScroll={handleScrollPopover}
                  overrides={overrides}
                >
                  {state === 'success' && (
                    <React.Fragment>
                      {visibleOptions.map((option, index) => (
                        <SelectMenuItem
                          key={option.key || index}
                          {...dropdownMenu}
                          aria-selected={selectedOptions.some((selectedOption) => selectedOption.key === option.key)}
                          aria-disabled={option.disabled}
                          disabled={option.disabled}
                          iconAfter={option.iconAfter}
                          iconAfterProps={option.iconAfterProps}
                          iconBefore={option.iconBefore}
                          iconBeforeProps={option.iconBeforeProps}
                          isDropdown={isDropdown}
                          hideOnClick={!isMultiSelect}
                          onClick={handleClickItem({ index, option })}
                          overrides={overrides}
                          {...itemProps}
                        >
                          <Option
                            label={option.label}
                            searchText={searchText}
                            option={option}
                            overrides={overrides}
                            MatchedLabel={(props) => (
                              <MatchedLabel label={option.label} searchText={searchText} {...props} />
                            )}
                          />
                        </SelectMenuItem>
                      ))}
                      {isLoadingMore && <LoadingMore loadingText={loadingMoreText} overrides={overrides} />}
                    </React.Fragment>
                  )}
                  {state === 'loading' && <Loading loadingText={loadingText} overrides={overrides} />}
                  {state === 'empty' && (
                    <Empty
                      emptyText={emptyText}
                      searchText={searchText}
                      overrides={overrides}
                      StaticItem={EmptyStaticItem}
                      Item={EmptyItem}
                    />
                  )}
                  {state === 'error' && <Error errorText={errorText} overrides={overrides} />}
                </Box>
              </React.Fragment>
            ) : null}
          </MenuWrapper>
        </SelectMenuContext.Provider>
      ),
    };
  },
  {
    defaultProps: {
      cacheKey: 'bb-options',
      disabled: false,
      emptyText: 'No results found',
      errorText: 'An error occurred',
      isDropdown: true,
      loadingText: 'Loading...',
      loadingMoreText: 'Loading...',
      options: [],
      popoverHeight: '300px',
      renderEmpty: Empty,
      renderError: Error,
      renderLoading: Loading,
      renderLoadingMore: Loading,
      renderOption: MatchedLabel,
    },
    themeKey: 'SelectMenu',
  }
);

export const SelectMenu = createComponent<SelectMenuProps>(
  (props) => {
    const selectMenuProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: selectMenuProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'SelectMenu',
    },
    themeKey: 'SelectMenu',
  }
);

//////////////////////////////////////////////////////////////////

function SelectMenuButton(props: any) {
  const {
    disabled,
    disableClear,
    isLoading,
    onClick,
    onClear,
    renderDisclosure,
    selectedOptions,
    placeholder,
    ...restProps
  } = props;

  const { dropdownMenu, overrides, themeKey } = React.useContext(SelectMenuContext);

  const buttonClassName = useClassName({
    style: styles.SelectMenuButton,
    styleProps: { ...props, overrides },
    themeKey,
    themeKeySuffix: 'Button',
  });
  const buttonTextClassName = useClassName({
    style: styles.SelectMenuButtonText,
    styleProps: { ...props, overrides },
    themeKey,
    themeKeySuffix: 'ButtonText',
  });
  const iconsWrapperClassName = useClassName({
    style: styles.SelectMenuButtonIconsWrapper,
    styleProps: { ...props, overrides },
    themeKey,
    themeKeySuffix: 'ButtonIconsWrapper',
  });
  const iconClassName = useClassName({
    style: styles.SelectMenuButtonIcon,
    styleProps: { ...props, overrides },
    themeKey,
    themeKeySuffix: 'ButtonIcon',
  });

  const dropdownMenuButtonProps = DropdownMenuButton.useProps({
    ...dropdownMenu,
    'aria-haspopup': 'listbox',
    disabled,
    onClick,
    overrides,
    ...restProps,
  });

  let label = placeholder;
  if (selectedOptions.length === 1) {
    label = selectedOptions?.[0]?.label;
  }
  if (selectedOptions.length > 1) {
    label = `${selectedOptions?.[0]?.label} + ${selectedOptions.length - 1} other${
      selectedOptions.length - 1 > 1 ? 's' : ''
    }`;
  }

  if (renderDisclosure) {
    return renderDisclosure({
      disclosureProps: dropdownMenuButtonProps,
      disabled,
      disableClear,
      isLoading,
      label,
      selectedOptions,
      onClear,
      placeholder,
    });
  }
  return (
    <Box {...dropdownMenuButtonProps} className={buttonClassName}>
      <Box className={buttonTextClassName}>{label}</Box>
      <Box className={iconsWrapperClassName}>
        <Set>
          {!disableClear && selectedOptions.length > 0 && <ClearButton onClick={onClear} />}
          {isLoading ? <Spinner color="text" size="small" /> : <Icon className={iconClassName} icon="chevron-down" />}
        </Set>
      </Box>
    </Box>
  );
}

//////////////////////////////////////////////////////////////////

function SelectMenuSearchInput(props: any) {
  const { autoFocus, onChange, searchInputProps, value, ...restProps } = props;

  const { overrides, themeKey } = React.useContext(SelectMenuContext);

  const searchInputWrapperClassName = useClassName({
    style: styles.SelectMenuSearchInputWrapper,
    styleProps: { ...props, overrides },
    themeKey,
    themeKeySuffix: 'SearchInputWrapper',
  });
  const searchInputClassName = useClassName({
    style: styles.SelectMenuSearchInput,
    styleProps: { ...props, overrides },
    themeKey,
    themeKeySuffix: 'SearchInput',
  });

  return (
    <Box className={searchInputWrapperClassName} {...restProps}>
      <Input
        className={searchInputClassName}
        onChange={onChange}
        overrides={overrides}
        placeholder="Type to search..."
        value={value}
        autoFocus={autoFocus}
        {...searchInputProps}
      />
    </Box>
  );
}

//////////////////////////////////////////////////////////////////

function SelectMenuTags(props: any) {
  const { onClearTag, selectedOptions, tagProps, ...restProps } = props;

  const { overrides, themeKey } = React.useContext(SelectMenuContext);

  const tagsWrapperClassName = useClassName({
    style: styles.SelectMenuTagsWrapper,
    styleProps: { ...props, overrides },
    themeKey,
    themeKeySuffix: 'TagsWrapper',
  });

  return (
    <Box className={tagsWrapperClassName} {...restProps}>
      <Set spacing="minor-1" overrides={overrides}>
        {selectedOptions.map((option) => (
          <Tag
            key={option.key}
            palette="primaryTint"
            onRemove={() => onClearTag({ option })}
            overrides={overrides}
            {...tagProps}
          >
            {option.label}
          </Tag>
        ))}
      </Set>
    </Box>
  );
}

//////////////////////////////////////////////////////////////////

function MatchedLabel(props: { label: string; searchText: string; overrides: any }) {
  const { label, searchText, ...restProps } = props;

  const { overrides, themeKey } = React.useContext(SelectMenuContext);
  const className = useClassName({
    style: styles.SelectMenuItemText,
    styleProps: props,
    themeKey,
    themeKeySuffix: 'ItemText',
  });

  const escapeStringRegexp = (string) => string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
  const match = label.match(new RegExp(escapeStringRegexp(searchText), 'i')) || [];

  const preText = label.slice(0, match.index);
  const highlightedText = match[0];
  const postText = label.slice(match.index + (match[0] || '').length);

  return highlightedText ? (
    <Text className={className} overrides={overrides} {...restProps}>
      {preText && <Text overrides={overrides}>{preText}</Text>}
      {highlightedText && (
        <Text fontWeight="semibold" overrides={overrides}>
          {highlightedText}
        </Text>
      )}
      {postText && <Text overrides={overrides}>{postText}</Text>}
    </Text>
  ) : (
    <Text className={className} overrides={overrides} {...restProps}>
      {label}
    </Text>
  );
}

//////////////////////////////////////////////////////////////////

function Empty(props: { emptyText: string; overrides: any }) {
  const { emptyText, overrides, ...restProps } = props;
  return (
    <SelectMenuStaticItem overrides={overrides} {...restProps}>
      {emptyText}
    </SelectMenuStaticItem>
  );
}

//////////////////////////////////////////////////////////////////

function Loading(props: { loadingText: string; overrides: any }) {
  const { loadingText, overrides, ...restProps } = props;
  return (
    <SelectMenuStaticItem display="flex" alignItems="center" overrides={overrides} {...restProps}>
      <Spinner size="small" overrides={overrides} />
      <Text marginLeft="major-1" overrides={overrides}>
        {loadingText}
      </Text>
    </SelectMenuStaticItem>
  );
}

//////////////////////////////////////////////////////////////////

function ClearButton(props: any) {
  const { buttonProps, onClick, ...restProps } = props;

  const { overrides, themeKey } = React.useContext(SelectMenuContext);

  const wrapperClassName = useClassName({
    style: styles.SelectMenuClearButtonWrapper,
    styleProps: { ...props, overrides },
    themeKey,
    themeKeySuffix: 'ClearButtonWrapper',
  });
  const buttonClassName = useClassName({
    style: styles.SelectMenuClearButton,
    styleProps: { ...props, overrides },
    themeKey,
    themeKeySuffix: 'ClearButton',
  });

  return (
    <Box className={wrapperClassName} overrides={overrides} {...restProps}>
      <Button.Close
        className={buttonClassName}
        onClick={onClick}
        iconProps={{ fontSize: '200' }}
        size="small"
        onMouseDown={(e) => e.preventDefault()}
        overrides={overrides}
        {...buttonProps}
      />
    </Box>
  );
}

//////////////////////////////////////////////////////////////////

function Error(props: { errorText: string; overrides: any }) {
  const { errorText, overrides, ...restProps } = props;
  return (
    <SelectMenuStaticItem overrides={overrides} {...restProps}>
      {errorText}
    </SelectMenuStaticItem>
  );
}
