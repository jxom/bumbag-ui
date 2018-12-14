import * as React from 'react';
import {
  LocalOverlayShowProps,
  OverlayShowProps,
  overlayShowDefaultProps,
  overlayShowPropTypes
} from '../Overlay/OverlayShow';

import { ModalShow as _ModalShow } from './styled';

export interface LocalModalShowProps extends LocalOverlayShowProps {}
export type ModalShowProps = OverlayShowProps;

const ModalShow: React.FunctionComponent<LocalModalShowProps> = ({ children, ...props }) => (
  <_ModalShow {...props}>{children}</_ModalShow>
);

ModalShow.propTypes = {
  ...overlayShowPropTypes
};
ModalShow.defaultProps = {
  ...overlayShowDefaultProps
};

// @ts-ignore
const C: React.FunctionComponent<ModalShowProps> = ModalShow;
export default C;
