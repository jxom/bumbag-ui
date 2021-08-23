const NoopComponent = ({ children }) => children;
const useNoop = () => null;

export const useBottomSheet = useNoop;
export const useBottomSheetModal = useNoop;
export const useBottomSheetSpringConfigs = useNoop;
export const useBottomSheetTimingConfigs = useNoop;
export const BottomSheetModalProvider = NoopComponent;

export const BottomSheetFlatList = NoopComponent;
export const BottomSheetSectionList = NoopComponent;
export const BottomSheetScrollView = NoopComponent;
export const BottomSheetView = NoopComponent;
export const BottomSheetDraggableView = NoopComponent;
export const BottomSheetBackdrop = NoopComponent;
export const BottomSheetModal = NoopComponent;

export const BottomSheet = Object.assign(NoopComponent, {
  FlatList: BottomSheetFlatList,
  SectionList: BottomSheetSectionList,
  ScrollView: BottomSheetScrollView,
  View: BottomSheetView,
  DraggableView: BottomSheetDraggableView,
  Backdrop: BottomSheetBackdrop,
  Modal: BottomSheetModal,
  ModalProvider: BottomSheetModalProvider,
});
