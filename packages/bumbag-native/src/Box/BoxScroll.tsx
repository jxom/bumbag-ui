import { ScrollViewProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from './Box';
import * as styles from './Box.styles';

export type LocalBoxScrollProps = {};
export type BoxScrollProps = BoxProps & ScrollViewProps & LocalBoxScrollProps;

const useProps = createHook<BoxScrollProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps };
  },
  { themeKey: 'Box.Scroll' }
);

export const BoxScroll = createComponent<BoxScrollProps>(
  (props) => {
    const boxProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledBoxScroll,
      use: props.use,
      htmlProps: boxProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Box.Scroll',
    },
    themeKey: 'Box.Scroll',
  }
);
