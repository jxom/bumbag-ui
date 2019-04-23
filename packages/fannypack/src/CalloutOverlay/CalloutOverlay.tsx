import * as React from 'react';
import * as PropTypes from 'prop-types';

import { LocalCalloutProps, CalloutProps, calloutPropTypes, calloutDefaultProps } from '../Callout/Callout';
import { LocalOverlayProps, OverlayProps, overlayPropTypes, overlayDefaultProps } from '../Overlay/Overlay';
import OverlayHide from '../Overlay/OverlayHide';
import _CalloutOverlay, { Callout } from './styled';

export type LocalCalloutOverlayProps = LocalOverlayProps &
  LocalCalloutProps & {
    children: React.ReactNode;
    hide?(): void;
  };
export type CalloutOverlayProps = OverlayProps & CalloutProps & LocalCalloutOverlayProps;

export const CalloutOverlay: React.FunctionComponent<LocalCalloutOverlayProps> = ({
  a11yDescriptionId,
  a11yTitleId,
  border,
  children,
  className,
  closeButtonProps: _closeButtonProps,
  elevation,
  footer,
  hide,
  hasTint,
  icon,
  onClickClose,
  showCloseButton,
  title,
  type,
  ...props
}) => {
  let closeButtonProps = _closeButtonProps;
  if (hide) {
    closeButtonProps = {
      use: OverlayHide,
      // @ts-ignore
      hide,
      ..._closeButtonProps
    };
  }

  return (
    <_CalloutOverlay {...props}>
      <Callout
        a11yDescriptionId={a11yDescriptionId}
        a11yTitleId={a11yTitleId}
        border={border}
        className={className}
        closeButtonProps={closeButtonProps}
        elevation={elevation}
        footer={footer}
        hasTint={hasTint}
        icon={icon}
        onClickClose={onClickClose}
        showCloseButton={showCloseButton}
        // @ts-ignore
        title={title}
        type={type}
      >
        {children}
      </Callout>
    </_CalloutOverlay>
  );
};

export const calloutOverlayPropTypes = {
  children: PropTypes.node.isRequired,
  hide: PropTypes.func,
  ...overlayPropTypes,
  ...calloutPropTypes
};
CalloutOverlay.propTypes = calloutOverlayPropTypes;

export const calloutOverlayDefaultProps: Partial<LocalCalloutOverlayProps> = {
  ...overlayDefaultProps,
  ...calloutDefaultProps,
  elevation: '300',
  hide: undefined,
  placement: 'bottom-end'
};
CalloutOverlay.defaultProps = calloutOverlayDefaultProps;

const C: React.FunctionComponent<CalloutOverlayProps> = CalloutOverlay;
export default C;
