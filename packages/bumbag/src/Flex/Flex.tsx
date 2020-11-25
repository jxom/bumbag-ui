import { Box as ReakitBox } from 'reakit';

import { FlexThemeConfig } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Flex.styles';

export type LocalFlexProps = {};
export type FlexProps = BoxProps & LocalFlexProps;

const useProps = createHook<FlexProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.Flex,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'Flex' }
);

export const Flex = createComponent<FlexProps>(
  (props) => {
    const flexProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: flexProps });
  },
  {
    attach: { useProps, displayName: 'Flex' },
    themeKey: 'Flex',
  }
);
