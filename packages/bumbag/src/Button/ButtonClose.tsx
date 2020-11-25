import * as React from 'react';
import { Button as ReakitButton } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Icon, IconProps } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';
import { Button, ButtonProps } from './Button';

import * as styles from './Button.styles';

export type LocalButtonCloseProps = {
  iconProps?: Omit<IconProps, 'icon'>;
  /** Accessible label for the button. Default: `"Close"`  */
  label?: string;
};
export type ButtonCloseProps = ButtonProps & LocalButtonCloseProps;

const useProps = createHook<ButtonCloseProps>(
  (props, { themeKey }) => {
    const { iconProps, label, ...restProps } = props;
    const buttonProps = Button.useProps(restProps);

    const className = useClassName({
      style: styles.ButtonClose,
      styleProps: props,
      themeKey,
      prevClassName: buttonProps.className,
    });

    const children = (
      <React.Fragment>
        <Icon fontSize="300" icon="close" {...iconProps} />
        <VisuallyHidden>{label}</VisuallyHidden>
      </React.Fragment>
    );

    return { ...buttonProps, className, children };
  },
  { defaultProps: { label: 'Close', variant: 'ghost' }, themeKey: 'Button.Close' }
);

export const ButtonClose = createComponent<ButtonCloseProps>(
  (props) => {
    const buttonCloseProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitButton,
      use: props.use,
      htmlProps: buttonCloseProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Button.Close',
    },
    themeKey: 'Button.Close',
  }
);
