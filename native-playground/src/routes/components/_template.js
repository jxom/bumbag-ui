import React from 'react';
import { Box, Heading } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">TEMPLATE</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Box>
            <Heading>Hello world</Heading>
          </Box>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
