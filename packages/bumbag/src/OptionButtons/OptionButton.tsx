import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Button, ButtonProps } from '../Button';

import * as styles from './OptionButtons.styles';

export type LocalOptionButtonProps = {
  checked?: boolean;
  isFullWidth?: boolean;
  onChange?: ({ checked: boolean, value: string }) => void;
  readOnly?: boolean;
  value?: string;
};
export type OptionButtonProps = ButtonProps & LocalOptionButtonProps;

const useProps = createHook<OptionButtonProps>(
  (props, { themeKey }) => {
    const { checked, onChange, readOnly, value, ...restProps } = props;
    const buttonProps = Button.useProps({
      ...restProps,
      isStatic: readOnly,
      variant: !checked ? 'outlined' : undefined,
    });

    const className = useClassName({
      style: styles.OptionButton,
      styleProps: props,
      themeKey,
      prevClassName: buttonProps.className,
    });

    return {
      ...buttonProps,
      'aria-checked': checked,
      className,
      onClick: () => !readOnly && onChange && onChange({ checked: !checked, value }),
    };
  },
  { defaultProps: { palette: 'primary' }, themeKey: 'OptionButtons.Button' }
);

export const OptionButton = createComponent<OptionButtonProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps });
  },
  {
    attach: {
      useProps,
      displayName: 'OptionButtons.Button',
    },
    themeKey: 'OptionButtons.Button',
  }
);
