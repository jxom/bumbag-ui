import { View } from 'react-native';
import { styled } from '../styled';
import { theme } from '../utils/theme';

export const StyledCheckbox = styled(View)`
  ${theme('native.Checkbox', 'styles.base')};
`;
