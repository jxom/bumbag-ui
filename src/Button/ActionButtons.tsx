import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import _omit from 'lodash/omit';
import Button, { ButtonProps, buttonPropTypes } from './Button';
import Set, { SetProps } from '../Set/Set';
import { Omit } from '../types';

export type LocalActionButtonsProps = {
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
  <Set {...props}>
    <Button onClick={onClickCancel} {...cancelProps}>
      {cancelText}
    </Button>
    <Button isLoading={isLoading} onClick={onClickSubmit} palette={palette} type={type} {...submitProps}>
      {submitText}
    </Button>
  </Set>
);

ActionButtons.propTypes = {
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

const C: React.FunctionComponent<ActionButtonsProps> = ActionButtons;
export default C;
