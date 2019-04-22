import * as React from 'react';
import * as PropTypes from 'prop-types';
import { FlexProps as ReakitFlexProps } from 'reakit/ts/Flex/Flex';

import { IconProps } from '../Icon/Icon';
import { Omit } from '../types';

import { ToastIconWrapper, ToastIcon as _ToastIcon } from './styled';

export type LocalToastIconProps = {
  size?: IconProps['size'];
  type: string;
};
export type ToastIconProps = Omit<ReakitFlexProps, 'size'> & LocalToastIconProps;

export const ToastIcon: React.FunctionComponent<LocalToastIconProps> = ({ size, type, ...props }) => (
  <ToastIconWrapper {...props}>
    {/*
      // @ts-ignore */}
    <_ToastIcon a11yLabel={type} color={type} icon={type} size={size} />
  </ToastIconWrapper>
);

export const toastIconPropTypes = {
  size: PropTypes.string,
  type: PropTypes.string.isRequired
};
ToastIcon.propTypes = toastIconPropTypes;

export const toastIconDefaultProps = {
  size: undefined
};
ToastIcon.defaultProps = toastIconDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<ToastIconProps> = ToastIcon;
export default C;
