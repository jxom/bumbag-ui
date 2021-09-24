import React from 'react';
import { Box, Heading, Text } from 'bumbag-native';
import { Haptic } from '@bumbag-native/haptic';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">Haptic</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Haptic onPress={() => {}} passPress>
            <Text>Click me</Text>
          </Haptic>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
