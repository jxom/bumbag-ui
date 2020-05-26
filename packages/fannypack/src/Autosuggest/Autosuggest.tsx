import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import _pick from 'lodash/pick';
import _omit from 'lodash/omit';
import _get from 'lodash/get';
import _debounce from 'lodash/debounce';
import * as Loads from 'react-loads-next';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Button, ButtonProps } from '../Button';
import { Input, InputProps } from '../Input';
import {
  DropdownMenu,
  DropdownMenuPopover,
  DropdownMenuDisclosure,
  DropdownMenuItem,
  DropdownMenuPopoverProps,
  DropdownMenuItemProps,
  DropdownMenuInitialState
} from '../DropdownMenu';
import { Spinner, SpinnerProps } from '../Spinner';
import { Text, TextProps } from '../Text';

import { AutosuggestItem } from './AutosuggestItem';
import { AutosuggestStaticItem } from './AutosuggestStaticItem';
import * as styles from './styles';

export type LocalAutosuggestProps = {
  automaticSelection?: boolean;
  cacheKey?: string;
  defer?: boolean;
  disabled?: boolean;
  limit?: number;
  loadOptions?: any;
  loadVariables?: any;
  options?: any;
  onChange: any;
  pagination?: boolean;
  placeholder?: InputProps['placeholder'];
  restrictToOptions?: boolean;
  value: any;

  errorText?: string;
  emptyText?: string;
  loadingText?: string;
  loadingMoreText?: string;

  renderError?: any;
  renderEmpty?: any;
  renderLoading?: any;
  renderLoadingMore?: any;
  renderOption?: any;

  inputProps?: Partial<InputProps>;
  itemProps?: Partial<DropdownMenuItemProps>;
  popoverProps?: Partial<DropdownMenuPopoverProps>;

  dropdownMenuInitialState?: Partial<DropdownMenuInitialState>;
};
export type AutosuggestProps = BoxProps & LocalAutosuggestProps;
export type AutosuggestContextOptions = {
  themeKey?: string;
  themeKeyOverride?: string;
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
        selectedOption: undefined
      };
    }
    case 'VALUE_CHANGE': {
      return {
        ...state,
        page: 1,
        highlightedIndex:
          _get(event, 'value.label', '') && event.automaticSelection
            ? getNewHighlightedIndex({
                compare: ({ index, optionsLength }) => (index < optionsLength ? index + 1 : 0),
                highlightedIndex: -1,
                filteredOptions: state.filteredOptions
              })
            : -1,
        inputValue: _get(event, 'value.label', ''),
        value: event.value
      };
    }
    case 'INPUT_BLUR': {
      return {
        ...state,
        highlightedIndex: -1,
        page: 1,
        inputValue:
          event.restrictToOptions && (state.highlightedIndex === -1 && !state.selectedOption) ? '' : state.inputValue
      };
    }
    case 'KEY_UP': {
      const newHighlightedIndex = getNewHighlightedIndex({
        compare: ({ index, optionsLength }) => (index > 0 ? index - 1 : optionsLength),
        highlightedIndex: state.highlightedIndex,
        filteredOptions: state.filteredOptions
      });

      return {
        ...state,
        highlightedIndex: newHighlightedIndex
      };
    }
    case 'KEY_DOWN': {
      const newHighlightedIndex = getNewHighlightedIndex({
        compare: ({ index, optionsLength }) => (index < optionsLength ? index + 1 : 0),
        highlightedIndex: state.highlightedIndex,
        filteredOptions: state.filteredOptions
      });

      return {
        ...state,
        highlightedIndex: newHighlightedIndex
      };
    }
    case 'KEY_ESC': {
      return { ...state, highlightedIndex: -1, inputValue: '' };
    }
    case 'KEY_ENTER': {
      return {
        ...state,
        highlightedIndex: -1,
        inputValue: event.restrictToOptions && state.highlightedIndex === -1 ? '' : state.inputValue
      };
    }
    case 'MOUSE_CLICK_ITEM': {
      if (event.option && event.option.disabled) return state;

      return { ...state, highlightedIndex: -1, inputValue: state.filteredOptions[event.index].label };
    }
    case 'OPTIONS_SET': {
      return { ...state, options: event.options };
    }
    case 'OPTIONS_FILTERED': {
      return { ...state, filteredOptions: event.filteredOptions };
    }
    case 'OPTION_SELECTED': {
      return { ...state, filteredOptions: [event.option], selectedOption: event.option, value: event.option };
    }
    case 'OPTION_CLEARED': {
      return { ...state, filteredOptions: state.options, inputValue: '', selectedOption: undefined, value: undefined };
    }
    case 'MOUSE_ENTER_POPOVER': {
      return { ...state, isMouseInsidePopover: true };
    }
    case 'MOUSE_LEAVE_POPOVER': {
      return {
        ...state,
        highlightedIndex: state.inputValue && event.automaticSelection ? 0 : -1,
        isMouseInsidePopover: false
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
  (props, { themeKey, themeKeyOverride }) => {
    const {
      automaticSelection,
      cacheKey,
      disabled,
      dropdownMenuInitialState,
      emptyText,
      errorText,
      loadingText,
      loadingMoreText,
      popoverProps,
      itemProps,
      inputProps,
      limit,
      loadOptions,
      loadVariables,
      onChange,
      options: initialOptions,
      pagination,
      renderEmpty: Empty,
      renderError: Error,
      renderLoading: Loading,
      renderLoadingMore: LoadingMore,
      renderOption: Option,
      placeholder,
      restrictToOptions,
      value,
      ...restProps
    } = props;

    //////////////////////////////////////////////////

    const boxProps = Box.useProps(restProps);

    //////////////////////////////////////////////////

    const dropdownMenu = DropdownMenu.useState({
      loop: true,
      gutter: 4,
      ...dropdownMenuInitialState
    });
    const dropdownMenuDisclosureProps = DropdownMenuDisclosure.useProps(dropdownMenu);

    //////////////////////////////////////////////////

    const mousePositionRef = React.useRef();
    const popoverRef = React.useRef();
    const [defer, setDefer] = React.useState(props.defer || !loadOptions);

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
      themeKeyOverride,
      prevClassName: boxProps.className
    });
    const dropdownMenuPopoverClassname = useClassName({
      style: styles.AutosuggestPopover,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Popover'
    });

    //////////////////////////////////////////////////

    const [
      { highlightedIndex, inputValue, filteredOptions, options, page, selectedOption },
      dispatch
    ] = React.useReducer(reducer, {
      highlightedIndex: -1,
      inputValue: _get(value, 'label'),
      isMouseInsidePopover: false,
      filteredOptions: initialOptions,
      options: initialOptions,
      page: 1,
      value: { label: '' }
    });

    //////////////////////////////////////////////////

    const getOptions = React.useCallback(
      async ({ loadVariables, page, searchText = '' }) => {
        if (typeof loadOptions === 'function') {
          const { options: fetchedOptions } = await loadOptions({ page, searchText, variables: loadVariables });

          let newOptions = [...options, ...fetchedOptions];
          if (page === 1) {
            newOptions = fetchedOptions;
          }

          return { options: newOptions };
        }
        return undefined;
      },
      [loadOptions, options]
    );
    const optionsRecord = Loads.useLoads(cacheKey, getOptions, {
      debounce: 500,
      debounceCache: false,
      defer,
      variables: [{ loadVariables, page, searchText: inputValue }]
    });

    //////////////////////////////////////////////////

    React.useEffect(
      () => {
        dispatch({ type: 'OPTIONS_SET', options: initialOptions });
      },
      [initialOptions]
    );

    React.useEffect(
      () => {
        if (loadOptions && optionsRecord.isResolved) {
          const options = _get(optionsRecord.response, 'options', []);
          dispatch({ type: 'OPTIONS_SET', options });
          dispatch({ type: 'OPTIONS_FILTERED', filteredOptions: options });
        }
      },
      [loadOptions, optionsRecord.isResolved, optionsRecord.response]
    );

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
      option => {
        dispatch({ type: 'OPTION_SELECTED', option });
        onChange && onChange(option);
        return option;
      },
      [onChange]
    );

    const filterOptions = React.useCallback(
      ({ controlsVisibility, hideIfNoOptions = true, searchText }) => {
        if (loadOptions) return;
        const filteredOptions = options.filter(option =>
          option.label.toLowerCase().includes(searchText.trim().toLowerCase())
        );
        if (controlsVisibility) {
          if (filteredOptions.length === 0 && hideIfNoOptions) {
            dropdownMenu.hide();
          } else {
            dropdownMenu.show();
          }
        }
        dispatch({ type: 'OPTIONS_FILTERED', filteredOptions, controlsVisibility });
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
      event => {
        const value = event.target.value;
        dispatch({ type: 'INPUT_BLUR', restrictToOptions, value });
        if ((inputValue && automaticSelection) || highlightedIndex >= 0) {
          selectOption({ index: highlightedIndex >= 0 ? highlightedIndex : 0 });
        }
        if (restrictToOptions && (!selectedOption && highlightedIndex === -1)) {
          onChange && onChange({ label: '' });
        }
        filterOptions({ searchText: value });
        if (isMouseOutsidePopover({ mousePositionRef, popoverRef })) {
          dropdownMenu.hide();
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
        selectedOption
      ]
    );

    const handleChangeInput = React.useCallback(
      event => {
        const value = event.target.value || '';
        dispatch({ type: 'INPUT_CHANGE' });
        filterOptions({ controlsVisibility: true, hideIfNoOptions: !restrictToOptions, searchText: value });
        onChange && onChange({ label: value });
      },
      [filterOptions, onChange, restrictToOptions]
    );

    const handleClickInput = React.useCallback(
      event => {
        const value = event.target.value;
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
      event => {
        const value = event.target.value;
        filterOptions({ controlsVisibility: true, searchText: value });
      },
      [filterOptions]
    );

    const handleKeyDownInput = React.useCallback(
      event => {
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

    const handleClear = React.useCallback(
      () => {
        dispatch({ type: 'OPTION_CLEARED' });
        onChange && onChange({ label: '' });
      },
      [onChange]
    );

    const handleMouseEnterPopover = React.useCallback(
      () => {
        dispatch({ type: 'MOUSE_ENTER_POPOVER', automaticSelection });
      },
      [automaticSelection]
    );

    const handleMouseLeavePopover = React.useCallback(
      () => {
        dispatch({ type: 'MOUSE_LEAVE_POPOVER', automaticSelection });
      },
      [automaticSelection]
    );

    const handleScrollPopover = React.useCallback(
      event => {
        const target = event.currentTarget;
        // TODO: test when at end of page count
        if (
          pagination &&
          !isLoadingMore &&
          target.scrollHeight > target.offsetHeight &&
          target.scrollHeight - target.offsetHeight - target.scrollTop <= 200
        ) {
          dispatch({ type: 'PAGE_INCREMENT' });
        }
        return;
      },
      [isLoadingMore, pagination]
    );

    const handleCreate = React.useCallback(
      option => {
        setOption(option);
        dropdownMenu.hide();
      },
      [dropdownMenu, setOption]
    );

    //////////////////////////////////////////////////

    React.useEffect(
      () => {
        if (value) {
          dispatch({ type: 'VALUE_CHANGE', automaticSelection, value });
        }
      },
      [automaticSelection, value]
    );

    //////////////////////////////////////////////////

    const context = React.useMemo(
      () => ({
        themeKey,
        themeKeyOverride
      }),
      [themeKey, themeKeyOverride]
    );

    //////////////////////////////////////////////////

    return {
      ...boxProps,
      ..._pick(dropdownMenuDisclosureProps, 'aria-expanded'),
      'aria-haspopup': 'listbox',
      'aria-owns': dropdownMenu.baseId,
      className,
      children: (
        <AutosuggestContext.Provider value={context}>
          <Input
            {..._omit(dropdownMenuDisclosureProps, 'type', 'className', 'role')}
            after={
              inputValue && (
                <Box display="flex" alignItems="center" justify-content="center" paddingY="minor-1" paddingX="minor-2">
                  <Button.Close
                    onClick={handleClear}
                    iconProps={{ fontSize: '200' }}
                    size="small"
                    onMouseDown={e => e.preventDefault()}
                  />
                </Box>
              )
            }
            aria-autocomplete="list"
            aria-activedescendant={_get(dropdownMenu, `items[${highlightedIndex}].id`)}
            disabled={disabled}
            onBlur={handleBlurInput}
            onClick={handleClickInput}
            onChange={handleChangeInput}
            onKeyDown={handleKeyDownInput}
            onFocus={handleFocusInput}
            placeholder={placeholder}
            value={inputValue}
            {...inputProps}
          />
          <DropdownMenuPopover
            {...dropdownMenu}
            ref={popoverRef}
            use="ul"
            className={dropdownMenuPopoverClassname}
            isTabbable={false}
            onMouseDown={e => e.preventDefault()}
            onMouseEnter={handleMouseEnterPopover}
            onMouseLeave={handleMouseLeavePopover}
            onScroll={handleScrollPopover}
            role="listbox"
            hideOnClickOutside={false}
            unstable_autoFocusOnHide={false}
            {...popoverProps}
          >
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
                      {...itemProps}
                    >
                      <Option
                        label={option.label}
                        inputValue={inputValue}
                        option={option}
                        MatchedLabel={props => <MatchedLabel label={option.label} inputValue={inputValue} {...props} />}
                      />
                    </AutosuggestItem>
                  ))}
                {isLoadingMore && <LoadingMore loadingText={loadingMoreText} />}
              </React.Fragment>
            ) : isLoading ? (
              <Loading loadingText={loadingText} />
            ) : isError ? (
              <Error errorText={errorText} />
            ) : (
              <Empty
                emptyText={emptyText}
                inputValue={inputValue}
                create={handleCreate}
                itemProps={{ 'aria-selected': highlightedIndex === 0 }}
              />
            )}
          </DropdownMenuPopover>
        </AutosuggestContext.Provider>
      )
    };
  },
  {
    defaultProps: {
      cacheKey: 'fp-options',
      disabled: false,
      emptyText: 'No results found',
      errorText: 'An error occurred',
      loadingText: 'Loading...',
      loadingMoreText: 'Loading...',
      options: [],
      renderEmpty: Empty,
      renderError: Error,
      renderLoading: Loading,
      renderLoadingMore: Loading,
      renderOption: MatchedLabel
    },
    themeKey: 'Autosuggest'
  }
);

