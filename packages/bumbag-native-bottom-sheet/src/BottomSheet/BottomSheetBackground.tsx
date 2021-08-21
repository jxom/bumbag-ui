import * as React from 'react';
import { createComponent, createElement, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag-native/Box';

import * as styles from './BottomSheet.styles';

export type LocalBottomSheetBackgroundProps = {
  backgroundProps?: Partial<BoxProps>;
};
export type BottomSheetBackgroundProps = BoxProps & LocalBottomSheetBackgroundProps;

const useProps = createHook<BottomSheetBackgroundProps>(
  (props) => {
    const { backgroundProps } = props;
    const boxProps = Box.useProps(props);
    return {
      ...boxProps,
      children: <styles.BottomSheetBackground backgroundColor={props.backgroundColor} {...backgroundProps} />,
    };
  },
  { themeKey: 'native.BottomSheet.Background' }
);

export const BottomSheetBackground = createComponent<BottomSheetBackgroundProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.BottomSheetBackgroundWrapper,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.BottomSheet.Background',
    },
    themeKey: 'native.BottomSheet.Background',
  }
);
