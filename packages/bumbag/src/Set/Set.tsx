import { Box as ReakitBox } from 'reakit';

import { LayoutBreakpoint } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Set.styles';

export type LocalSetProps = {
  /** Indicates if the set items should span the width of the set. */
  isFilled?: boolean;
  /** Indicates the orientation of the set. */
  orientation?: 'vertical' | 'horizontal';
  /** Sets the spacing between items. */
  spacing?: string;
  /** Indicates the breakpoint at which the set should become vertical. */
  verticalBelow?: LayoutBreakpoint;
};
export type SetProps = BoxProps & LocalSetProps;

const useProps = createHook<SetProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Set,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  {
    defaultProps: {
      isFilled: false,
      orientation: 'horizontal',
      spacing: 'minor-2',
      verticalBelow: undefined,
    },
    themeKey: 'Set',
  }
);

export const Set = createComponent<SetProps>(
  (props) => {
    const setProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: setProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Set',
    },
    themeKey: 'Set',
  }
);
