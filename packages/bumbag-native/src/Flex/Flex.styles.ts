import { View } from 'react-native';
import { styled } from '../styled';
import { theme } from '../utils/theme';

export const StyledFlex = styled(View)`
  ${theme('native.Flex', 'styles.base')};
`;
