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

ToastIcon.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string.isRequired
};
ToastIcon.defaultProps = {
  size: undefined
};

// @ts-ignore
const C: React.FunctionComponent<ToastIconProps> = ToastIcon;
export default C;
