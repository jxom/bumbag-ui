import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import Component from '@reactions/component';

import { LocalPopoverProps, PopoverProps, popoverPropTypes, popoverDefaultProps } from '../Popover/Popover';
import MenuContext, { MenuProvider } from './MenuContext';
import { MenuPopover as _MenuPopover } from './styled';

export type LocalMenuPopoverProps = LocalPopoverProps & {
  children: React.ReactNode;
};
export type MenuPopoverProps = PopoverProps & LocalMenuPopoverProps;

export const menuPopoverPropTypes = {
  ...popoverPropTypes,
  children: PropTypes.node.isRequired
};
export const menuPopoverDefaultProps = {
  ...popoverDefaultProps,
  gutter: 6,
  placement: 'bottom-start'
};

export class MenuPopover extends React.Component<LocalMenuPopoverProps> {
  static propTypes = menuPopoverPropTypes;
  static defaultProps = menuPopoverDefaultProps;

  render = () => {
    const { children, ...props } = this.props;
    return (
      <MenuProvider>
        <_MenuPopover {...props}>
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
      </MenuProvider>
    );
  };
}

// @ts-ignore
const C: React.FunctionComponent<MenuPopoverProps> = MenuPopover;
export default C;
