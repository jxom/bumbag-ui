import React from 'react';
import { Box, ThemeProvider } from 'fannypack';

export default function Frame({ children, frameWindow }) {
  return (
    <ThemeProvider>
      <Box>{children}</Box>
    </ThemeProvider>
  );
}
