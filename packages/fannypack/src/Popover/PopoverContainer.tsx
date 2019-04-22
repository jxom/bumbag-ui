import * as React from 'react';
import * as PropTypes from 'prop-types';
import ReakitPopover from 'reakit/Popover';

export type PopoverContainerRenderProps = {
  isVisible: boolean;
  hide(): void;
  show(): void;
  toggle(): void;
};
export type LocalPopoverContainerProps = {
  children: ({ isVisible, hide, show, toggle, ...args }: PopoverContainerRenderProps) => React.ReactNode;
  defaultVisible?: boolean;
  initialState?: {};
};
export type PopoverContainerProps = LocalPopoverContainerProps;

export const PopoverContainer: React.FunctionComponent<LocalPopoverContainerProps> = ({
  children,
  defaultVisible,
  initialState,
  ...props
}) => (
  <ReakitPopover.Container initialState={{ visible: defaultVisible, ...initialState }} {...props}>
    {({ visible, ...rest }: { visible: boolean }) => children({ isVisible: visible, ...rest } as any)}
  </ReakitPopover.Container>
);

export const popoverContainerPropTypes = {
  children: PropTypes.func.isRequired,
  defaultVisible: PropTypes.bool,
  initialState: PropTypes.object
};
PopoverContainer.propTypes = popoverContainerPropTypes;

export const popoverContainerDefaultProps = {
  defaultVisible: false,
  initialState: {}
};
PopoverContainer.defaultProps = popoverContainerDefaultProps;

export default PopoverContainer;
