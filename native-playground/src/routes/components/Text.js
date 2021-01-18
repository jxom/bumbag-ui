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
            <Text use="strong">
              Hello world, this is a bit of <Text fontWeight="500">text</Text>.
            </Text>
          </Box>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
