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
          <Haptic type="selection">
            <Button onPress={() => console.log('test')}>selection</Button>
          </Haptic>
          <Haptic type="impactLight">
            <Button onPress={() => console.log('test')}>impactLight</Button>
          </Haptic>
          <Haptic type="impactMedium">
            <Button>impactMedium</Button>
          </Haptic>
          <Haptic type="impactHeavy">
            <Button>impactHeavy</Button>
          </Haptic>
          <Haptic type="rigid">
            <Button>rigid</Button>
          </Haptic>
          <Haptic type="soft">
            <Button>soft</Button>
          </Haptic>
          <Haptic type="notificationSuccess">
            <Button>notificationSuccess</Button>
          </Haptic>
          <Haptic type="notificationWarning">
            <Button>notificationWarning</Button>
          </Haptic>
          <Haptic type="notificationError">
            <Button>notificationError</Button>
          </Haptic>
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
