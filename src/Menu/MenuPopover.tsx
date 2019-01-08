import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import Component from '@reactions/component';

import { LocalPopoverProps, PopoverProps, popoverPropTypes, popoverDefaultProps } from '../Popover/Popover';
import MenuContext from './MenuContext';
import { MenuPopover as _MenuPopover } from './styled';

export type LocalMenuPopoverProps = LocalPopoverProps & {
  children: React.ReactNode;
};
export type MenuPopoverProps = PopoverProps & LocalMenuPopoverProps;

export class MenuPopover extends React.Component<LocalMenuPopoverProps> {
  static propTypes = {
    ...popoverPropTypes,
    children: PropTypes.node.isRequired
  };
  static defaultProps = {
    ...popoverDefaultProps
  };

  render = () => {
    const { children, ...props } = this.props;
    return (
      <MenuContext.Provider>
        <_MenuPopover {...props} gutter={6} placement="bottom-start">
          {(popover: any) => (
            <MenuContext.Consumer>
              {({ setPopoverProps }) => (
                <Component
                  initialState={{ isVisible: popover.isVisible }}
                  // @ts-ignore
                  didMount={({ setState }) => {
                    setState({ isVisible: popover.isVisible });
                    setPopoverProps && setPopoverProps(popover);
                  }}
                  // @ts-ignore
                  didUpdate={({ state: { isVisible }, setState }) => {
                    if (popover.isVisible !== isVisible) {
                      setState({ isVisible: popover.isVisible });
                      setPopoverProps && setPopoverProps(popover);
                    }
                  }}
                >
                  {() => children}
                </Component>
              )}
            </MenuContext.Consumer>
          )}
        </_MenuPopover>
      </MenuContext.Provider>
    );
  };
}

// @ts-ignore
const C: React.FunctionComponent<MenuPopoverProps> = MenuPopover;
export default C;
