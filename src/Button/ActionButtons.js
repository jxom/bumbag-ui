// @flow
import React, { type Node } from 'react';

import type { Palette } from '../types';
import Button from './Button';
import Set from '../Set';

type Props = {
  /** Custom button props for the cancel button */
  cancelProps?: Object,
  /** Custom text for the cancel button */
  cancelText?: string,
  children: Node,
  className?: string,
  /** Makes the submit button in a loading state */
  isLoading?: boolean,
  onClickSubmit?: Function,
  onClickCancel?: Function,
  /** Changes the color of the submit button */
  palette?: Palette,
  /** Custom button props for the submit button */
  submitProps?: Object,
  /** Custom text for the submit button */
  submitText?: string,
  /** Button type of the submit button */
  type?: string
};

const ActionButtons = ({
  cancelProps,
  cancelText,
  children,
  isLoading,
  onClickSubmit,
  onClickCancel,
  palette,
  submitProps,
  submitText,
  type,
  ...props
}: Props) => (
  <Set {...props}>
    <Button isLoading={isLoading} onClick={onClickSubmit} palette={palette} type={type} {...submitProps}>
      {/* $FlowFixMe */}
      {submitText}
    </Button>
    <Button onClick={onClickCancel} {...cancelProps}>
      {/* $FlowFixMe */}
      {cancelText}
    </Button>
  </Set>
);

ActionButtons.defaultProps = {
  cancelProps: {},
  cancelText: 'Cancel',
  className: undefined,
  isLoading: false,
  onClickSubmit: undefined,
  onClickCancel: undefined,
  palette: 'primary',
  submitProps: {},
  submitText: 'Submit',
  type: undefined
};

export default ActionButtons;
