import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Stack.styles';

export type LocalStackProps = {
  /** Sets the orientation of the stack component. */
  orientation?: 'vertical' | 'horizontal';
  /** Sets the spacing between the stack items. */
  spacing?: string;
  /** Indicates the breakpoint at which the stack should become vertical. */
  verticalBelow?: string;
};
export type StackProps = BoxProps & LocalStackProps;

const useProps = createHook<StackProps>(
  (props = {}, { themeKey }) => {
    const { orientation, spacing, ...restProps } = props;
    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.Stack,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  {
    defaultProps: {
      orientation: 'vertical',
      spacing: 'major-4',
      verticalBelow: 'desktop',
    },
    themeKey: 'Stack',
  }
);

export const Stack = createComponent<StackProps>(
  (props) => {
    const StackProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: StackProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Stack',
    },
    themeKey: 'Stack',
  }
);
