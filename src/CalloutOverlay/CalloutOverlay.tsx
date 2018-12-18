import * as React from 'react';
import * as PropTypes from 'prop-types';

import { LocalCalloutProps, calloutPropTypes, calloutDefaultProps } from '../Callout/Callout';
import { LocalOverlayProps, OverlayProps, overlayPropTypes, overlayDefaultProps } from '../Overlay/Overlay';
import OverlayHide from '../Overlay/OverlayHide';
import _CalloutOverlay, { Callout } from './styled';

export type LocalCalloutOverlayProps = LocalOverlayProps &
  LocalCalloutProps & {
    children: React.ReactNode;
  };
export type CalloutOverlayProps = OverlayProps & LocalCalloutOverlayProps;

export const CalloutOverlay: React.FunctionComponent<LocalCalloutOverlayProps> = ({
  a11yDescriptionId,
  a11yTitleId,
  children,
  className,
  closeButtonProps,
  footer,
  hasTint,
  icon,
  onClickClose,
  showCloseButton,
  title,
  type,
  ...props
}) => (
  <_CalloutOverlay {...props}>
    <Callout
      a11yDescriptionId={a11yDescriptionId}
      a11yTitleId={a11yTitleId}
      className={className}
      closeButtonProps={closeButtonProps}
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

CalloutOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  ...overlayPropTypes,
  ...calloutPropTypes
};

CalloutOverlay.defaultProps = {
  ...overlayDefaultProps,
  ...calloutDefaultProps,
  placement: 'bottom-end'
};

const C: React.FunctionComponent<CalloutOverlayProps> = CalloutOverlay;
export default C;
