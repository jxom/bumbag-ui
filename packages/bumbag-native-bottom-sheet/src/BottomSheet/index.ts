import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as bottomSheetStyles from './BottomSheet.styles';
import { BottomSheet as _BottomSheet } from './BottomSheet';
import { BottomSheetFlatList } from './BottomSheetFlatList';
import { BottomSheetSectionList } from './BottomSheetSectionList';
import { BottomSheetScrollView } from './BottomSheetScrollView';
import { BottomSheetView } from './BottomSheetView';
import { BottomSheetDraggableView } from './BottomSheetDraggableView';
import { BottomSheetBackdrop } from './BottomSheetBackdrop';
import { BottomSheetModal } from './BottomSheetModal';

export type { BottomSheetHandleProps, BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';
export {
  useBottomSheet,
  useBottomSheetModal,
  useBottomSheetSpringConfigs,
  useBottomSheetTimingConfigs,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

export * from './BottomSheet';
export * from './BottomSheetFlatList';
export * from './BottomSheetSectionList';
export * from './BottomSheetScrollView';
export * from './BottomSheetView';
export * from './BottomSheetDraggableView';
export * from './BottomSheetBackdrop';
export * from './BottomSheetModal';

export { bottomSheetStyles };

export const BottomSheet = Object.assign(_BottomSheet, {
  FlatList: BottomSheetFlatList,
  SectionList: BottomSheetSectionList,
  ScrollView: BottomSheetScrollView,
  View: BottomSheetView,
  DraggableView: BottomSheetDraggableView,
  Backdrop: BottomSheetBackdrop,
  Modal: BottomSheetModal,
  ModalProvider: BottomSheetModalProvider,
});
