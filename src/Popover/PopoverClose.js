// @flow
import React from 'react';
import Hidden from 'reakit/Hidden';

import { PopoverClose as _PopoverClose } from './styled';
import PopoverHide from './PopoverHide';
import Icon from '../Icon';

type Props = {
  hide: Function
};

const PopoverClose = (props: Props) => (
  <_PopoverClose use={PopoverHide} size="small" kind="link" {...props}>
    <Hidden>Close</Hidden>
    <Icon aria-hidden="true" icon="cross" />
  </_PopoverClose>
);

PopoverClose.defaultProps = {};

export default PopoverClose;
