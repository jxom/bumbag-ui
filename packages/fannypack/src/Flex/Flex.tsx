import { Box as ReakitBox } from 'reakit';

import { FlexThemeConfig } from '../types';
import { useClassName, createComponent, createElement } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalFlexProps = {
  overrides?: FlexThemeConfig;
};
export type FlexProps = BoxProps & LocalFlexProps;

function useProps(props: Partial<FlexProps> = {}) {
  const boxProps = Box.useProps(props);

  const className = useClassName({
    style: styles.Flex,
    styleProps: props,
    prevClassName: boxProps.className
  });

  return { ...boxProps, className };
}

export const Flex = createComponent<FlexProps>(
  props => {
    const { children, use, ...restProps } = props;
    const flexProps = useProps(restProps);
    return createElement({ children, component: ReakitBox, use, htmlProps: flexProps });
  },
  {
    attach: { useProps },
    themeKey: 'Flex'
  }
);
