import { View } from 'react-native';
import { Text } from '../Text';
import { styled } from '../styled';
import { theme } from '../utils/theme';

export const StyledFieldWrapper = styled(View)`
  ${theme('native.FieldWrapper', 'styles.base')};
`;

export const FieldWrapperLabel = styled(Text)`
  ${theme('native.FieldWrapper', 'Label.styles.base')};
`;
