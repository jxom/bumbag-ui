import * as React from 'react';
import _BottomSheet, { BottomSheetProps as RNBottomSheetProps } from '@gorhom/bottom-sheet';
import { createComponent, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag-native/Box';

import { BottomSheetBackground, BottomSheetBackgroundProps } from './BottomSheetBackground';
import { BottomSheetHandle, BottomSheetHandleProps } from './BottomSheetHandle';

export type LocalBottomSheetProps = {
  snapPoints?: RNBottomSheetProps['snapPoints'];
  hasHandle?: boolean;
  backgroundWrapperProps?: Partial<BottomSheetBackgroundProps>;
  handleProps?: Partial<BottomSheetHandleProps>;
  renderBackground?: () => React.ReactElement<any>;
  renderHandle?: (props: any) => React.ReactElement<any>;
};
export type BottomSheetProps = BoxProps & Omit<RNBottomSheetProps, 'snapPoints'> & LocalBottomSheetProps;

const useProps = createHook<BottomSheetProps>(
  (props) => {
    const {
      backgroundColor,
      borderRadius,
      renderBackground,
      backgroundWrapperProps,
      renderHandle,
      handleProps,
      overrides,
      hasHandle,
    } = props;
    const boxProps = Box.useProps({ ...props, backgroundColor: undefined, borderRadius: undefined });
    return {
      ...boxProps,
      backgroundComponent:
        renderBackground ||
        (() => (
          <BottomSheetBackground
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            overrides={overrides}
            {...backgroundWrapperProps}
          />
        )),
      handleComponent:
        renderHandle ||
        ((props) => <BottomSheetHandle {...props} hasHandle={hasHandle} overrides={overrides} {...handleProps} />),
    };
  },
  { defaultProps: { snapPoints: ['25%', '50%'] }, themeKey: 'native.BottomSheet' }
);

export const BottomSheet = createComponent<BottomSheetProps>(
  (props) => {
    const htmlProps = useProps(props);

    return (
      <_BottomSheet {...htmlProps} snapPoints={htmlProps.snapPoints || []}>
        {htmlProps.children || <Box />}
      </_BottomSheet>
    );
  },
  {
    attach: {
      useProps,
      displayName: 'native.BottomSheet',
    },
    themeKey: 'native.BottomSheet',
  }
);
