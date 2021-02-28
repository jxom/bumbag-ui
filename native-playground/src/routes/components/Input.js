import React from 'react';
import { Box, Heading, Input, Stack } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">Input</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Input placeholder="Username" />
        </Preview>
      </PreviewSection>
      <PreviewSection title="Labels">
        <Preview>
          <Stack spacing="major-2">
            <Input label="Username" />
            <Input label="Username" variant="borderless" />
            <Input label="Username" variant="underline" />
          </Stack>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Disabled">
        <Preview>
          <Stack spacing="major-2">
            <Input disabled label="Username" />
            <Input disabled label="Username" variant="borderless" />
            <Input disabled label="Username" variant="underline" />
          </Stack>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Sizes">
        <Preview>
          <Stack spacing="major-2">
            <Input label="Username" size="small" />
            <Input label="Username" />
            <Input label="Username" size="medium" />
            <Input label="Username" size="large" />
            <Input label="Username" size="small" variant="underline" />
            <Input label="Username" variant="underline" />
            <Input label="Username" size="medium" variant="underline" />
            <Input label="Username" size="large" variant="underline" />
            <Input label="Username" size="small" variant="borderless" />
            <Input label="Username" variant="borderless" />
            <Input label="Username" size="medium" variant="borderless" />
            <Input label="Username" size="large" variant="borderless" />
          </Stack>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Colors - Input colors">
        <Preview>
          <Stack spacing="major-2">
            <Input palette="primary" label="Username" />
            <Input palette="secondary" label="Username" />
            <Input palette="danger" label="Username" />
            <Input palette="success" label="Username" />
            <Input palette="warning" label="Username" />
            <Input palette="primary" label="Username" variant="borderless" />
            <Input palette="secondary" label="Username" variant="borderless" />
            <Input palette="danger" label="Username" variant="borderless" />
            <Input palette="success" label="Username" variant="borderless" />
            <Input palette="warning" label="Username" variant="borderless" />
            <Input palette="primary" label="Username" variant="underline" />
            <Input palette="secondary" label="Username" variant="underline" />
            <Input palette="danger" label="Username" variant="underline" />
            <Input palette="success" label="Username" variant="underline" />
            <Input palette="warning" label="Username" variant="underline" />
          </Stack>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Colors - Placeholder colors">
        <Preview>
          <Stack spacing="major-2">
            <Input placeholderTextColor="primary" label="Username" />
            <Input placeholderTextColor="secondary" label="Username" />
            <Input placeholderTextColor="danger" label="Username" />
            <Input placeholderTextColor="success" label="Username" />
            <Input placeholderTextColor="warning" label="Username" />
            <Input placeholderTextColor="primary" label="Username" variant="borderless" />
            <Input placeholderTextColor="secondary" label="Username" variant="borderless" />
            <Input placeholderTextColor="danger" label="Username" variant="borderless" />
            <Input placeholderTextColor="success" label="Username" variant="borderless" />
            <Input placeholderTextColor="warning" label="Username" variant="borderless" />
            <Input placeholderTextColor="primary" label="Username" variant="underline" />
            <Input placeholderTextColor="secondary" label="Username" variant="underline" />
            <Input placeholderTextColor="danger" label="Username" variant="underline" />
            <Input placeholderTextColor="success" label="Username" variant="underline" />
            <Input placeholderTextColor="warning" label="Username" variant="underline" />
          </Stack>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Colors - Label colors">
        <Preview>
          <Stack spacing="major-2">
            <Input labelTextColor="primary" label="Username" />
            <Input labelTextColor="secondary" label="Username" />
            <Input labelTextColor="danger" label="Username" />
            <Input labelTextColor="success" label="Username" />
            <Input labelTextColor="warning" label="Username" />
            <Input labelTextColor="primary" label="Username" variant="borderless" />
            <Input labelTextColor="secondary" label="Username" variant="borderless" />
            <Input labelTextColor="danger" label="Username" variant="borderless" />
            <Input labelTextColor="success" label="Username" variant="borderless" />
            <Input labelTextColor="warning" label="Username" variant="borderless" />
            <Input labelTextColor="primary" label="Username" variant="underline" />
            <Input labelTextColor="secondary" label="Username" variant="underline" />
            <Input labelTextColor="danger" label="Username" variant="underline" />
            <Input labelTextColor="success" label="Username" variant="underline" />
            <Input labelTextColor="warning" label="Username" variant="underline" />
          </Stack>
        </Preview>
      </PreviewSection>
      <PreviewSection title="States">
        <Preview>
          <Stack spacing="major-2">
            <Input state="danger" label="Username" defaultValue="Invalid" />
            <Input state="success" label="Username" defaultValue="Invalid" />
            <Input state="warning" label="Username" defaultValue="Invalid" />
            <Input state="danger" label="Username" defaultValue="Invalid" variant="borderless" />
            <Input state="success" label="Username" defaultValue="Invalid" variant="borderless" />
            <Input state="warning" label="Username" defaultValue="Invalid" variant="borderless" />
            <Input state="danger" label="Username" defaultValue="Invalid" variant="underline" />
            <Input state="success" label="Username" defaultValue="Invalid" variant="underline" />
            <Input state="warning" label="Username" defaultValue="Invalid" variant="underline" />
          </Stack>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
