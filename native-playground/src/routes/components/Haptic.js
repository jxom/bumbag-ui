import React from 'react';
import { Box, Button, Heading, Text } from 'bumbag-native';
import { Haptic } from '@bumbag-native/haptic';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  const { enabled, setEnabled } = Haptic.useContext();
  console.log('test', enabled);
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
          <Haptic.Impact type="light">
            <Button>Light feedback</Button>
          </Haptic.Impact>
          <Haptic.Impact type="medium">
            <Button>Medium feedback</Button>
          </Haptic.Impact>
          <Haptic.Impact type="heavy">
            <Button>Heavy feedback</Button>
          </Haptic.Impact>
          <Haptic.Impact type="soft">
            <Button>Soft feedback</Button>
          </Haptic.Impact>
          <Haptic.Impact type="rigid">
            <Button>Rigid feedback</Button>
          </Haptic.Impact>
          <Haptic.Notification type="success">
            <Button>Success feedback</Button>
          </Haptic.Notification>
          <Haptic.Notification type="warning">
            <Button>Warning feedback</Button>
          </Haptic.Notification>
          <Haptic.Notification type="error">
            <Button>Error feedback</Button>
          </Haptic.Notification>
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
      <PreviewSection title="Built-ins">
        <Preview>
          <Haptic.Button palette="primary">Press me</Haptic.Button>
          <Haptic.Touchable>
            <Text>Press me</Text>
          </Haptic.Touchable>
          <Haptic.Pressable>
            <Text>Press me</Text>
          </Haptic.Pressable>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Toggle haptic">
        <Preview>
          <Text>Enabled: {`${enabled}`}</Text>
          <Button onPress={() => setEnabled((enabled) => !enabled)}>Toggle</Button>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
