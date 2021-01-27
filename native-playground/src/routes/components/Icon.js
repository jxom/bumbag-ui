import React from 'react';
import { Box, Flex, Icon, Text } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Text fontSize="300" fontWeight="500" marginBottom="16px">
        Text
      </Text>
      <PreviewSection title="Basic">
        <Preview>
          <Box>
            <Icon icon="chevron-down" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Sizes">
        <Preview>
          <Box>
            <Icon icon="chevron-down" size="100" />
            <Icon icon="chevron-down" size="150" />
            <Icon icon="chevron-down" size="200" />
            <Icon icon="chevron-down" size="300" />
            <Icon icon="chevron-down" size="400" />
            <Icon icon="chevron-down" size="500" />
            <Icon icon="chevron-down" size="600" />
            <Icon icon="chevron-down" size="700" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="With Text">
        <Preview>
          <Box>
            <Flex alignY="center">
              <Icon icon="chevron-down" marginRight="minor-1" />
              <Text>Hello world</Text>
            </Flex>
          </Box>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
