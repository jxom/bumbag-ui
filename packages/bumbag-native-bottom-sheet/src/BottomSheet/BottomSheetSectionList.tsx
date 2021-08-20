import * as React from 'react';
import { SectionListProps } from 'react-native';
import { BottomSheetSectionList as _BottomSheetSectionList } from '@gorhom/bottom-sheet';
import { createComponent, createHook } from 'bumbag/utils';
import { Box, BoxProps } from 'bumbag-native/Box';

export type LocalBottomSheetSectionListProps = {};
export type BottomSheetSectionListProps = BoxProps & SectionListProps<any> & LocalBottomSheetSectionListProps;

const useProps = createHook<BottomSheetSectionListProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return {
      ...boxProps,
    };
  },
  { themeKey: 'native.BottomSheet.SectionList' }
);

export const BottomSheetSectionList = createComponent<BottomSheetSectionListProps>(
  (props) => {
    const htmlProps = useProps(props);

    return <_BottomSheetSectionList {...htmlProps} />;
  },
  {
    attach: {
      useProps,
      displayName: 'native.BottomSheet.SectionList',
    },
    themeKey: 'native.BottomSheet.SectionList',
  }
);
