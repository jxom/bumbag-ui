import { Box as ReakitBox } from 'reakit';

import { LayoutBreakpoint } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalSetProps = {
  isFilled?: boolean;
  orientation?: 'vertical' | 'horizontal';
  spacing?: string;
  verticalBreakpoint?: LayoutBreakpoint;
};
export type SetProps = BoxProps & LocalSetProps;

const useProps = createHook<SetProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Set,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  {
    defaultProps: {
      isFilled: false,
      orientation: 'horizontal',
      spacing: 'minor-2',
      verticalBreakpoint: undefined
    },
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
    themeKey: 'Set'
  }
);
