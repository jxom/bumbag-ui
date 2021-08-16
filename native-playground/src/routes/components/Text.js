import React from 'react';
import { Box, Text } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Text fontSize="20px" fontWeight="500" marginBottom="16px">
        Text
      </Text>
      <PreviewSection title="Basic">
        <Preview>
          <Box>
            <Text>
              Hello world, this is a bit of <Text fontWeight="bold">text</Text>.
            </Text>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Font weights">
        <Preview>
          <Box>
            <Text fontWeight="100">Hello world, this is a bit of text.</Text>
            <Text fontWeight="200">Hello world, this is a bit of text.</Text>
            <Text fontWeight="300">Hello world, this is a bit of text.</Text>
            <Text fontWeight="400">Hello world, this is a bit of text.</Text>
            <Text fontWeight="500">Hello world, this is a bit of text.</Text>
            <Text fontWeight="600">Hello world, this is a bit of text.</Text>
            <Text fontWeight="700">Hello world, this is a bit of text.</Text>
            <Text fontWeight="800">Hello world, this is a bit of text.</Text>
            <Text fontWeight="900">Hello world, this is a bit of text.</Text>
          </Box>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
