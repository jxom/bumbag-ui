import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { Omit } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Button, ButtonProps } from '../Button';
import { Set, SetProps } from '../Set';

import * as styles from './styles';

export type LocalActionButtonsProps = {
  addonButtons?: React.ReactElement<any>;
  /** Custom button props for the cancel button */
  cancelProps?: Omit<ButtonProps, 'children'>;
  /** Custom text for the cancel button */
  cancelText?: string;
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
  type?: ButtonProps['type'];
};
export type ActionButtonsProps = SetProps & LocalActionButtonsProps;

const useProps = createHook<ActionButtonsProps>(
  (props, themeKey) => {
    const {
      addonButtons,
      cancelProps,
      cancelText,
      isLoading,
      onClickCancel,
      onClickSubmit,
      palette,
      submitProps,
      submitText,
      type,
      ...restProps
    } = props;
    const setProps = Set.useProps(restProps, { themeKey: 'ActionButtons' });

    const className = useClassName({
      style: styles.ActionButtons,
      styleProps: props,
      themeKey,
      prevClassName: setProps.className
    });

    const children = (
      <React.Fragment>
        <Button onClick={onClickCancel} {...cancelProps}>
          {cancelText}
        </Button>
        {addonButtons}
        <Button isLoading={isLoading} onClick={onClickSubmit} palette={palette} type={type} {...submitProps}>
          {submitText}
        </Button>
      </React.Fragment>
    );

    return { ...setProps, className, children };
  },
  {
    defaultProps: {
      addonButtons: undefined,
      cancelProps: {},
      cancelText: 'Cancel',
      isLoading: false,
      onClickSubmit: undefined,
      onClickCancel: undefined,
      palette: 'primary',
      submitProps: {},
      submitText: 'Submit',
      type: 'submit'
    },
    themeKey: 'ActionButtons'
  }
);

export const ActionButtons = createComponent<ActionButtonsProps>(
  props => {
    const actionButtonsProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: actionButtonsProps
    });
  },
  {
    attach: { useProps },
    themeKey: 'ActionButtons'
  }
);
