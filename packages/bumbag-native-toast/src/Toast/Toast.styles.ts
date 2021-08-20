import { TextInput } from 'react-native';
import { Box, BoxSafe } from 'bumbag-native/Box';
import { styled } from 'bumbag-native/styled';
import { theme } from 'bumbag-native/utils/theme';

export const Toast = styled(BoxSafe)`
  background-color: red;
  justify-content: center;
  height: 100px;
  width: 100%;
  position: absolute;

  ${theme('native.Toast', 'styles.base')};
`;

export const ToastTextWrapper = styled(Box)`
  ${theme('native.Toast', 'TextWrapper.styles.base')};
`;

export const ToastTextInput = styled(TextInput)`
  ${theme('native.Toast', 'Text.styles.base')};
`;
