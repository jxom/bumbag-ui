import * as React from 'react';
import {
  LocalOverlayHideProps,
  OverlayHideProps,
  overlayHideDefaultProps,
  overlayHidePropTypes
} from '../Overlay/OverlayHide';

import { ModalHide as _ModalHide } from './styled';

export type LocalModalHideProps = LocalOverlayHideProps;
export type ModalHideProps = OverlayHideProps;

const ModalHide: React.FunctionComponent<LocalModalHideProps> = React.forwardRef(({ children, ...props }, ref) => (
  // @ts-ignore
  <_ModalHide {...props} ref={ref}>
    {children}
  </_ModalHide>
));

ModalHide.propTypes = {
  ...overlayHidePropTypes
};
ModalHide.defaultProps = {
  ...overlayHideDefaultProps
};

// @ts-ignore
const C: React.FunctionComponent<ModalHideProps> = ModalHide;
export default C;
