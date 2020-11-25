import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';
import { DropdownMenuItem, DropdownMenuItemProps } from '../DropdownMenu';

import * as styles from './Autosuggest.styles';

export type LocalAutosuggestItemProps = {};
export type AutosuggestItemProps = BoxProps & DropdownMenuItemProps & LocalAutosuggestItemProps;

const useProps = createHook<AutosuggestItemProps>(
  (props, { themeKey }) => {
    const dropdownMenuItemProps = DropdownMenuItem.useProps(props);

    const className = useClassName({
      style: styles.AutosuggestItem,
      styleProps: props,
      themeKey,
      prevClassName: dropdownMenuItemProps.className,
    });

    return { ...dropdownMenuItemProps, className };
  },
  { defaultProps: { isTabbable: false, role: 'option' }, themeKey: 'Autosuggest.Item' }
);

export const AutosuggestItem = createComponent<AutosuggestItemProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Autosuggest.Item',
    },
    defaultProps: {
      use: 'li',
    },
    themeKey: 'Autosuggest.Item',
  }
);
