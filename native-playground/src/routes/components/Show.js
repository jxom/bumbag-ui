import React from 'react';
import { Box, Heading, Show, Text } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">Show</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Show below="lg">
            <Text>This will show below lg</Text>
          </Show>
          <Show above="lg">
            <Text>This will show above lg</Text>
          </Show>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
