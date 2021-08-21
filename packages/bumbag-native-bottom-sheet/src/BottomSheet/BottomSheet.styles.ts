import { Box } from 'bumbag-native/Box';
import { styled } from 'bumbag-native/styled';
import { borderRadius, palette, space, theme } from 'bumbag-native/utils';
import Animated from 'react-native-reanimated';

export const BottomSheet = styled(Box)`
  ${theme('native.BottomSheet', 'styles.base')};
`;

export const BottomSheetBackgroundWrapper = styled(Box)`
  background-color: ${palette('background')};
  margin-top: ${(props) => `${space(2, 'major')(props)}px`};
  bottom: -100px;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;

  ${theme('native.BottomSheet.Background.Wrapper', 'styles.base')};
`;

export const BottomSheetBackground = styled(Box)`
  background-color: ${(props) => palette(props.backgroundColor || 'background')(props)};
  height: ${(props) => `${space(4, 'major')(props)}px`};
  top: ${(props) => `-${space(2, 'major')(props)}px`};
  border-top-left-radius: ${borderRadius('5')};
  border-top-right-radius: ${borderRadius('5')};

  ${theme('native.BottomSheet.Background', 'styles.base')};
`;

export const BottomSheetHandleWrapper = styled(Box)`
  border-top-left-radius: ${borderRadius('5')};
  border-top-right-radius: ${borderRadius('5')};
  align-items: center;
  padding-top: ${(props) => `${space(2, 'minor')(props)}px`};
  height: ${(props) => `${space(5, 'minor')(props)}px`};

  ${theme('native.BottomSheet.Handle.Wrapper', 'styles.base')};
`;

export const BottomSheetHandle = styled(Box)`
  height: ${(props) => `${space(1, 'minor')(props)}px`};
  width: ${(props) => `${space(5, 'major')(props)}px`};
  background-color: ${palette('gray')};
  border-radius: 2px;

  ${theme('native.BottomSheet.Handle', 'styles.base')};
`;

export const BottomSheetBackdrop = styled(Animated.View)`
  ${theme('native.BottomSheet.Backdrop', 'styles.base')};
`;
