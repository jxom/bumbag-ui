import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { Flexible, Palette, Omit } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Button, ButtonProps } from '../Button';
import { Set, SetProps } from '../Set';

import * as styles from './ActionButtons.styles';

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
  palette?: Palette;
  /** Size of the buttons */
  size?: ButtonProps['size'];
  /** Custom button props for the submit button */
  submitProps?: Omit<ButtonProps, 'children'>;
  /** Custom text for the submit button */
  submitText?: string;
  /** Button type of the submit button */
  type?: ButtonProps['type'];
};
export type ActionButtonsProps = SetProps & LocalActionButtonsProps;

const useProps = createHook<ActionButtonsProps>(
  (props, { themeKey }) => {
    const {
      addonButtons,
      cancelProps,
      cancelText,
      isLoading,
      onClickCancel,
      onClickSubmit,
      overrides,
      palette,
      size,
      submitProps,
      submitText,
      type,
      ...restProps
    } = props;
    const setProps = Set.useProps({ ...restProps, overrides }, { themeKey: 'ActionButtons' });

    const className = useClassName({
      style: styles.ActionButtons,
      styleProps: props,
      themeKey,
      prevClassName: setProps.className,
    });

    const children = (
      <React.Fragment>
        <Button onClick={onClickCancel} overrides={overrides} size={size} {...cancelProps}>
          {cancelText}
        </Button>
        {addonButtons}
        <Button
          isLoading={isLoading}
          onClick={onClickSubmit}
          overrides={overrides}
          palette={palette}
          size={size}
          type={type}
          {...submitProps}
        >
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
      type: 'submit',
    },
    themeKey: 'ActionButtons',
  }
);

export const ActionButtons = createComponent<ActionButtonsProps>(
  (props) => {
    const actionButtonsProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: actionButtonsProps,
    });
  },
  {
    attach: { useProps, displayName: 'ActionButtons' },
    themeKey: 'ActionButtons',
  }
);
