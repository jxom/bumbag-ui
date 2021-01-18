import { ImageProps as RNImageProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import * as styles from './Image.styles';

export type LocalImageProps = {
  /** How the image fits its bounds */
  fit?: RNImageProps['resizeMode'];
};
export type ImageProps = BoxProps & RNImageProps & LocalImageProps;

const useProps = createHook<ImageProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps };
  },
  { themeKey: 'native.Image' }
);

export const Image = createComponent<ImageProps>(
  (props) => {
    const imageProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledImage,
      htmlProps: {
        ...imageProps,
        resizeMode: props.fit || props.resizeMode,
      },
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Image',
    },
    themeKey: 'native.Image',
  }
);
