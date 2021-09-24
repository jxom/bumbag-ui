import React from 'react';
import { Box, Button, Heading, Text } from 'bumbag-native';
import { Haptic } from '@bumbag-native/haptic';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">Haptic</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Haptic onPress={() => console.log('test')}>
            <Text>Click me</Text>
          </Haptic>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Button as child">
        <Preview>
          <Haptic>
            <Button onPress={() => console.log('test')}>Click me</Button>
          </Haptic>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Different behaviours">
        <Preview>
          <Haptic type="light">
            <Button>Light feedback</Button>
          </Haptic>
          <Haptic type="medium">
            <Button>Medium feedback</Button>
          </Haptic>
          <Haptic type="heavy">
            <Button>Heavy feedback</Button>
          </Haptic>
          <Haptic type="soft">
            <Button>Soft feedback</Button>
          </Haptic>
          <Haptic type="rigid">
            <Button>Rigid feedback</Button>
          </Haptic>
          <Haptic.Notification type="success">
            <Button>Success feedback</Button>
          </Haptic.Notification>
          <Haptic.Notification type="warning">
            <Button>Warning feedback</Button>
          </Haptic.Notification>
          <Haptic.Notification type="error">
            <Button>Error feedback</Button>
          </Haptic.Notification>
          <Haptic.Selection>
            <Button>Select</Button>
          </Haptic.Selection>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Multiple children">
        <Preview>
          <Haptic>
            <Button onPress={() => console.log('test')}>Click me</Button>
            <Button onPress={() => console.log('test')}>Click me</Button>
          </Haptic>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
