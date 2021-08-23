import * as React from 'react';
import {
  BottomSheetModal as _BottomSheetModal,
  BottomSheetModalProps as RNBottomSheetModalProps,
} from '@gorhom/bottom-sheet';
import { createComponent, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag-native/Box';

import { BottomSheetBackdrop, BottomSheetBackdropProps } from './BottomSheetBackdrop';
import { BottomSheetBackground, BottomSheetBackgroundProps } from './BottomSheetBackground';
import { BottomSheetHandle, BottomSheetHandleProps } from './BottomSheetHandle';

export type LocalBottomSheetModalProps = {
  hasBackdrop?: boolean;
  hasHandle?: boolean;
  onPressOutside?: () => void;
  backgroundWrapperProps?: Partial<BottomSheetBackgroundProps>;
  backdropProps?: Partial<BottomSheetBackdropProps>;
  handleProps?: Partial<BottomSheetHandleProps>;
  renderBackdrop?: (props: any) => React.ReactElement<any>;
  renderBackground?: () => React.ReactElement<any>;
  renderHandle?: (props: any) => React.ReactElement<any>;
};
export type BottomSheetModalProps = BoxProps & RNBottomSheetModalProps & LocalBottomSheetModalProps;

const useProps = createHook<BottomSheetModalProps>(
  (props) => {
    const {
      borderRadius,
      backgroundColor,
      renderBackdrop,
      renderBackground,
      backgroundWrapperProps,
      renderHandle,
      handleProps,
      elementRef,
      onPressOutside,
      overrides,
      hasBackdrop,
      hasHandle,
    } = props;
    const boxProps = Box.useProps({ ...props, backgroundColor: undefined, borderRadius: undefined });
    return {
      ...boxProps,
      backdropComponent:
        renderBackdrop ||
        (hasBackdrop
          ? (props) => (
              <BottomSheetBackdrop
                {...props}
                onPress={() => {
                  if (onPressOutside) {
                    onPressOutside();
                  }
                  if ((elementRef as any).current) {
                    (elementRef as any).current.dismiss();
                  }
                }}
              />
            )
          : undefined),
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
  {
    defaultProps: { altitude: '400', snapPoints: ['25%', '50%'], hasBackdrop: true },
    themeKey: 'native.BottomSheetModal',
  }
);

export const BottomSheetModal = createComponent<BottomSheetModalProps>(
  (props) => {
    const htmlProps = useProps(props);

    return (
      <_BottomSheetModal {...htmlProps} snapPoints={htmlProps.snapPoints || []}>
        {htmlProps.children || <Box />}
      </_BottomSheetModal>
    );
  },
  {
    attach: {
      useProps,
      displayName: 'native.BottomSheetModal',
    },
    themeKey: 'native.BottomSheetModal',
  }
);
