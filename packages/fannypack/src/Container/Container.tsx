import { Box as ReakitBox } from 'reakit';

import { ContainerThemeConfig, Breakpoint } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalContainerProps = {
  align?: 'left' | 'right' | 'center';
  breakpoint?: Breakpoint;
  isFluid?: boolean;
  isLayout?: boolean;
};
export type ContainerProps = BoxProps & LocalContainerProps;

const useProps = createHook<ContainerProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Container,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  {
    defaultProps: {
      align: 'center',
      breakpoint: undefined,
      isFluid: false,
      isLayout: false
    },
    themeKey: 'Container'
  }
);

export const Container = createComponent<ContainerProps>(
  props => {
    const containerProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: containerProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Container'
  }
);
