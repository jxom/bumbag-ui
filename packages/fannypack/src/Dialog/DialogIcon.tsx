import * as React from 'react';
import * as PropTypes from 'prop-types';

import { IconProps } from '../Icon/Icon';
import { DialogIcon as _DialogIcon } from './styled';

export type LocalDialogIconProps = {
  className?: string;
  icon: string;
};
export type DialogIconProps = IconProps & LocalDialogIconProps;

// @ts-ignore
export const DialogIcon: React.FunctionComponent<LocalDialogIconProps> = props => <_DialogIcon {...props} />;

export const dialogIconPropTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired
};
DialogIcon.propTypes = dialogIconPropTypes;

export const dialogIconDefaultProps = {
  className: undefined
};
DialogIcon.defaultProps = dialogIconDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<DialogIconProps> = DialogIcon;
export default C;
