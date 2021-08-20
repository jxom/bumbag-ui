import React from 'react';
import { Box, Heading } from 'bumbag-native';
import { BottomSheet } from '@bumbag-native/bottom-sheet';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">BottomSheet</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <BottomSheet />
        </Preview>
      </PreviewSection>
    </Box>
  );
}
