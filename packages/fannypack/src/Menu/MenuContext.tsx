import * as React from 'react';

import { PopoverContainerRenderProps } from '../Popover/PopoverContainer';

export type MenuProviderProps = {
  children: React.ReactNode;
};
export type MenuContextState = PopoverContainerRenderProps & {
  isVisible: boolean;
  startAt?: 'first' | 'last';
  handleMenuOpenViaKeyboard: (opts?: { startAt?: 'first' | 'last' }) => void;
  setPopoverProps: (popover: PopoverContainerRenderProps) => void;
};

const initialState: MenuContextState = {
  startAt: undefined,
  handleMenuOpenViaKeyboard: () => {},
  setPopoverProps: () => {},
  hide: () => {},
  show: () => {},
  toggle: () => {},
  isVisible: false
};
const Context = React.createContext(initialState);

class MenuProvider extends React.Component<MenuProviderProps> {
  handleMenuOpenViaKeyboard = ({ startAt = 'first' } = {}) => {
    this.setState({ startAt }, this.state.show);
  };

  setPopoverProps = (popover: PopoverContainerRenderProps) => {
    this.setState({ ...popover });
  };

  state = {
    ...initialState,
    setPopoverProps: this.setPopoverProps,
    handleMenuOpenViaKeyboard: this.handleMenuOpenViaKeyboard
  };

  render = () => {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  };
}

export default { ...Context, Provider: MenuProvider };

export const withMenuContext = (C: React.ComponentType<any>) => (props: any) => (
  <Context.Consumer>{context => <C context={context} {...props} />}</Context.Consumer>
);
