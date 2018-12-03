// @flow
import React from 'react';

import { PopoverClose as _PopoverClose } from './styled';
import PopoverHide from './PopoverHide';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

type Props = {
  hide: Function
};

const PopoverClose = (props: Props) => (
  <_PopoverClose use={PopoverHide} size="small" kind="link" {...props}>
    <VisuallyHidden>Close</VisuallyHidden>
    <Icon aria-hidden="true" icon="cross" />
  </_PopoverClose>
);

PopoverClose.defaultProps = {};

export default PopoverClose;
