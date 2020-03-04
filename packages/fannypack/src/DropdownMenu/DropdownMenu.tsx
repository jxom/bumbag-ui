import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { DropdownMenuButton } from './DropdownMenuButton';
import { DropdownMenuPopover } from './DropdownMenuPopover';
import { useDropdownMenuState, DropdownMenuInitialState, DropdownMenuStateReturn } from './DropdownMenuState';
import * as styles from './styles';

export type LocalDropdownMenuProps = {
  baseId?: DropdownMenuInitialState['baseId'];
  children: React.ReactElement<any>;
  content: any;
  visible?: DropdownMenuInitialState['visible'];
};
export type DropdownMenuProps = BoxProps & LocalDropdownMenuProps;

export const DropdownMenuContext = React.createContext<{
  dropdownMenu: Partial<DropdownMenuStateReturn>;
  overrides: any;
}>({
  dropdownMenu: {},
  overrides: {}
});

const useProps = createHook<DropdownMenuProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const { baseId, children, content, overrides, visible, ...restProps } = props;
    const boxProps = Box.useProps(restProps);

    const dropdownMenu = useDropdownMenuState({ baseId, visible });

    const dropdownMenuButtonProps = DropdownMenuButton.useProps({
      ...dropdownMenu,
      overrides
    });

    const className = useClassName({
      style: styles.DropdownMenu,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    const contextValue = React.useMemo(() => ({ dropdownMenu, overrides }), [dropdownMenu, overrides]);

    return {
      ...boxProps,
      className,
      children: (
        <DropdownMenuContext.Provider value={contextValue}>
          {React.cloneElement(children, { ...dropdownMenuButtonProps })}
          <DropdownMenuPopover {...dropdownMenu} overrides={overrides}>
            {content}
          </DropdownMenuPopover>
        </DropdownMenuContext.Provider>
      )
    };
  },
  { themeKey: 'DropdownMenu' }
);

export const DropdownMenu = createComponent<DropdownMenuProps>(
  props => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'DropdownMenu'
  }
);