export const Autosuggest = createComponent<AutosuggestProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Autosuggest'
  }
);

//////////////////////////////////////////////////////////////////

function MatchedLabel(props: { label: string; inputValue: string }) {
  const { label, inputValue, ...restProps } = props;

  const escapeStringRegexp = string => string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
  const match = label.match(new RegExp(escapeStringRegexp(inputValue), 'i')) || [];

  const preText = label.slice(0, match.index);
  const highlightedText = match[0];
  const postText = label.slice(match.index + (match[0] || '').length);

  return highlightedText ? (
    <Text {...restProps}>
      {preText && <Text>{preText}</Text>}
      {highlightedText && <Text fontWeight="semibold">{highlightedText}</Text>}
      {postText && <Text>{postText}</Text>}
    </Text>
  ) : (
    <Text {...restProps}>{label}</Text>
  );
}

function Empty(props: { emptyText: string }) {
  const { emptyText, ...restProps } = props;
  return <AutosuggestStaticItem {...restProps}>{emptyText}</AutosuggestStaticItem>;
}

function Error(props: { errorText: string }) {
  const { errorText, ...restProps } = props;
  return <AutosuggestStaticItem {...restProps}>{errorText}</AutosuggestStaticItem>;
}

function Loading(props: { loadingText: string }) {
  const { loadingText, ...restProps } = props;
  return (
    <AutosuggestStaticItem display="flex" alignItems="center" {...restProps}>
      <Spinner size="small" />
      <Text marginLeft="major-1">{loadingText}</Text>
    </AutosuggestStaticItem>
  );
}

//////////////////////////////////////////////////////////////////

function isMouseOutsidePopover({ mousePositionRef, popoverRef }) {
  const { left, right, top, bottom } = popoverRef.current.getBoundingClientRect();
  const { clientX, clientY } = mousePositionRef.current;
  return left > clientX || right < clientX || top > clientY || bottom < clientY;
}

function getNewHighlightedIndex({ compare, highlightedIndex = -1, filteredOptions, count = 0 }) {
  const newHighlightedIndex = compare({ index: highlightedIndex, optionsLength: filteredOptions.length - 1 });
  if (_get(filteredOptions, `[${newHighlightedIndex}].disabled`) && count < filteredOptions.length) {
    return getNewHighlightedIndex({
      compare,
      highlightedIndex: newHighlightedIndex,
      filteredOptions,
      count: count + 1
    });
  } else {
    if (count === filteredOptions.length) {
      return -1;
    }
    return newHighlightedIndex;
  }
}
