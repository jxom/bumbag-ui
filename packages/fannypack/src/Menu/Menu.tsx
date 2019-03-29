import * as React from 'react';
import * as PropTypes from 'prop-types';

import {
  LocalNavigationProps,
  NavigationProps,
  navigationPropTypes,
  navigationDefaultProps
} from '../Navigation/Navigation';
import { Omit } from '../types';

import _Menu from './styled';
import MenuButton, { MenuButtonProps } from './MenuButton';
import MenuDivider, { MenuDividerProps } from './MenuDivider';
import MenuGroup, { MenuGroupProps } from './MenuGroup';
import MenuItem, { MenuItemProps } from './MenuItem';
import MenuPopover, { MenuPopoverProps } from './MenuPopover';
import { withMenuContext, MenuContextState } from './MenuContext';

export type LocalMenuProps = LocalNavigationProps & {
  children: React.ReactNode;
  context?: MenuContextState;
  isHorizontal?: boolean;
  setInitialFocus?: boolean;
};
export type MenuProps = Omit<NavigationProps, 'ref'> & LocalMenuProps;
export type MenuComponents = {
  Button: React.FunctionComponent<MenuButtonProps>;
  Divider: React.FunctionComponent<MenuDividerProps>;
  Group: React.FunctionComponent<MenuGroupProps>;
  Item: React.FunctionComponent<MenuItemProps>;
  Popover: React.FunctionComponent<MenuPopoverProps>;
};
type State = {
  activeItemIndex: number;
};

const KEYS = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  HOME: 36,
  END: 35,
  FNUP: 33,
  FNDOWN: 34
};

export class Menu extends React.Component<LocalMenuProps, State> {
  static propTypes = {
    ...navigationPropTypes,
    children: PropTypes.node.isRequired,
    isHorizontal: PropTypes.bool
  };
  static defaultProps = {
    ...navigationDefaultProps,
    isHorizontal: false,
    role: 'menu',
    setInitialFocus: true
  };

  menu = React.createRef<HTMLElement>();

  state = {
    activeItemIndex: -1
  };

  componentDidUpdate = (prevProps: MenuProps) => {
    const { context, setInitialFocus } = this.props;
    const { context: prevContext } = prevProps;
    if (setInitialFocus && context && prevContext && context.isVisible !== prevContext.isVisible) {
      const menuItems =
        (this.menu.current && this.menu.current.querySelectorAll('[role=menuitem]:not(:disabled)')) || [];
      const startAtFirst = !context.startAt || context.startAt === 'first';
      requestAnimationFrame(() => {
        const focusedItem = menuItems[startAtFirst ? 0 : menuItems.length - 1];
        if (focusedItem) {
          // @ts-ignore
          focusedItem.focus();
        }
      });
    }
  };

  handleKeyDown = (e: React.KeyboardEvent<any>) => {
    const { activeItemIndex: prevActiveItemIndex } = this.state;
    const menuItems = (this.menu.current && this.menu.current.querySelectorAll('[role=menuitem]:not(:disabled)')) || [];

    if (Object.values(KEYS).some(key => e.keyCode === key)) {
      let activeItemIndex = prevActiveItemIndex;
      e.preventDefault();

      if (e.keyCode === KEYS.DOWN || e.keyCode === KEYS.RIGHT) {
        activeItemIndex = prevActiveItemIndex + 1;
        if (activeItemIndex >= menuItems.length) {
          activeItemIndex = 0;
        }
      } else if (e.keyCode === KEYS.UP || e.keyCode === KEYS.LEFT) {
        activeItemIndex = prevActiveItemIndex - 1;
        if (activeItemIndex < 0) {
          activeItemIndex = menuItems.length - 1;
        }
      } else if (e.keyCode === KEYS.HOME || e.keyCode === KEYS.FNUP) {
        activeItemIndex = 0;
      } else if (e.keyCode === KEYS.END || e.keyCode === KEYS.FNDOWN) {
        activeItemIndex = menuItems.length - 1;
      }

      if (activeItemIndex > -1 && menuItems[activeItemIndex]) {
        // @ts-ignore
        menuItems[activeItemIndex].focus();
        this.setState({ activeItemIndex });
      }
    }
  };

  handleFocus = () => {
    const { setInitialFocus } = this.props;
    const menuItems = (this.menu.current && this.menu.current.querySelectorAll('[role=menuitem]')) || [];

    let activeItemIndex = setInitialFocus ? 0 : -1;
    // @ts-ignore
    menuItems.forEach((item, i) => {
      if (document.activeElement && document.activeElement.isEqualNode(item)) {
        activeItemIndex = i;
      }
    });

    this.setState({ activeItemIndex });
  };

  render = () => {
    const { children, isHorizontal, ...props } = this.props;
    return (
      <_Menu
        elementRef={this.menu}
        aria-orientation={isHorizontal ? 'horizontal' : 'vertical'}
        isHorizontal={isHorizontal}
        onKeyDown={this.handleKeyDown}
        onFocus={this.handleFocus}
        {...props}
      >
        {children}
      </_Menu>
    );
  };
}

// @ts-ignore
const C: React.FunctionComponent<MenuProps> & MenuComponents = withMenuContext(Menu);
C.Button = MenuButton;
C.Divider = MenuDivider;
C.Group = MenuGroup;
C.Item = MenuItem;
C.Popover = MenuPopover;
export default C;
