import React from 'react';
import { Box, Radio, Heading } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">Radio</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Box>
            <Radio label="Remember me" />
            <Radio label="Remember me" variant="ghost" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Align">
        <Preview>
          <Box>
            <Radio align="right" label="Remember me" />
            <Radio align="left" label="Remember me" />
            <Radio align="right" label="Remember me" variant="ghost" />
            <Radio align="left" label="Remember me" variant="ghost" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Disabled">
        <Preview>
          <Box>
            <Radio disabled defaultChecked label="Remember me" />
            <Radio disabled label="Remember me" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="States">
        <Preview>
          <Box>
            <Radio state="danger" label="Remember me" />
            <Radio state="success" label="Remember me" />
            <Radio state="warning" label="Remember me" />
            <Radio state="primary" label="Remember me" />
            <Radio state="danger" label="Remember me" variant="ghost" />
            <Radio state="success" label="Remember me" variant="ghost" />
            <Radio state="warning" label="Remember me" variant="ghost" />
            <Radio state="primary" label="Remember me" variant="ghost" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Colors">
        <Preview>
          <Box>
            <Radio palette="primary" label="Remember me" />
            <Radio palette="secondary" label="Remember me" />
            <Radio palette="danger" label="Remember me" />
            <Radio palette="success" label="Remember me" />
            <Radio palette="warning" label="Remember me" />
            <Radio palette="primary" label="Remember me" variant="ghost" />
            <Radio palette="secondary" label="Remember me" variant="ghost" />
            <Radio palette="danger" label="Remember me" variant="ghost" />
            <Radio palette="success" label="Remember me" variant="ghost" />
            <Radio palette="warning" label="Remember me" variant="ghost" />
          </Box>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
