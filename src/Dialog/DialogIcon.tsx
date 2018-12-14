import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';

import { IconProps } from '../Icon/Icon';
import { DialogIcon as _DialogIcon } from './styled';

export interface LocalDialogIconProps {
  className?: string;
  icon: string;
}
export type DialogIconProps = IconProps & LocalDialogIconProps;

// @ts-ignore
export const DialogIcon: React.FunctionComponent<LocalDialogIconProps> = props => <_DialogIcon {...props} />;

DialogIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired
};
DialogIcon.defaultProps = {
  className: undefined
};

// @ts-ignore
const C: React.FunctionComponent<DialogIconProps> = DialogIcon;
export default C;
