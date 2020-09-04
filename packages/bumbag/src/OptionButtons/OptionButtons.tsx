import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook, useOptionsState } from '../utils';
import { Box, BoxProps } from '../Box';
import { Group, GroupProps } from '../Group';

import { OptionButton, OptionButtonProps } from './OptionButton';
import * as styles from './styles';

export type LocalOptionButtonsProps = {
  defaultValue?: Array<string> | string;
  disabled?: boolean;
  isFullWidth?: boolean;
  onBlur?: (values: Array<string> | string) => void;
  onChange?: (values: Array<string> | string, value: string) => void;
  options?: any;
  palette?: OptionButtonProps['palette'];
  readOnly?: boolean;
  size?: OptionButtonProps['size'];
  type: 'checkbox' | 'radio';
  value?: Array<string> | string;
};
export type OptionButtonsProps = GroupProps & LocalOptionButtonsProps;

const useProps = createHook<OptionButtonsProps>(
  (props, { themeKey }) => {
    const {
      borderRadius,
      children,
      defaultValue,
      disabled,
      isFullWidth,
      onBlur,
      onChange,
      options,
      orientation,
      overrides,
      palette,
      size,
      type,
      value,
      verticalBelow,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.OptionButtons,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });
    const wrapperClassName = useClassName({
      style: styles.OptionButtonsWrapper,
      styleProps: props,
      themeKey,
      themeKeySuffix: 'Wrapper',
    });

    const { getOptionItemProps } = useOptionsState({
      defaultValue,
      onBlur,
      onChange,
      type,
      value,
    });

    return {
      ...boxProps,
      'aria-disabled': disabled,
      className,
      children: (
        <Group
          className={wrapperClassName}
          borderRadius={borderRadius}
          orientation={orientation}
          verticalBelow={verticalBelow}
        >
          {options.map(({ label, ...option }, index) => (
            <OptionButton
              key={index}
              {...getOptionItemProps({ value: option.value })}
              disabled={disabled}
              isFullWidth={isFullWidth}
              palette={palette}
              size={size}
              overrides={overrides}
              {...option}
            >
              {label}
            </OptionButton>
          ))}
        </Group>
      ),
    };
  },
  { themeKey: 'OptionButtons' }
);

export const OptionButtons = createComponent<OptionButtonsProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps });
  },
  {
    attach: {
      useProps,
      displayName: 'OptionButtons',
    },
    themeKey: 'OptionButtons',
  }
);
