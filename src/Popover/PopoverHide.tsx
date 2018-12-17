import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { PopoverHideProps as ReakitPopoverHideProps } from '@jmoxey/reakit/ts';

import { PopoverHide as _PopoverHide } from './styled';

export type LocalPopoverHideProps = {
  children: React.ReactNode;
  hide(): void;
  onClick?(): void;
};
export type PopoverHideProps = ReakitPopoverHideProps & LocalPopoverHideProps;

export const PopoverHide: React.FunctionComponent<LocalPopoverHideProps> = ({ children, ...props }) => (
  <_PopoverHide {...props}>{children}</_PopoverHide>
);

PopoverHide.propTypes = {
  children: PropTypes.node.isRequired,
  hide: PropTypes.func.isRequired,
  onClick: PropTypes.func
};
PopoverHide.defaultProps = {
  onClick: undefined
};

const C: React.FunctionComponent<PopoverHideProps> = PopoverHide;
export default C;
