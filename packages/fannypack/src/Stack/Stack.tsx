import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalStackProps = {
  orientation?: 'vertical' | 'horizontal';
  spacing?: string;
  verticalAt?: string;
};
export type StackProps = BoxProps & LocalStackProps;

const useProps = createHook<StackProps>(
  (props = {}, { themeKey, themeKeyOverride }) => {
    const { orientation, spacing, ...restProps } = props;
    const boxProps = Box.useProps(restProps);

    const className = useClassName({
      style: styles.Stack,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  {
    defaultProps: {
      orientation: 'vertical',
      spacing: 'major-4',
      verticalAt: 'tablet'
    },
    themeKey: 'Stack'
  }
);

export const Stack = createComponent<StackProps>(
  props => {
    const StackProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: StackProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Stack'
  }
);
