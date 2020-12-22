import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import * as Loads from 'react-loads-next';

import { useClassName, createComponent, createElement, createHook, omit, useDebounce } from '../utils';
import { Box, BoxProps } from '../Box';
import { Flex, FlexProps } from '../Flex';
import { Button, ButtonProps } from '../Button';
import { Input, InputProps } from '../Input';
import {
  DropdownMenu,
  DropdownMenuPopover,
  DropdownMenuButton,
  DropdownMenuPopoverProps,
  DropdownMenuItemProps,
  DropdownMenuInitialState,
} from '../DropdownMenu';
import { Spinner } from '../Spinner';
import { Text } from '../Text';

import { AutosuggestItem } from './AutosuggestItem';
import { AutosuggestStaticItem } from './AutosuggestStaticItem';
import * as styles from './Autosuggest.styles';

type Option = { key: number | string; label: string; value: any };
type Options = Array<Option>;

export type LocalAutosuggestProps = {
  /** Whether or not an Autosuggest option should be automatically selected. */
  automaticSelection?: boolean;
  /** The key to cache the loadOptions results against. */
  cacheKey?: string;
  /** Whether or not the invocation of loadOptions should be deferred until it the Autosuggest is opened. */
  defer?: boolean;
  /** Indicates if the  Autosuggest is disabled. */
  disabled?: boolean;
  /** Indicates if the Autosuggest is loading. */
  isLoading?: boolean;
  /** Applies a limit to the number of options that appear in the list. */
  limit?: number;
  /** Supply an async function to `loadOptions` to load options from an external data source. */
  loadOptions?: (options: { page?: number; searchText?: string; variables?: any }) => Promise<{ options: Options }>;
  /** Supply variables (i.e. query parameters) to the `loadOptions` function. */
  loadVariables?: { [key: string]: any };
  /** Options to show in the list. If `loadOptions` is supplied, then you don't need to supply this. */
  options?: Options;
  /** Function to invoke when the option has been changed. */
  onChange: (Option) => void;
  /** Indicates if the list should be paginated. If `true`, then pagination will be applied to `loadOptions`. */
  pagination?: boolean;
  /** Sets the height of the popover list. */
  popoverHeight?: string;
  /** Sets the placeholder of the search input. */
  placeholder?: InputProps['placeholder'];
  /** Restricts selection to the options supplied via `options` or `loadOptions`. Otherwise, it's free-for-all entry. */
  restrictToOptions?: boolean;
  /** Sets the visual state of the Autosuggest. */
  state?: string;
  /** Sets the value of the Autosuggest. Must be in the shape of an option (i.e. `{ key: 1, label: 'Jake', value: 'legend' }`). */
  value: Partial<Option>;

  /** Sets the error text when the `loadOptions` function throws an error. */
  errorText?: string;
  /** Sets the empty text when no options are present. */
  emptyText?: string;
  /** Sets the loading text when the options are loading. */
  loadingText?: string;
  /** Sets the loading text when more options are loading (via pagination). */
  loadingMoreText?: string;

  renderClearButton?: any;
  renderError?: any;
  renderEmpty?: any;
  renderLoading?: any;
  renderLoadingMore?: any;
  renderOption?: any;

  clearButtonProps?: Partial<ButtonProps>;
  inputProps?: Partial<InputProps>;
  itemProps?: Partial<DropdownMenuItemProps>;
  popoverProps?: Partial<DropdownMenuPopoverProps>;

  dropdownMenuInitialState?: Partial<DropdownMenuInitialState>;
};
export type AutosuggestProps = BoxProps & LocalAutosuggestProps;
export type AutosuggestContextOptions = {
  overrides?: any;
  themeKey?: string;
};

export const AutosuggestContext = React.createContext<AutosuggestContextOptions>({});

const KEY_ENTER = 13;
const KEY_ESC = 27;
const KEY_UP = 38;
const KEY_DOWN = 40;

