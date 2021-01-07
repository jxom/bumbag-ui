import { SafeAreaView, View } from 'react-native';
import { styled } from '../styled';
import { theme } from '../utils/theme';

export const StyledBox = styled(View)`
  & {
    ${theme('Box.styles.base')};
  }
`;

export const StyledBoxSafe = styled(SafeAreaView)`
  & {
    ${theme('Box.Safe.styles.base')};
  }
`;
