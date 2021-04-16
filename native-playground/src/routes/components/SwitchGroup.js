import React from 'react';
import { Box, SwitchGroup, SwitchGroupField, Heading } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">SwitchGroup</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Box>
            <SwitchGroup
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Fields">
        <Preview>
          <Box>
            <SwitchGroupField
              label="Weather"
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Alignment">
        <Preview>
          <Box>
            <SwitchGroup
              align="left"
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
            />
            <SwitchGroupField
              align="right"
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Horizontal">
        <Preview>
          <Box>
            <SwitchGroup
              orientation="horizontal"
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Spacing">
        <Preview>
          <Box>
            <SwitchGroup
              spacing="major-2"
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Disabled">
        <Preview>
          <Box>
            <SwitchGroup
              disabled
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
            />
            <SwitchGroup
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy', disabled: true },
                { label: 'Overcast', value: 'overcast' },
              ]}
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="States">
        <Preview>
          <Box>
            <SwitchGroup
              state="danger"
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Colors">
        <Preview>
          <Box>
            <SwitchGroup
              palette="secondary"
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Default value">
        <Preview>
          <Box>
            <SwitchGroup
              defaultValue={['overcast', 'sunny']}
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
            />
          </Box>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
