import { Box } from 'bumbag-native/Box';
import { styled } from 'bumbag-native/styled';
import { theme } from 'bumbag-native/utils/theme';

export const StyledPicker = styled(Box)`
  ${theme('native.Picker', 'styles.base')};
`;

export const StyledPickerWeb = styled(Box)`
  ${theme('native.Picker', 'styles.base')};
`;
