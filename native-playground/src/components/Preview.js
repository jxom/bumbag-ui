import * as React from 'react';
import { Box } from 'bumbag-native';

export function Preview({ children }) {
  return (
    <Box backgroundColor="white600" padding="16px" marginTop="8px">
      {children}
    </Box>
  );
}
