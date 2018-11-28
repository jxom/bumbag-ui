// @flow
import React, { type Node } from 'react';

import Dialog from './styled';

type Props = {
  a11yDescriptionId?: string,
  a11yTitleId?: string,
  border?: true | 'shadow',
  children: Node,
  className?: string
};

const DialogDialog = ({ a11yDescriptionId, a11yTitleId, border, children, ...props }: Props) => (
  <Dialog aria-describedby={a11yDescriptionId} aria-labelledby={a11yTitleId} role="dialog" border={border} {...props}>
    {children}
  </Dialog>
);

DialogDialog.defaultProps = {
  a11yDescriptionId: undefined,
  a11yTitleId: undefined,
  border: true,
  className: undefined
};

export default DialogDialog;
