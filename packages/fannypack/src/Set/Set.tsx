import { Box as ReakitBox } from 'reakit';

import { LayoutBreakpoint } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalSetProps = {
  isFilled?: boolean;
  isVertical?: boolean;
  spacing?: string;
  verticalBreakpoint?: LayoutBreakpoint;
};
export type SetProps = BoxProps & LocalSetProps;

const useProps = createHook<SetProps>(
  (props, themeKey) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Set,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  {
    themeKey: 'Set'
  }
);

export const Set = createComponent<SetProps>(
  props => {
    const setProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: setProps });
  },
  {
    attach: {
      useProps
    },
    defaultProps: {
      isFilled: false,
      isVertical: false,
      spacing: 'minor-2',
      verticalBreakpoint: undefined
    },
    themeKey: 'Set'
  }
);
