import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { DropdownMenuButton } from './DropdownMenuButton';
import { DropdownMenuPopover } from './DropdownMenuPopover';
import { useDropdownMenuState, DropdownMenuInitialState, DropdownMenuStateReturn } from './DropdownMenuState';
import * as styles from './DropdownMenu.styles';

export type LocalDropdownMenuProps = {
  menu: any;
  children: React.ReactElement<any>;
  visible?: DropdownMenuInitialState['visible'];
  baseId?: DropdownMenuInitialState['baseId'];
  dropdownMenuState?: DropdownMenuInitialState;
};
export type DropdownMenuProps = BoxProps & LocalDropdownMenuProps;

export const DropdownMenuContext = React.createContext<{
  dropdownMenu: Partial<DropdownMenuStateReturn>;
  overrides: any;
}>({
  dropdownMenu: {},
  overrides: {},
});

const useProps = createHook<DropdownMenuProps>(
  (props, { themeKey }) => {
    const { baseId, children, dropdownMenuState, menu, overrides, visible, ...restProps } = props;
    const boxProps = Box.useProps(restProps);

    const dropdownMenu = useDropdownMenuState({ baseId, visible, ...dropdownMenuState });

    const dropdownMenuButtonProps = DropdownMenuButton.useProps({
      ...dropdownMenu,
      overrides,
    });

    const className = useClassName({
      style: styles.DropdownMenu,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    const contextValue = React.useMemo(() => ({ dropdownMenu, overrides }), [dropdownMenu, overrides]);

    return {
      ...boxProps,
      className,
      children: (
        <DropdownMenuContext.Provider value={contextValue}>
          {React.cloneElement(children, { ...dropdownMenuButtonProps })}
          {dropdownMenu.visible && (
            <DropdownMenuPopover {...dropdownMenu} overrides={overrides}>
              {menu}
            </DropdownMenuPopover>
          )}
        </DropdownMenuContext.Provider>
      ),
    };
  },
  { themeKey: 'DropdownMenu' }
);

export const DropdownMenu = createComponent<DropdownMenuProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'DropdownMenu',
    },
    themeKey: 'DropdownMenu',
  }
);
