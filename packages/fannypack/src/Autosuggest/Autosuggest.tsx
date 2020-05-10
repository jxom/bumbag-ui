import * as React from 'react';
import { Box as ReakitBox } from 'reakit';
import _pick from 'lodash/pick';
import { useEffectReducer } from 'use-effect-reducer';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { Input, InputProps } from '../Input';
import { DropdownMenu, DropdownMenuPopover, DropdownMenuDisclosure, DropdownMenuItem } from '../DropdownMenu';
import { Text, TextProps } from '../Text';

import * as styles from './styles';

export type LocalAutosuggestProps = {
  options: any;
  placeholder?: InputProps['placeholder'];
  inputProps?: Partial<InputProps>;
};
export type AutosuggestProps = BoxProps & LocalAutosuggestProps;

const KEY_ESC = 27;
const KEY_UP = 38;
const KEY_DOWN = 40;

function reducer(state, event, exec) {
  switch (event.type) {
    case 'INPUT_CHANGE': {
      exec({ type: 'filterOptions', searchText: event.value });

      return {
        ...state,
        highlightedIndex: -1,
        inputValue: event.value
      };
    }
    case 'INPUT_BLUR': {
      exec({ type: 'hideDropdownMenu' });

      return {
        ...state
      };
    }
    case 'INPUT_CLICK': {
      exec({ type: 'showDropdownMenu' });

      return {
        ...state
      };
    }
    case 'INPUT_FOCUS': {
      exec({ type: 'showDropdownMenu' });

      return {
        ...state
      };
    }
    case 'KEY_UP': {
      const newHighlightedIndex =
        state.highlightedIndex > 0 ? state.highlightedIndex - 1 : state.filteredOptions.length - 1;

      exec({ type: 'showDropdownMenu' });

      return {
        ...state,
        highlightedIndex: newHighlightedIndex,
        inputValue: newHighlightedIndex >= 0 ? state.filteredOptions[newHighlightedIndex].label : ''
      };
    }
    case 'KEY_DOWN': {
      const newHighlightedIndex =
        state.highlightedIndex < state.filteredOptions.length - 1 ? state.highlightedIndex + 1 : 0;

      exec({ type: 'showDropdownMenu' });

      return {
        ...state,
        highlightedIndex: newHighlightedIndex,
        inputValue: newHighlightedIndex >= 0 ? state.filteredOptions[newHighlightedIndex].label : ''
      };
    }
    case 'KEY_ESC': {
      exec({ type: 'hideDropdownMenu' });

      return { ...state, highlightedIndex: -1, inputValue: '' };
    }
    case 'OPTIONS_FILTERED': {
      if (event.filteredOptions.length === 0) {
        exec({ type: 'hideDropdownMenu' });
      } else {
        exec({ type: 'showDropdownMenu' });
      }

      return { ...state, filteredOptions: event.filteredOptions };
    }
    default: {
      return state;
    }
  }
}

const useProps = createHook<AutosuggestProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const { inputProps, options, placeholder, ...restProps } = props;

    //////////////////////////////////////////////////

    const boxProps = Box.useProps(restProps);

    //////////////////////////////////////////////////

    const dropdownMenu = DropdownMenu.useState({ gutter: 4 });
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

    const filterOptions = React.useCallback(
      (state, effect, dispatch) => {
        const { searchText } = effect;
        const filteredOptions = options.filter(option =>
          option.label.toLowerCase().includes(searchText.trim().toLowerCase())
        );
        dispatch({ type: 'OPTIONS_FILTERED', filteredOptions });
      },
      [options]
    );

    const [{ highlightedIndex, inputValue, filteredOptions }, dispatch] = useEffectReducer(
      reducer,
      {
        highlightedIndex: -1,
        inputValue: '',
        filteredOptions: options
      },
      {
        showDropdownMenu: () => {
          if (!dropdownMenu.visible) {
            dropdownMenu.show();
          }
        },
        hideDropdownMenu: () => {
          dropdownMenu.hide();
        },
        filterOptions
      }
    );

    //////////////////////////////////////////////////

    const handleBlur = React.useCallback(
      event => {
        dispatch({ type: 'INPUT_BLUR' });
      },
      [dispatch]
    );

    const handleChange = React.useCallback(
      event => {
        const value = event.target.value;
        dispatch({ type: 'INPUT_CHANGE', value });
      },
      [dispatch]
    );

    const handleClick = React.useCallback(
      event => {
        dispatch({ type: 'INPUT_CLICK' });
      },
      [dispatch]
    );

    const handleFocus = React.useCallback(
      event => {
        dispatch({ type: 'INPUT_FOCUS' });
      },
      [dispatch]
    );

    const handleKeyDown = React.useCallback(
      event => {
        if (event.keyCode === KEY_ESC) {
          event.preventDefault();
          dispatch({ type: 'KEY_ESC' });
        }
        if (event.keyCode === KEY_DOWN) {
          event.preventDefault();
          dispatch({ type: 'KEY_DOWN' });
        }
        if (event.keyCode === KEY_UP) {
          event.preventDefault();
          dispatch({ type: 'KEY_UP' });
        }
      },
      [dispatch]
    );

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
            aria-autocomplete="list"
            // TODO: aria-activedescendant
            onBlur={handleBlur}
            onClick={handleClick}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
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
          >
            {filteredOptions.map((option, index) => (
              <DropdownMenuItem
                key={option.key}
                {...dropdownMenu}
                use="li"
                aria-selected={highlightedIndex === index}
                className={dropdownMenuItemClassname}
                isTabbable={false}
                role="option"
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

function Option(props) {
  const { label, inputValue } = props;
  const match = label.toLowerCase().match(inputValue.toLowerCase()) || [];
  // TODO: Highlight matched text
  return <Text>{label}</Text>;
}
