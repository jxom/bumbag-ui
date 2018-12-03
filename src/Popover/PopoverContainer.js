// @flow
import React from 'react';
import ReakitPopover from 'reakit/Popover';

type Props = {
  children: Function,
  defaultVisible?: boolean,
  initialState?: Object
};

const Popover = ({ children, defaultVisible, initialState, ...props }: Props) => (
  <ReakitPopover.Container initialState={{ visible: defaultVisible, ...initialState }} {...props}>
    {({ visible, ...rest }) => children({ isVisible: visible, ...rest })}
  </ReakitPopover.Container>
);

Popover.defaultProps = {
  defaultVisible: false,
  initialState: {}
};

export default Popover;
