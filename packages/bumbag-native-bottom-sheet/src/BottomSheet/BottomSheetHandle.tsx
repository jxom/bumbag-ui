import * as React from 'react';
import { createComponent, createElement, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag-native/Box';

import * as styles from './BottomSheet.styles';

export type LocalBottomSheetHandleProps = {
  handleProps?: Partial<BoxProps>;
  hasHandle?: boolean;
};
export type BottomSheetHandleProps = BoxProps & LocalBottomSheetHandleProps;

const useProps = createHook<BottomSheetHandleProps>(
  (props) => {
    const { handleProps, hasHandle } = props;
    const boxProps = Box.useProps(props);
    return {
      ...boxProps,
      children: hasHandle ? <styles.BottomSheetHandle {...handleProps} /> : null,
    };
  },
  { defaultProps: { hasHandle: true }, themeKey: 'native.BottomSheet.Background' }
);

export const BottomSheetHandle = createComponent<BottomSheetHandleProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.BottomSheetHandleWrapper,
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