function reducer(state, event) {
  switch (event.type) {
    case 'INPUT_CHANGE': {
      return {
        ...state,
        page: 1,
        highlightedIndex: event.automaticSelection
          ? getNewHighlightedIndex({
              compare: ({ index, optionsLength }) => (index < optionsLength ? index + 1 : 0),
              highlightedIndex: -1,
              filteredOptions: state.filteredOptions,
            })
          : -1,
        inputValue: event.inputValue,
        selectedOption: undefined,
      };
    }
    case 'INPUT_BLUR': {
      return {
        ...state,
        highlightedIndex: -1,
        page: 1,
        inputValue:
          event.restrictToOptions && state.highlightedIndex === -1 && !state.selectedOption ? '' : state.inputValue,
      };
    }
    case 'KEY_UP': {
      const newHighlightedIndex = getNewHighlightedIndex({
        compare: ({ index, optionsLength }) => (index > 0 ? index - 1 : optionsLength),
        highlightedIndex: state.highlightedIndex,
        filteredOptions: state.filteredOptions,
      });

      return {
        ...state,
        highlightedIndex: newHighlightedIndex,
      };
    }
    case 'KEY_DOWN': {
      const newHighlightedIndex = getNewHighlightedIndex({
        compare: ({ index, optionsLength }) => (index < optionsLength ? index + 1 : 0),
        highlightedIndex: state.highlightedIndex,
        filteredOptions: state.filteredOptions,
      });

      return {
        ...state,
        highlightedIndex: newHighlightedIndex,
      };
    }
    case 'KEY_ESC': {
      return { ...state, highlightedIndex: -1, inputValue: '' };
    }
    case 'KEY_ENTER': {
      return {
        ...state,
        highlightedIndex: -1,
        inputValue: event.restrictToOptions && state.highlightedIndex === -1 ? '' : state.inputValue,
      };
    }
    case 'MOUSE_CLICK_ITEM': {
      if (event.option && event.option.disabled) return state;

      return {
        ...state,
        highlightedIndex: -1,
        inputValue: state.filteredOptions[event.index].label,
      };
    }
    case 'OPTIONS_SET': {
      return { ...state, options: event.options };
    }
    case 'OPTIONS_FILTERED': {
      return { ...state, filteredOptions: event.filteredOptions };
    }
    case 'OPTION_SELECTED': {
      return {
        ...state,
        filteredOptions: [event.option],
        inputValue: event?.option?.label ?? '',
        selectedOption: event.option,
        value: event.option,
      };
    }
    case 'OPTION_CLEARED': {
      return {
        ...state,
        filteredOptions: state.options,
        inputValue: '',
        selectedOption: undefined,
        value: undefined,
      };
    }
    case 'MOUSE_ENTER_POPOVER': {
      return { ...state, isMouseInsidePopover: true };
    }
    case 'MOUSE_LEAVE_POPOVER': {
      return {
        ...state,
        highlightedIndex: state.inputValue && event.automaticSelection ? 0 : -1,
        isMouseInsidePopover: false,
      };
    }
    case 'PAGE_INCREMENT': {
      return { ...state, page: state.page + 1 };
    }
    default: {
      return state;
    }
  }
}

