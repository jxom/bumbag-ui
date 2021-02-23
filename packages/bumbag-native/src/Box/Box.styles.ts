import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { styled } from '../styled';
import { theme } from '../utils/theme';

export const StyledBox = styled(View)`
  ${theme('native.Box', 'styles.base')};
`;

export const StyledBoxSafe = styled(SafeAreaView)`
  ${theme('native.Box.Safe', 'styles.base')};
`;

export const StyledBoxScroll = styled(ScrollView)`
  ${theme('native.Box.Scroll', 'styles.base')};
`;

export const StyledBoxKeyboardAvoiding = styled(KeyboardAvoidingView)`
  ${theme('native.Box.KeyboardAvoiding', 'styles.base')};
`;

export const StyledBoxTouchable = styled(TouchableOpacity)`
  ${theme('native.Box.Touchable', 'styles.base')};
`;

export const StyledBoxTouchableWithoutFeedback = styled(TouchableWithoutFeedback)`
  ${theme('native.Box.TouchableWithoutFeedback', 'styles.base')};
`;
