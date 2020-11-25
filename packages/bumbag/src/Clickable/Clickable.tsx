import { Box as ReakitBox, ClickableProps as ReakitClickableProps, useClickable as useReakitClickable } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Clickable.styles';

export type LocalClickableProps = {};
export type ClickableProps = BoxProps & ReakitClickableProps & LocalClickableProps;

const useProps = createHook<ClickableProps>(
  (props, { themeKey }) => {
    const { disabled, focusable, unstable_clickOnEnter, unstable_clickOnSpace, ...restProps } = props;
    const clickableProps = useReakitClickable(
      { disabled, focusable, unstable_clickOnEnter, unstable_clickOnSpace },
      restProps
    );
    const boxProps = Box.useProps({ ...restProps, ...clickableProps });

    const className = useClassName({
      style: styles.Clickable,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Clickable' }
);

export const Clickable = createComponent<ClickableProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Clickable',
    },
    themeKey: 'Clickable',
  }
);
