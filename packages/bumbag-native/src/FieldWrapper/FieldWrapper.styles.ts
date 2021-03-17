import { View } from 'react-native';
import { Box } from '../Box';
import { Text } from '../Text';
import { styled } from '../styled';
import { fontWeight, palette, space, theme } from '../utils/theme';

export const StyledFieldWrapper = styled(View)`
  ${theme('native.FieldWrapper', 'styles.base')};
`;

export const StyledFieldWrapperLabelWrapper = styled(Box)`
  margin-bottom: ${(props) => `${space(2)(props)}px`};

  ${theme('native.FieldWrapper', 'LabelWrapper.styles.base')};
`;

export const StyledFieldWrapperLabel = styled(Text)`
  font-weight: 500;

  ${theme('native.FieldWrapper', 'Label.styles.base')};
`;
