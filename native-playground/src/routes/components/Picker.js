import React from 'react';
import { Box, Heading } from 'bumbag-native';
import { Picker } from '@bumbag-native/picker';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">Switch</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Picker />
        </Preview>
      </PreviewSection>
    </Box>
  );
}