const useProps = createHook<AutosuggestProps>(
  (props, { themeKey }) => {
    const {
      automaticSelection,
      cacheKey,
      clearButtonProps,
      disabled,
      dropdownMenuInitialState,
      emptyText,
      errorText,
      loadingText,
      loadingMoreText,
      popoverProps,
      itemProps,
      inputProps,
      isLoading: isInputLoading,
      limit,
      loadOptions,
      loadVariables,
      onChange,
      options: initialOptions,
      overrides,
      pagination,
      renderClearButton: ClearButton,
      renderEmpty: Empty,
      renderError: Error,
      renderLoading: Loading,
      renderLoadingMore: LoadingMore,
      renderOption: Option,
      placeholder,
      restrictToOptions,
      state,
      value,
      ...restProps
    } = props;

    //////////////////////////////////////////////////

    const boxProps = Box.useProps(restProps);

    //////////////////////////////////////////////////

    const inputRef = React.useRef();
    const mousePositionRef = React.useRef();
    const popoverRef = React.useRef();
    const [defer, setDefer] = React.useState(props.defer || !loadOptions);
    const [blockLoad, setBlockLoad] = React.useState(false);

    //////////////////////////////////////////////////

    const dropdownMenu = DropdownMenu.useState({
      loop: true,
      gutter: 4,
      ...dropdownMenuInitialState,
    });
    const dropdownMenuButtonProps = DropdownMenuButton.useProps({
      ...dropdownMenu,
      ref: inputRef,
    });

    //////////////////////////////////////////////////

    React.useEffect(() => {
      function handleMouseMove(e) {
        mousePositionRef.current = e;
      }
      if (typeof window !== 'undefined') {
        window.document.addEventListener('mousemove', handleMouseMove);
      }
      return function cleanup() {
        window.document.removeEventListener('mousemove', handleMouseMove);
      };
    });

    //////////////////////////////////////////////////

    const className = useClassName({
      style: styles.Autosuggest,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });
    const dropdownMenuPopoverClassName = useClassName({
      style: styles.AutosuggestPopover,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Popover',
    });
    const itemsWrapperClassName = useClassName({
      style: styles.ItemsWrapper,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'ItemsWrapper',
    });
    const inputClassName = useClassName({
      style: styles.AutosuggestInput,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Input',
    });

    //////////////////////////////////////////////////

    const [
      { highlightedIndex, inputValue, filteredOptions, options, page, selectedOption },
      dispatch,
    ] = React.useReducer(reducer, {
      highlightedIndex: -1,
      inputValue: value?.label,
      isMouseInsidePopover: false,
      filteredOptions: initialOptions,
      options: initialOptions,
      page: 1,
      value: '',
    });

    //////////////////////////////////////////////////

    const debouncedInputValue = useDebounce(inputValue, 500);

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

    React.useEffect(() => {
      dispatch({ type: 'OPTIONS_SET', options: initialOptions });
    }, [initialOptions]);

    React.useEffect(() => {
      if (loadOptions && optionsRecord.isResolved) {
        const options = optionsRecord.response?.options ?? [];
        dispatch({ type: 'OPTIONS_SET', options });
        dispatch({ type: 'OPTIONS_FILTERED', filteredOptions: options });
      }
    }, [loadOptions, optionsRecord.isResolved, optionsRecord.response]);

    //////////////////////////////////////////////////

    const isLoading = loadOptions && (optionsRecord.isPending || optionsRecord.isIdle) && page === 1;
    const isLoadingMore = loadOptions && (optionsRecord.isPending || optionsRecord.isIdle) && page > 1;
    const isError = loadOptions && optionsRecord.isRejected;

    let isSuccess = filteredOptions.length > 0;
    if (loadOptions) {
      isSuccess = (optionsRecord.isResolved && filteredOptions.length > 0) || isLoadingMore;
    }

    //////////////////////////////////////////////////

    const setOption = React.useCallback(
      (option) => {
        dispatch({ type: 'OPTION_SELECTED', option });
        onChange && onChange(option);
        return option;
      },
      [onChange]
    );

    const filterOptions = React.useCallback(
      ({ controlsVisibility, hideIfNoOptions = true, searchText }) => {
        if (loadOptions) return;
        const filteredOptions = options.filter((option) =>
          option.label.toLowerCase().includes(searchText.trim().toLowerCase())
        );
        if (controlsVisibility) {
          if (filteredOptions.length === 0 && hideIfNoOptions) {
            dropdownMenu.hide();
          } else {
            dropdownMenu.show();
          }
        }
        dispatch({
          type: 'OPTIONS_FILTERED',
          filteredOptions,
          controlsVisibility,
        });
        return filteredOptions;
      },
      [dropdownMenu, loadOptions, options]
    );

    const selectOption = React.useCallback(
      ({ index }) => {
        if (filteredOptions.length === 0) {
          return undefined;
        }

        let option = filteredOptions[index];
        option = setOption(option);
        return option;
      },
      [filteredOptions, setOption]
    );

    //////////////////////////////////////////////////

    const handleBlurInput = React.useCallback(
      (event) => {
        const value = event.target.value;
        dispatch({ type: 'INPUT_BLUR', restrictToOptions, value });
        if ((inputValue && automaticSelection) || highlightedIndex >= 0) {
          selectOption({ index: highlightedIndex >= 0 ? highlightedIndex : 0 });
        }
        if (restrictToOptions && !selectedOption && highlightedIndex === -1) {
          onChange && onChange('');
        }
        filterOptions({ searchText: value });
        if (isMouseOutsidePopover({ inputRef, mousePositionRef, popoverRef })) {
          dropdownMenu.hide();
        }
        if (!selectedOption) {
          onChange && onChange(value === '' ? '' : { label: value });
        }
      },
      [
        automaticSelection,
        dropdownMenu,
        filterOptions,
        highlightedIndex,
        inputValue,
        onChange,
        restrictToOptions,
        selectOption,
        selectedOption,
      ]
    );

    const handleChangeInput = React.useCallback(
      (event) => {
        const inputValue = event.target.value || '';
        setBlockLoad(false);
        dispatch({ type: 'INPUT_CHANGE', automaticSelection, inputValue });
        filterOptions({
          controlsVisibility: true,
          hideIfNoOptions: !restrictToOptions,
          searchText: inputValue,
        });
      },
      [automaticSelection, filterOptions, restrictToOptions]
    );

    const handleClickInput = React.useCallback(
      (event) => {
        const value = event.target.value;
        if (document.activeElement !== event.target) {
          event.target.focus();
        }
        filterOptions({ controlsVisibility: true, searchText: value });
        if (loadOptions) {
          if (defer) {
            setDefer(false);
            optionsRecord.load();
          }
          dropdownMenu.show();
        }
      },
      [defer, dropdownMenu, filterOptions, loadOptions, optionsRecord]
    );

    const handleFocusInput = React.useCallback(
      (event) => {
        const value = event.target.value;
        filterOptions({ controlsVisibility: true, searchText: value });
      },
      [filterOptions]
    );

    const handleKeyDownInput = React.useCallback(
      (event) => {
        if (event.keyCode === KEY_ESC) {
          event.preventDefault();
          dropdownMenu.hide();
          dispatch({ type: 'KEY_ESC' });
        }
        if (event.keyCode === KEY_DOWN) {
          event.preventDefault();
          dropdownMenu.show();
          dispatch({ type: 'KEY_DOWN' });
        }
        if (event.keyCode === KEY_UP) {
          event.preventDefault();
          dropdownMenu.show();
          dispatch({ type: 'KEY_UP' });
        }
        if (event.keyCode === KEY_ENTER) {
          event.preventDefault();
          dispatch({ type: 'KEY_ENTER', restrictToOptions });
          dropdownMenu.hide();
          if (highlightedIndex >= 0 || (automaticSelection && inputValue)) {
            selectOption({ index: highlightedIndex });
          }
        }
      },
      [automaticSelection, dropdownMenu, highlightedIndex, inputValue, restrictToOptions, selectOption]
    );

    const handleClickItem = React.useCallback(
      (index, option) => () => {
        dispatch({ type: 'MOUSE_CLICK_ITEM', index, option });
        dropdownMenu.hide();
        selectOption({ index });
      },
      [dispatch, dropdownMenu, selectOption]
    );

    const handleClear = React.useCallback(() => {
      dispatch({ type: 'OPTION_CLEARED' });
      onChange && onChange('');
    }, [onChange]);

    const handleMouseEnterPopover = React.useCallback(() => {
      dispatch({ type: 'MOUSE_ENTER_POPOVER', automaticSelection });
    }, [automaticSelection]);

    const handleMouseLeavePopover = React.useCallback(() => {
      dispatch({ type: 'MOUSE_LEAVE_POPOVER', automaticSelection });
    }, [automaticSelection]);

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

    const handleCreate = React.useCallback(
      (option) => {
        setOption(option);
        dropdownMenu.hide();
      },
      [dropdownMenu, setOption]
    );

    //////////////////////////////////////////////////

    React.useEffect(() => {
      if (value) {
        dispatch({ type: 'OPTION_SELECTED', option: value });
      }
    }, [automaticSelection, value]);

    //////////////////////////////////////////////////

    const context = React.useMemo(
      () => ({
        overrides,
        themeKey,
      }),
      [overrides, themeKey]
    );

    //////////////////////////////////////////////////

    const showClearButton = inputValue && !disabled;

    //////////////////////////////////////////////////

    return {
      ...boxProps,
      'aria-expanded': dropdownMenuButtonProps['aria-expanded'],
      'aria-haspopup': 'listbox',
      'aria-owns': dropdownMenu.baseId,
      role: 'combobox',
      className,
      children: (
        <AutosuggestContext.Provider value={context}>
          <Input
            {...omit(dropdownMenuButtonProps, 'type', 'className', 'role')}
            after={showClearButton && <ClearButton onClick={handleClear} buttonProps={clearButtonProps} />}
            aria-autocomplete="list"
            aria-activedescendant={dropdownMenu?.items?.[highlightedIndex]?.id}
            className={inputClassName}
            disabled={disabled}
            inputProps={inputProps}
            isLoading={isInputLoading}
            onBlur={handleBlurInput}
            onClick={handleClickInput}
            onChange={handleChangeInput}
            onKeyDown={handleKeyDownInput}
            onFocus={handleFocusInput}
            overrides={overrides}
            placeholder={placeholder}
            role="textbox"
            state={state}
            value={inputValue}
          />
          <DropdownMenuPopover
            {...dropdownMenu}
            ref={popoverRef}
            className={dropdownMenuPopoverClassName}
            isTabbable={false}
            onMouseDown={(e) => e.preventDefault()}
            onMouseEnter={handleMouseEnterPopover}
            onMouseLeave={handleMouseLeavePopover}
            overrides={overrides}
            role="listbox"
            hideOnClickOutside={false}
            unstable_autoFocusOnHide={false}
            {...popoverProps}
          >
            {dropdownMenu.visible && (
              <Box use="ul" className={itemsWrapperClassName} onScroll={handleScrollPopover} overrides={overrides}>
                {isSuccess ? (
                  <React.Fragment>
                    {filteredOptions
                      .slice(0, limit)
                      .filter(Boolean)
                      .map((option, index) => (
                        <AutosuggestItem
                          key={option.key || index}
                          {...dropdownMenu}
                          aria-selected={highlightedIndex === index}
                          aria-disabled={option.disabled}
                          disabled={option.disabled}
                          iconAfter={option.iconAfter}
                          iconAfterProps={option.iconAfterProps}
                          iconBefore={option.iconBefore}
                          iconBeforeProps={option.iconBeforeProps}
                          onClick={handleClickItem(index, option)}
                          overrides={overrides}
                          {...itemProps}
                        >
                          <Option
                            label={option.label}
                            inputValue={inputValue}
                            option={option}
                            overrides={overrides}
                            MatchedLabel={(props) => (
                              <MatchedLabel label={option.label} inputValue={inputValue} {...props} />
                            )}
                          />
                        </AutosuggestItem>
                      ))}
                    {isLoadingMore && <LoadingMore loadingText={loadingMoreText} overrides={overrides} />}
                  </React.Fragment>
                ) : isLoading ? (
                  <Loading loadingText={loadingText} overrides={overrides} />
                ) : isError ? (
                  <Error errorText={errorText} overrides={overrides} />
                ) : (
                  <Empty
                    emptyText={emptyText}
                    inputValue={inputValue}
                    create={handleCreate}
                    itemProps={{ 'aria-selected': highlightedIndex === 0 }}
                    overrides={overrides}
                  />
                )}
              </Box>
            )}
          </DropdownMenuPopover>
        </AutosuggestContext.Provider>
      ),
    };
  },
  {
    defaultProps: {
      cacheKey: 'bb-options',
      disabled: false,
      emptyText: 'No results found',
      errorText: 'An error occurred',
      loadingText: 'Loading...',
      loadingMoreText: 'Loading...',
      popoverHeight: '300px',
      options: [],
      renderClearButton: ClearButton,
      renderEmpty: Empty,
      renderError: Error,
      renderLoading: Loading,
      renderLoadingMore: Loading,
      renderOption: MatchedLabel,
    },
    themeKey: 'Autosuggest',
  }
);

