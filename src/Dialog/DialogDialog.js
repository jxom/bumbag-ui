// @flow
import React, { type Node } from 'react';

import Dialog from './styled';

type Props = {
  a11yDescriptionId?: string,
  a11yTitleId?: string,
  border?: true | 'shadow',
  children: Node,
  className?: string,
  kind?: ?'alert'
};

const DialogDialog = ({ a11yDescriptionId, a11yTitleId, border, children, kind, ...props }: Props) => (
  <Dialog
    aria-describedby={a11yDescriptionId}
    aria-labelledby={a11yTitleId}
    border={border}
    role={kind === 'alert' ? 'alertdialog' : 'dialog'}
    {...props}
  >
    {children}
  </Dialog>
);

DialogDialog.defaultProps = {
  a11yDescriptionId: undefined,
  a11yTitleId: undefined,
  border: true,
  className: undefined,
  kind: undefined
};

export default DialogDialog;
