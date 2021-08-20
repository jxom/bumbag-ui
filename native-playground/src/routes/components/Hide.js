import React from 'react';
import { Box, Heading, Hide, Text } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">Hide</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Hide below="lg">
            <Text>This will hide below lg</Text>
          </Hide>
          <Hide above="lg">
            <Text>This will hide above lg</Text>
          </Hide>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