export const Autosuggest = createComponent<AutosuggestProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: textProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Autosuggest',
    },
    themeKey: 'Autosuggest',
  }
);

//////////////////////////////////////////////////////////////////

function ClearButton(props: any) {
  const { buttonProps, onClick, ...restProps } = props;

  const { overrides, themeKey } = React.useContext(AutosuggestContext);

  const wrapperClassName = useClassName({
    style: styles.AutosuggestClearButtonWrapper,
    styleProps: { ...props, overrides },
    themeKey,
    themeKeySuffix: 'ClearButtonWrapper',
  });
  const buttonClassName = useClassName({
    style: styles.AutosuggestClearButton,
    styleProps: { ...props, overrides },
    themeKey,
    themeKeySuffix: 'ClearButton',
  });

  return (
    <Flex className={wrapperClassName} overrides={overrides} {...restProps}>
      <Button.Close
        className={buttonClassName}
        onClick={onClick}
        iconProps={{ fontSize: '200' }}
        size="small"
        onMouseDown={(e) => e.preventDefault()}
        overrides={overrides}
        {...buttonProps}
      />
    </Flex>
  );
}

function MatchedLabel(props: { label: string; inputValue: string; overrides: any }) {
  const { label, inputValue, ...restProps } = props;

  const { overrides, themeKey } = React.useContext(AutosuggestContext);
  const className = useClassName({
    style: styles.AutosuggestItemText,
    styleProps: props,
    themeKey,
    themeKeySuffix: 'ItemText',
  });

  const escapeStringRegexp = (string) => (string || '').replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
  const match = label.match(new RegExp(escapeStringRegexp(inputValue), 'i')) || [];

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

function Empty(props: { emptyText: string; overrides: any }) {
  const { emptyText, overrides, ...restProps } = props;
  return (
    <AutosuggestStaticItem overrides={overrides} {...restProps}>
      {emptyText}
    </AutosuggestStaticItem>
  );
}

function Error(props: { errorText: string; overrides: any }) {
  const { errorText, overrides, ...restProps } = props;
  return (
    <AutosuggestStaticItem overrides={overrides} {...restProps}>
      {errorText}
    </AutosuggestStaticItem>
  );
}

function Loading(props: { loadingText: string; overrides: any }) {
  const { loadingText, overrides, ...restProps } = props;
  return (
    <AutosuggestStaticItem display="flex" alignItems="center" overrides={overrides} {...restProps}>
      <Spinner size="small" overrides={overrides} />
      <Text marginLeft="major-1" overrides={overrides}>
        {loadingText}
      </Text>
    </AutosuggestStaticItem>
  );
}

//////////////////////////////////////////////////////////////////

function isMouseOutsidePopover({ inputRef, mousePositionRef, popoverRef }) {
  const { top } = inputRef.current.getBoundingClientRect();
  const { left, right, bottom } = popoverRef.current.getBoundingClientRect();
  const { clientX, clientY } = mousePositionRef.current;
  return left > clientX || right < clientX || top > clientY || bottom < clientY;
}

function getNewHighlightedIndex({ compare, highlightedIndex = -1, filteredOptions, count = 0 }) {
  const newHighlightedIndex = compare({
    index: highlightedIndex,
    optionsLength: filteredOptions.length - 1,
  });
  if (filteredOptions?.[newHighlightedIndex]?.disabled && count < filteredOptions.length) {
    return getNewHighlightedIndex({
      compare,
      highlightedIndex: newHighlightedIndex,
      filteredOptions,
      count: count + 1,
    });
  } else {
    if (count === filteredOptions.length) {
      return -1;
    }
    return newHighlightedIndex;
  }
}
