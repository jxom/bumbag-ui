// @flow
import React from 'react';

import { DialogIcon as _DialogIcon } from './styled';

type Props = {
  className?: string
};

const DialogIcon = ({ children, ...props }: Props) => <_DialogIcon {...props} />;

DialogIcon.defaultProps = {
  className: undefined
};

export default DialogIcon;
