import { SafeAreaView, ScrollView, View } from 'react-native';
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
