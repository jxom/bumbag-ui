import React from 'react';
import { Box, Image, Text } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Text fontSize="20px" fontWeight="500" marginBottom="16px">
        Image
      </Text>
      <PreviewSection title="Basic">
        <Preview>
          <Box>
            <Image source={require('../../images/bean.jpg')} width="500px" height="300px" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Fit - Contain">
        <Preview>
          <Box>
            <Image
              backgroundColor="primary"
              source={require('../../images/bean.jpg')}
              width="300px"
              height="300px"
              fit="contain"
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Fit - Cover">
        <Preview>
          <Box>
            <Image
              backgroundColor="primary"
              source={require('../../images/bean.jpg')}
              width="300px"
              height="300px"
              fit="stretch"
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Fit - Repeat">
        <Preview>
          <Box>
            <Image
              backgroundColor="primary"
              source={require('../../images/bean.jpg')}
              width="300px"
              height="300px"
              fit="repeat"
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Fit - Center">
        <Preview>
          <Box>
            <Image
              backgroundColor="primary"
              source={require('../../images/bean.jpg')}
              width="300px"
              height="300px"
              fit="center"
            />
          </Box>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
