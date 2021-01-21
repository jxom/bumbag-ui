import { ViewProps as RNViewProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from './Box';
import * as styles from './Box.styles';

export type LocalBoxSafeProps = {};
export type BoxSafeProps = BoxProps & RNViewProps & LocalBoxSafeProps;

const useProps = createHook<BoxSafeProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps };
  },
  { themeKey: 'Box.Safe' }
);

export const BoxSafe = createComponent<BoxSafeProps>(
  (props) => {
    const boxProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledBoxSafe,
      htmlProps: boxProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Box.Safe',
    },
    themeKey: 'Box.Safe',
  }
);
