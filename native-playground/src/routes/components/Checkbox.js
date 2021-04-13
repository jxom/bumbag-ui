import React from 'react';
import { Box, Checkbox, Heading } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">Checkbox</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Box>
            <Checkbox label="Remember me" />
            <Checkbox label="Remember me" variant="ghost" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Align">
        <Preview>
          <Box>
            <Checkbox align="right" label="Remember me" />
            <Checkbox align="left" label="Remember me" />
            <Checkbox align="right" label="Remember me" variant="ghost" />
            <Checkbox align="left" label="Remember me" variant="ghost" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Disabled">
        <Preview>
          <Box>
            <Checkbox disabled defaultChecked label="Remember me" />
            <Checkbox disabled label="Remember me" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="States">
        <Preview>
          <Box>
            <Checkbox state="danger" label="Remember me" />
            <Checkbox state="success" label="Remember me" />
            <Checkbox state="warning" label="Remember me" />
            <Checkbox state="primary" label="Remember me" />
            <Checkbox state="danger" label="Remember me" variant="ghost" />
            <Checkbox state="success" label="Remember me" variant="ghost" />
            <Checkbox state="warning" label="Remember me" variant="ghost" />
            <Checkbox state="primary" label="Remember me" variant="ghost" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Colors">
        <Preview>
          <Box>
            <Checkbox palette="primary" label="Remember me" />
            <Checkbox palette="secondary" label="Remember me" />
            <Checkbox palette="danger" label="Remember me" />
            <Checkbox palette="success" label="Remember me" />
            <Checkbox palette="warning" label="Remember me" />
            <Checkbox palette="primary" label="Remember me" variant="ghost" />
            <Checkbox palette="secondary" label="Remember me" variant="ghost" />
            <Checkbox palette="danger" label="Remember me" variant="ghost" />
            <Checkbox palette="success" label="Remember me" variant="ghost" />
            <Checkbox palette="warning" label="Remember me" variant="ghost" />
          </Box>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
