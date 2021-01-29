import { View } from 'react-native';
import { styled } from '../styled';
import { theme } from '../utils/theme';

export const StyledTemplate = styled(View)`
  ${theme('native.Template', 'styles.base')};
`;
