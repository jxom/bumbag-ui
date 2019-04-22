import * as React from 'react';
import * as PropTypes from 'prop-types';

import { isFunction } from '../_utils/assert';
import TrapFocus from '../_utils/TrapFocus';
import { Box } from '../primitives';
import Backdrop from '../Backdrop';
import Button from '../Button';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { OverlayProps } from '../Overlay/Overlay';
import Portal from '../Portal';
import SidebarContainer, { SidebarContainerProps } from './SidebarContainer';
import SidebarClose, { SidebarCloseProps } from './SidebarClose';
import SidebarHide, { SidebarHideProps } from './SidebarHide';
import SidebarShow, { SidebarShowProps } from './SidebarShow';
import _Sidebar from './styled';
import {
  AnimateProps,
  animatePropTypes,
  animateDefaultProps,
  RestrictHideProps,
  restrictDefaultProps,
  restrictHidePropTypes
} from '../types';

export type LocalSidebarProps = {
  align?: 'left' | 'right';
  backdropFade?: boolean;
  children:
    | React.ReactNode
    | (({ initialFocusRef }: { initialFocusRef: React.RefObject<HTMLElement> }) => React.ReactNode);
  className?: string;
  isVisible?: boolean;
  hide?(): void;
  hideCloseButton?: boolean;
  onClickClose?(): void;
  width?: string;
} & RestrictHideProps &
  AnimateProps;
export type SidebarProps = OverlayProps & LocalSidebarProps;
export type SidebarComponents = {
  Container: React.FunctionComponent<SidebarContainerProps>;
  Close: React.FunctionComponent<SidebarCloseProps>;
  Hide: React.FunctionComponent<SidebarHideProps>;
  Show: React.FunctionComponent<SidebarShowProps>;
};

export const Sidebar: React.FunctionComponent<LocalSidebarProps> & SidebarComponents = ({
  align,
  backdropFade,
  children,
  delay,
  duration,
  fade,
  hide,
  hideCloseButton,
  hideOnEsc,
  hideOnClickOutside,
  isVisible,
  onClickClose,
  slide,
  width,
  ...props
}) => (
  <Portal>
    <TrapFocus delayToActivate={fade || slide ? duration : undefined} isActive={isVisible} usesPortal>
      {({ fallbackFocusRef, initialFocusRef }) => (
        <React.Fragment>
          <Backdrop
            delay={delay}
            duration={duration}
            hide={hide}
            fade={backdropFade}
            hideOnEsc={hideOnEsc}
            isVisible={isVisible}
            use={hideOnClickOutside ? SidebarHide : undefined}
            expand={undefined}
            slide={undefined}
          />
          <Box elementRef={fallbackFocusRef}>
            <_Sidebar
              aria-modal="true"
              align={align}
              delay={delay}
              duration={duration}
              fade={fade}
              hideOnEsc={hideOnEsc}
              hideOnClickOutside={hideOnClickOutside}
              slide={slide}
              width={width}
              {...props}
              // @ts-ignore
              visible={isVisible || props.visible}
            >
              {!hideCloseButton && (
                // @ts-ignore
                <SidebarClose
                  use={SidebarHide}
                  elementRef={initialFocusRef}
                  hide={hide}
                  onClick={onClickClose}
                  palette="white"
                  sidebarAlign={align}
                  sidebarWidth={width}
                />
              )}
              {isFunction(children) ? children({ initialFocusRef }) : children}
            </_Sidebar>
          </Box>
        </React.Fragment>
      )}
    </TrapFocus>
  </Portal>
);

export const sidebarPropTypes = {
  align: PropTypes.oneOf(['left', 'right']),
  backdropFade: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  hide: PropTypes.func,
  hideCloseButton: PropTypes.bool,
  onClickClose: PropTypes.func,
  width: PropTypes.string,
  ...animatePropTypes,
  ...restrictHidePropTypes
};
Sidebar.propTypes = sidebarPropTypes;

export const sidebarDefaultProps = {
  ...animateDefaultProps,
  ...restrictDefaultProps,
  align: 'left',
  backdropFade: true,
  className: undefined,
  duration: '0.2s',
  hideCloseButton: false,
  hideOnClickOutside: true,
  hideOnEsc: true,
  isVisible: false,
  onClickClose: undefined,
  slide: true,
  width: '250px'
};
Sidebar.defaultProps = sidebarDefaultProps;

Sidebar.Container = SidebarContainer;
Sidebar.Close = SidebarClose;
Sidebar.Hide = SidebarHide;
Sidebar.Show = SidebarShow;

const C: React.FunctionComponent<SidebarProps> & SidebarComponents = Sidebar;
export default C;
