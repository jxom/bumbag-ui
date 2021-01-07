import { ViewProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from './Box';
import * as styles from './Box.styles';

export type LocalBoxSafeProps = {};
export type BoxSafeProps = BoxProps & LocalBoxSafeProps;

const useProps = createHook<BoxSafeProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps };
  },
  { themeKey: 'Box.Safe' }
);

export const BoxSafe = createComponent<ViewProps & BoxSafeProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledBoxSafe,
      use: props.use,
      htmlProps: textProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'BoxSafe',
    },
    themeKey: 'Box.Safe',
  }
);
