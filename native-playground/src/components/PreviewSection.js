import * as React from 'react';
import { Box, Text } from 'bumbag-native';

export function PreviewSection({ children, title }) {
  return (
    <Box marginBottom="24px">
      <Text marginBottom="8px">{title}</Text>
      {children}
    </Box>
  );
}
