import * as React from 'react';
import { Box, BoxSafe } from 'bumbag-native/Box';
import { styled } from 'bumbag-native/styled';
import { theme } from 'bumbag-native/utils/theme';

export const ToastTextWrapper = styled(Box)`
  ${theme('native.Toast', 'TextWrapper.styles.base')};
`;
