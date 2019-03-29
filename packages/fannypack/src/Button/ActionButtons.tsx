import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import _omit from 'lodash/omit';

import { SetProps } from '../Set/Set';
import { Omit } from '../types';
import Button, { ButtonProps, buttonPropTypes } from './Button';
import { ActionButtons as _ActionButtons } from './styled';

export type LocalActionButtonsProps = {
  addonButtons?: React.ReactElement<any>;
  /** Custom button props for the cancel button */
  cancelProps?: Omit<ButtonProps, 'children'>;
  /** Custom text for the cancel button */
  cancelText?: string;
  className?: string;
  /** Makes the submit button in a loading state */
  isLoading?: boolean;
  onClickSubmit?(): void;
  onClickCancel?(): void;
  /** Changes the color of the submit button */
  palette?: string;
  /** Custom button props for the submit button */
  submitProps?: Omit<ButtonProps, 'children'>;
  /** Custom text for the submit button */
  submitText?: string;
  /** Button type of the submit button */
  type?: string;
};
export type ActionButtonsProps = LocalActionButtonsProps & Omit<SetProps, 'children'>;

export const ActionButtons: React.FunctionComponent<LocalActionButtonsProps> = ({
  addonButtons,
  cancelProps,
  cancelText,
  isLoading,
  onClickSubmit,
  onClickCancel,
  palette,
  submitProps,
  submitText,
  type,
  ...props
}) => (
  <_ActionButtons {...props}>
    <Button onClick={onClickCancel} {...cancelProps}>
      {cancelText}
    </Button>
    {addonButtons}
    <Button isLoading={isLoading} onClick={onClickSubmit} palette={palette} type={type} {...submitProps}>
      {submitText}
    </Button>
  </_ActionButtons>
);

export const actionButtonsPropTypes = {
  addonButtons: PropTypes.element,
  cancelProps: PropTypes.shape(_omit(buttonPropTypes, 'children')),
  cancelText: PropTypes.string,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  onClickSubmit: PropTypes.func,
  onClickCancel: PropTypes.func,
  palette: PropTypes.string,
  submitProps: PropTypes.shape(_omit(buttonPropTypes, 'children')),
  submitText: PropTypes.string,
  type: PropTypes.string
};
ActionButtons.propTypes = actionButtonsPropTypes;

export const actionButtonsDefaultProps = {
  addonButtons: undefined,
  cancelProps: {},
  cancelText: 'Cancel',
  className: undefined,
  isLoading: false,
  onClickSubmit: undefined,
  onClickCancel: undefined,
  palette: 'primary',
  submitProps: {},
  submitText: 'Submit',
  type: 'submit'
};
ActionButtons.defaultProps = actionButtonsDefaultProps;

const C: React.FunctionComponent<ActionButtonsProps> = ActionButtons;
export default C;
