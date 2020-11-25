import { Box as ReakitBox } from 'reakit';

import { ContainerThemeConfig, Breakpoint } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Container.styles';

export type LocalContainerProps = {
  /** Sets the alignment of the container. */
  align?: 'left' | 'right' | 'center';
  /** Sets the breakpoint width of the container. */
  breakpoint?: Breakpoint;
  /** Indicates if the container is fluid. */
  isFluid?: boolean;
  /** Indicates if the container is of a layout type. */
  isLayout?: boolean;
};
export type ContainerProps = BoxProps & LocalContainerProps;

const useProps = createHook<ContainerProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Container,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  {
    defaultProps: {
      align: 'center',
      breakpoint: undefined,
      isFluid: false,
      isLayout: false,
    },
    themeKey: 'Container',
  }
);

export const Container = createComponent<ContainerProps>(
  (props) => {
    const containerProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: containerProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Container',
    },
    themeKey: 'Container',
  }
);
