import * as React from 'react';
import * as PropTypes from 'prop-types';

import { InlineBlock } from '../primitives';
import { getUniqueId } from '../uniqueId';
import Pane from '../Pane';
import PopoverContainer, { PopoverContainerProps } from './PopoverContainer';
import PopoverClose, { PopoverCloseProps } from './PopoverClose';
import PopoverPopover, {
  LocalPopoverPopoverProps,
  PopoverPopoverProps,
  popoverPopoverDefaultProps,
  popoverPopoverPropTypes
} from './PopoverPopover';
import PopoverShow, { PopoverShowProps } from './PopoverShow';
import PopoverHide, { PopoverHideProps } from './PopoverHide';
import PopoverToggle, { PopoverToggleProps } from './PopoverToggle';

export type LocalPopoverProps = LocalPopoverPopoverProps & {
  children: React.ReactElement<any>;
  className?: string;
  content:
    | string
    | React.ReactElement<any>
    | (({ initialFocusRef, ...args }: { initialFocusRef?: React.RefObject<any> }) => React.ReactNode);
  /** Displays a cross button in the top right corner of the popover content. */
  showCloseButton?: boolean;
};
export type PopoverProps = LocalPopoverProps;
export type PopoverComponents = {
  Popover: React.FunctionComponent<PopoverPopoverProps>;
  Container: React.FunctionComponent<PopoverContainerProps>;
  Close: React.FunctionComponent<PopoverCloseProps>;
  Hide: React.FunctionComponent<PopoverHideProps>;
  Show: React.FunctionComponent<PopoverShowProps>;
  Toggle: React.FunctionComponent<PopoverToggleProps>;
};

export const Popover: React.FunctionComponent<LocalPopoverProps> & PopoverComponents = ({
  children,
  content,
  showCloseButton,
  ...props
}) => (
  <PopoverContainer>
    {popover => (
      <InlineBlock relative>
        {React.cloneElement(children, { use: PopoverToggle, ...popover })}
        <PopoverPopover border="shadow" padding="5x" {...props} {...popover} use={Pane}>
          {({ initialFocusRef }) => (
            <React.Fragment>
              {showCloseButton && <PopoverClose elementRef={initialFocusRef} {...popover} />}{/* eslint-disable-line */}
              {typeof content === 'function' ? content({ initialFocusRef, ...popover }) : content}
            </React.Fragment>
          )}
        </PopoverPopover>
      </InlineBlock>
    )}
  </PopoverContainer>
);

Popover.Popover = PopoverPopover;
Popover.Container = PopoverContainer;
Popover.Close = PopoverClose;
Popover.Hide = PopoverHide;
Popover.Show = PopoverShow;
Popover.Toggle = PopoverToggle;

Popover.propTypes = {
  ...popoverPopoverPropTypes,
  className: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]) as PropTypes.Validator<
    LocalPopoverProps['content']
  >,
  showCloseButton: PropTypes.bool,
  children: PropTypes.element.isRequired
};
Popover.defaultProps = {
  ...popoverPopoverDefaultProps,
  className: undefined,
  showCloseButton: false,
  children: undefined
};

// @ts-ignore
const C: React.FunctionComponent<PopoverProps> & PopoverComponents = Popover;
export default C;
