import { Box as ReakitBox } from 'reakit';

import { ContainerThemeConfig, Breakpoint } from '../types';
import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalContainerProps = {
  align?: 'left' | 'right' | 'center';
  breakpoint?: Breakpoint;
  isFluid?: boolean;
  isLayout?: boolean;
  overrides?: ContainerThemeConfig;
};
export type ContainerProps = BoxProps & LocalContainerProps;

function useProps(props: Partial<ContainerProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.Container,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Container = createComponent<ContainerProps>(
  props => {
    const containerProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: containerProps });
  },
  {
    attach: {
      defaultProps: {
        align: 'center',
        breakpoint: undefined,
        isFluid: false,
        isLayout: false
      },
      useProps
    },
    themeKey: 'Container'
  }
);
