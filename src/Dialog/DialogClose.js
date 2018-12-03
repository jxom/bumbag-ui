// @flow
import React from 'react';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { DialogClose as _DialogClose } from './styled';

type Props = {
  className?: string
};

const DialogClose = ({ children, ...props }: Props) => (
  <_DialogClose kind="link" {...props}>
    <VisuallyHidden>Close</VisuallyHidden>
    <Icon aria-hidden="true" icon="cross" />
  </_DialogClose>
);

DialogClose.defaultProps = {
  className: undefined
};

export default DialogClose;
