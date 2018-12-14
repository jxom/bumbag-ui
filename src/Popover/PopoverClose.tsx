import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { ButtonProps } from '../Button/Button';

import { PopoverClose as _PopoverClose } from './styled';
import PopoverHide from './PopoverHide';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { Omit } from '../types';

export interface LocalPopoverCloseProps {
  hide(): void;
}
export type PopoverCloseProps = Omit<ButtonProps, 'children'> & LocalPopoverCloseProps;

export const PopoverClose: React.FunctionComponent<LocalPopoverCloseProps> = props => (
  <_PopoverClose use={PopoverHide} size="small" kind="link" {...props}>
    <VisuallyHidden>Close</VisuallyHidden>
    <Icon a11yLabel="Close" aria-hidden="true" icon="times" />
  </_PopoverClose>
);

PopoverClose.propTypes = {
  hide: PropTypes.func.isRequired
};
PopoverClose.defaultProps = {};

// @ts-ignore
const C: React.FunctionComponent<PopoverCloseProps> = PopoverClose;
export default C;
