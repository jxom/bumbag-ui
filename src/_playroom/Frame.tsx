import * as React from 'react';
import { Box, ThemeProvider, StyleSheetManager } from '../index';

export default function Frame({ children, frameWindow }: { children: React.ReactNode; frameWindow: Window }) {
  return (
    <StyleSheetManager target={frameWindow.document.head}>
      <ThemeProvider>
        <Box>{children}</Box>
      </ThemeProvider>
    </StyleSheetManager>
  );
}
