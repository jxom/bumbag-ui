import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import _pick from 'lodash/pick';
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

import * as styles from './styles';

export type LocalAutosuggestProps = {
  options: any;
  placeholder?: InputProps['placeholder'];

  inputProps?: Partial<InputProps>;
  itemProps?: Partial<DropdownMenuItemProps>;
  popoverProps?: Partial<DropdownMenuPopoverProps>;

  dropdownMenuInitialState?: Partial<DropdownMenuInitialState>;
};
export type AutosuggestProps = BoxProps & LocalAutosuggestProps;

const KEY_ENTER = 13;
const KEY_ESC = 27;
const KEY_UP = 38;
const KEY_DOWN = 40;

function reducer(state, event) {
  switch (event.type) {
    case 'INPUT_CHANGE': {
      return {
        ...state,
        highlightedIndex: -1,
        inputValue: event.value,
        selectedOption: undefined
      };
    }
    case 'INPUT_BLUR': {
      return {
        ...state,
        highlightedIndex: -1
      };
    }
    case 'KEY_UP': {
      const newHighlightedIndex =
        state.highlightedIndex > 0 ? state.highlightedIndex - 1 : state.filteredOptions.length - 1;

      return {
        ...state,
        highlightedIndex: newHighlightedIndex,
        inputValue: newHighlightedIndex >= 0 ? state.filteredOptions[newHighlightedIndex].label : ''
      };
    }
    case 'KEY_DOWN': {
      const newHighlightedIndex =
        state.highlightedIndex < state.filteredOptions.length - 1 ? state.highlightedIndex + 1 : 0;

      return {
        ...state,
        highlightedIndex: newHighlightedIndex,
        inputValue: newHighlightedIndex >= 0 ? state.filteredOptions[newHighlightedIndex].label : ''
      };
    }
    case 'KEY_ESC': {
      return { ...state, highlightedIndex: -1, inputValue: '' };
    }
    case 'KEY_ENTER': {
      return { ...state, highlightedIndex: -1 };
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
      return { ...state, filteredOptions: [event.option], selectedOption: event.option };
    }
    case 'OPTION_CLEARED': {
      return { ...state, filteredOptions: state.options, inputValue: '', selectedOption: undefined };
    }
    default: {
      return state;
    }
  }
}

const useProps = createHook<AutosuggestProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const { dropdownMenuInitialState, popoverProps, itemProps, inputProps, options, placeholder, ...restProps } = props;

    //////////////////////////////////////////////////

    const boxProps = Box.useProps(restProps);

    //////////////////////////////////////////////////

    const dropdownMenu = DropdownMenu.useState({ loop: true, gutter: 4, ...dropdownMenuInitialState });
    const dropdownMenuDisclosureProps = DropdownMenuDisclosure.useProps(dropdownMenu);

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
    const dropdownMenuItemClassname = useClassName({
      style: styles.AutosuggestItem,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      themeKeySuffix: 'Item'
    });

    //////////////////////////////////////////////////

    const [{ highlightedIndex, inputValue, filteredOptions, selectedOption }, dispatch] = React.useReducer(reducer, {
      highlightedIndex: -1,
      inputValue: '',
      filteredOptions: options,
      options
    });

    //////////////////////////////////////////////////

    const filterOptions = React.useCallback(
      ({ controlsVisibility, searchText }) => {
        const filteredOptions = options.filter(option =>
          option.label.toLowerCase().includes(searchText.trim().toLowerCase())
        );
        if (controlsVisibility) {
          if (filteredOptions.length === 0) {
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
        return option;
      },
      [dispatch, filteredOptions]
    );

    //////////////////////////////////////////////////

    const handleBlurInput = React.useCallback(
      event => {
        const value = event.target.value;
        dispatch({ type: 'INPUT_BLUR', value });
        if (highlightedIndex === -1) {
          filterOptions({ searchText: value });
          dropdownMenu.hide();
        }
      },
      [dispatch, dropdownMenu, filterOptions, highlightedIndex]
    );

    const handleChangeInput = React.useCallback(
      event => {
        const value = event.target.value;
        dispatch({ type: 'INPUT_CHANGE', value });
        filterOptions({ controlsVisibility: true, searchText: value });
      },
      [dispatch, filterOptions]
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
        dropdownMenu.show();
      },
      [dropdownMenu]
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
          dispatch({ type: 'KEY_ENTER' });
          if (highlightedIndex >= 0) {
            dropdownMenu.hide();
            selectOption({ index: highlightedIndex });
          }
        }
      },
      [dispatch, dropdownMenu, highlightedIndex, selectOption]
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
    }, []);

    //////////////////////////////////////////////////

    return {
      ...boxProps,
      ..._pick(dropdownMenuDisclosureProps, 'aria-expanded'),
      'aria-haspopup': 'listbox',
      'aria-owns': dropdownMenu.baseId,
      className,
      children: (
        <React.Fragment>
          <Input
            {..._pick(dropdownMenuDisclosureProps, 'aria-controls', 'ref')}
            after={
              selectedOption && (
                <Box display="flex" alignItems="center" justify-content="center" paddingY="minor-1" paddingX="minor-2">
                  <Button.Close onClick={handleClear} iconProps={{ fontSize: '200' }} size="small" />
                </Box>
              )
            }
            aria-autocomplete="list"
            aria-activedescendant={_get(dropdownMenu, `items[${highlightedIndex}].id`)}
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
            use="ul"
            className={dropdownMenuPopoverClassname}
            isTabbable={false}
            role="listbox"
            hideOnEsc={false}
            hideOnClickOutside={false}
            unstable_autoFocusOnHide={false}
            {...popoverProps}
          >
            {filteredOptions.map((option, index) => (
              <DropdownMenuItem
                key={option.key}
                {...dropdownMenu}
                use="li"
                aria-selected={highlightedIndex === index}
                className={dropdownMenuItemClassname}
                isTabbable={false}
                onClick={handleClickItem(index)}
                onMouseEnter={handleMouseEnterItem(index)}
                onMouseLeave={handleMouseLeaveItem(index)}
                role="option"
                {...itemProps}
              >
                <Option label={option.label} inputValue={inputValue} />
              </DropdownMenuItem>
            ))}
          </DropdownMenuPopover>
        </React.Fragment>
      )
    };
  },
  { themeKey: 'Autosuggest' }
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

function Option(props: { label: string; inputValue: string }) {
  const { label, inputValue } = props;

  const escapeStringRegexp = string => string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
  const match = label.match(new RegExp(escapeStringRegexp(inputValue), 'i')) || [];

  const preText = label.slice(0, match.index);
  const highlightedText = match[0];
  const postText = label.slice(match.index + (match[0] || '').length);

  return highlightedText ? (
    <React.Fragment>
      {preText && <Text>{preText}</Text>}
      {highlightedText && <Text fontWeight="semibold">{highlightedText}</Text>}
      {postText && <Text>{postText}</Text>}
    </React.Fragment>
  ) : (
    <Text>{label}</Text>
  );
}
