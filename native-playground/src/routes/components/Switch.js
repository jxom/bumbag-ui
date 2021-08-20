import React from 'react';
import { Box, Heading, Switch } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">Switch</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Switch />
        </Preview>
      </PreviewSection>
      <PreviewSection title="Labels">
        <Preview>
          <Switch label="Remember me" />
        </Preview>
      </PreviewSection>
      <PreviewSection title="Align">
        <Preview>
          <Switch align="right" label="Remember me" />
          <Switch align="left" label="Remember me" />
        </Preview>
      </PreviewSection>
      <PreviewSection title="Default checked">
        <Preview>
          <Switch defaultChecked />
        </Preview>
      </PreviewSection>
      <PreviewSection title="States">
        <Preview>
          <Switch state="danger" />
          <Switch state="success" />
          <Switch state="warning" />
          <Switch state="primary" />
        </Preview>
      </PreviewSection>
      <PreviewSection title="Colors">
        <Preview>
          <Switch palette="primary" />
          <Switch palette="secondary" />
          <Switch palette="danger" />
          <Switch palette="success" />
          <Switch palette="warning" />
        </Preview>
      </PreviewSection>
    </Box>
  );
}
