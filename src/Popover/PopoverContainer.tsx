import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
// @ts-ignore
import ReakitPopover from 'reakit/Popover';

export interface LocalPopoverContainerProps {
  children: ((
    {
      isVisible,
      hide,
      show,
      toggle,
      ...args
    }: {
      isVisible: boolean;
      hide(): void;
      show(): void;
      toggle(): void;
    }
  ) => React.ReactNode);
  defaultVisible?: boolean;
  initialState?: {};
}
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

PopoverContainer.propTypes = {
  children: PropTypes.func.isRequired,
  defaultVisible: PropTypes.bool,
  initialState: PropTypes.object
};
PopoverContainer.defaultProps = {
  defaultVisible: false,
  initialState: {}
};

export default PopoverContainer;
