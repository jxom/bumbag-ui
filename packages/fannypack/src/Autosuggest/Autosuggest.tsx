import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import _pick from 'lodash/pick';
import _omit from 'lodash/omit';
import _get from 'lodash/get';

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
import { Text, TextProps } from '../Text';

import { AutosuggestItem } from './AutosuggestItem';
import { AutosuggestStaticItem } from './AutosuggestStaticItem';
import * as styles from './styles';

export type LocalAutosuggestProps = {
  automaticSelection?: boolean;
  disabled?: boolean;
  emptyText?: string;
  options: any;
  onChange: any;
  placeholder?: InputProps['placeholder'];
  restrictToOptions?: boolean;
  value: any;

  renderEmpty?: any;
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
        selectedOption: undefined
      };
    }
    case 'VALUE_CHANGE': {
      return {
        ...state,
        highlightedIndex: _get(event, 'value.label', '') && event.automaticSelection ? 0 : -1,
        inputValue: _get(event, 'value.label', ''),
        value: event.value
      };
    }
    case 'INPUT_BLUR': {
      return {
        ...state,
        highlightedIndex: -1,
        inputValue:
          event.restrictToOptions && (state.highlightedIndex === -1 && !state.selectedOption) ? '' : state.inputValue
      };
    }
    case 'KEY_UP': {
      const newHighlightedIndex =
        state.highlightedIndex > 0 ? state.highlightedIndex - 1 : state.filteredOptions.length - 1;

      return {
        ...state,
        highlightedIndex: newHighlightedIndex
      };
    }
    case 'KEY_DOWN': {
      const newHighlightedIndex =
        state.highlightedIndex < state.filteredOptions.length - 1 ? state.highlightedIndex + 1 : 0;

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
    case 'MOUSE_ENTER_ITEM': {
      const newHighlightedIndex = event.index;
      return {
        ...state,
        highlightedIndex: newHighlightedIndex
      };
    }
    case 'MOUSE_LEAVE_ITEM': {
      const newHighlightedIndex = state.highlightedIndex === event.index ? -1 : state.highlightedIndex;
      return {
        ...state,
        highlightedIndex: newHighlightedIndex
      };
    }
    case 'MOUSE_CLICK_ITEM': {
      return { ...state, highlightedIndex: -1, inputValue: state.filteredOptions[event.index].label };
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
    default: {
      return state;
    }
  }
}

const useProps = createHook<AutosuggestProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const {
      automaticSelection,
      disabled,
      dropdownMenuInitialState,
      emptyText,
      popoverProps,
      itemProps,
      inputProps,
      onChange,
      options,
      renderEmpty: Empty,
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
      { highlightedIndex, inputValue, isMouseInsidePopover, filteredOptions, selectedOption },
      dispatch
    ] = React.useReducer(reducer, {
      highlightedIndex: -1,
      inputValue: _get(value, 'label'),
      isMouseInsidePopover: false,
      filteredOptions: options,
      options,
      value: { label: '' }
    });

    //////////////////////////////////////////////////

    const filterOptions = React.useCallback(
      ({ controlsVisibility, hideIfNoOptions = true, searchText }) => {
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
      [dispatch, dropdownMenu, options]
    );

    const selectOption = React.useCallback(
      ({ index }) => {
        const option = filteredOptions[index];
        dispatch({ type: 'OPTION_SELECTED', option });
        onChange && onChange(option);
        return option;
      },
      [filteredOptions, onChange]
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
      },
      [filterOptions]
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
      index => () => {
        dispatch({ type: 'MOUSE_CLICK_ITEM', index });
        dropdownMenu.hide();
        selectOption({ index });
      },
      [dispatch, dropdownMenu, selectOption]
    );

    const handleMouseEnterItem = React.useCallback(
      index => () => {
        dispatch({ type: 'MOUSE_ENTER_ITEM', index });
      },
      [dispatch]
    );

    const handleMouseLeaveItem = React.useCallback(
      index => () => {
        dispatch({ type: 'MOUSE_LEAVE_ITEM', index });
      },
      [dispatch]
    );

    const handleClear = React.useCallback(() => {
      dispatch({ type: 'OPTION_CLEARED' });
      onChange && onChange({ label: '' });
    }, [onChange]);

    const handleMouseEnterPopover = React.useCallback(() => {
      dispatch({ type: 'MOUSE_ENTER_POPOVER', automaticSelection });
    }, [automaticSelection]);

    const handleMouseLeavePopover = React.useCallback(() => {
      dispatch({ type: 'MOUSE_LEAVE_POPOVER', automaticSelection });
    }, [automaticSelection]);

    //////////////////////////////////////////////////

    React.useEffect(() => {
      if (value) {
        dispatch({ type: 'VALUE_CHANGE', automaticSelection, value });
      }
    }, [automaticSelection, value]);

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
            role="listbox"
            hideOnClickOutside={false}
            unstable_autoFocusOnHide={false}
            {...popoverProps}
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <AutosuggestItem
                  key={option.key}
                  {...dropdownMenu}
                  aria-selected={highlightedIndex === index}
                  iconAfter={option.iconAfter}
                  iconAfterProps={option.iconAfterProps}
                  iconBefore={option.iconBefore}
                  iconBeforeProps={option.iconBeforeProps}
                  onClick={handleClickItem(index)}
                  onMouseEnter={handleMouseEnterItem(index)}
                  onMouseLeave={handleMouseLeaveItem(index)}
                  {...itemProps}
                >
                  <Option
                    label={option.label}
                    inputValue={inputValue}
                    option={option}
                    MatchedLabel={props => <MatchedLabel label={option.label} inputValue={inputValue} {...props} />}
                  />
                </AutosuggestItem>
              ))
            ) : (
              <Empty emptyText={emptyText} inputValue={inputValue} />
            )}
          </DropdownMenuPopover>
        </AutosuggestContext.Provider>
      )
    };
  },
  {
    defaultProps: { disabled: false, emptyText: 'No results found', renderEmpty: Empty, renderOption: MatchedLabel },
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

function isMouseOutsidePopover({ mousePositionRef, popoverRef }) {
  const { left, right, top, bottom } = popoverRef.current.getBoundingClientRect();
  const { clientX, clientY } = mousePositionRef.current;
  return left > clientX || right < clientX || top > clientY || bottom < clientY;
}
