import * as React from 'react';
import * as PropTypes from 'prop-types';

import { LocalPaneProps, PaneProps, panePropTypes, paneDefaultProps } from '../Pane/Pane';
import Dialog from './styled';

export type LocalDialogDialogProps = LocalPaneProps & {
  a11yDescriptionId?: string;
  a11yTitleId?: string;
  children: React.ReactNode;
  className?: string;
  kind?: 'alert' | undefined;
};
export type DialogDialogProps = LocalDialogDialogProps & PaneProps;

export const DialogDialog: React.FunctionComponent<LocalDialogDialogProps> = ({
  a11yDescriptionId,
  a11yTitleId,
  children,
  kind,
  ...props
}) => (
  <Dialog
    aria-describedby={a11yDescriptionId}
    aria-labelledby={a11yTitleId}
    role={kind === 'alert' ? 'alertdialog' : 'dialog'}
    {...props}
  >
    {children}
  </Dialog>
);

export const dialogDialogPropTypes = {
  a11yDescriptionId: PropTypes.string,
  a11yTitleId: PropTypes.string,
  className: PropTypes.string,
  kind: PropTypes.oneOf(['alert']) as PropTypes.Validator<LocalDialogDialogProps['kind']>,
  ...panePropTypes,
  children: PropTypes.node.isRequired
};
DialogDialog.propTypes = dialogDialogPropTypes;

export const dialogDialogDefaultProps = {
  ...paneDefaultProps,
  a11yDescriptionId: undefined,
  a11yTitleId: undefined,
  border: true,
  className: undefined,
  kind: undefined
};
DialogDialog.defaultProps = dialogDialogDefaultProps;

const C: React.FunctionComponent<DialogDialogProps> = DialogDialog;
export default C;
