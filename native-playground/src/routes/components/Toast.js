import React from 'react';
import { Box, Button, Heading } from 'bumbag-native';
import { useToasts } from '@bumbag-native/toast';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  const toasts = useToasts();
  return (
    <Box>
      <Heading.H5 marginBottom="16px">Toast</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Button onPress={() => toasts.create({ title: 'A toast has been created', palette: 'blue' })}>
            Open toast
          </Button>
          <Button onPress={() => toasts.success({ title: 'A toast has been created' })}>Open success</Button>
          <Button onPress={() => toasts.danger({ title: 'A toast has been created' })}>Open error</Button>
          <Button onPress={() => toasts.info({ title: 'A toast has been created' })}>Open info</Button>
          <Button onPress={() => toasts.warning({ title: 'A toast has been created' })}>Open warning</Button>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
