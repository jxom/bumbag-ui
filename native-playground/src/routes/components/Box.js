import React from 'react';
import { Box, Text } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Text fontSize="20px" fontWeight="500" marginBottom="16px">
        Box
      </Text>
      <PreviewSection title="Basic">
        <Preview>
          <Box>
            <Box width="50px" height="50px" backgroundColor="primary" />
            <Box width="50px" height="50px" backgroundColor="secondary" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Alignments - Horizontal">
        <Preview>
          <Box alignX="center">
            <Box width="50px" height="50px" backgroundColor="primary" />
            <Box width="50px" height="50px" backgroundColor="secondary" />
          </Box>
          <Box alignX="left">
            <Box width="50px" height="50px" backgroundColor="primary" />
            <Box width="50px" height="50px" backgroundColor="secondary" />
          </Box>
          <Box alignX="right">
            <Box width="50px" height="50px" backgroundColor="primary" />
            <Box width="50px" height="50px" backgroundColor="secondary" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Alignments - Vertical">
        <Preview>
          <Box alignY="center" height="150px">
            <Box width="20px" height="20px" backgroundColor="primary" />
          </Box>
        </Preview>
        <Preview>
          <Box alignY="top" height="150px">
            <Box width="20px" height="20px" backgroundColor="primary" />
          </Box>
        </Preview>
        <Preview>
          <Box alignY="bottom" height="150px">
            <Box width="20px" height="20px" backgroundColor="primary" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Borders">
        <Preview>
          <Box border="1px solid black">
            <Text>Box with a default border</Text>
          </Box>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
