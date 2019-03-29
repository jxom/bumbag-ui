import React from 'react';
import { Box, ThemeProvider, StyleSheetManager } from 'fannypack';

export default function Frame({ children, frameWindow }) {
  return (
    <StyleSheetManager target={frameWindow.document.head}>
      <ThemeProvider>
        <Box>{children}</Box>
      </ThemeProvider>
    </StyleSheetManager>
  );
}
