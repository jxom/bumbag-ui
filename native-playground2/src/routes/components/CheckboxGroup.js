import React from 'react';
import { Box, CheckboxGroup, CheckboxGroupField, Heading } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">CheckboxGroup</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Box>
            <CheckboxGroup
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
            />
            <CheckboxGroup
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
              variant="ghost"
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Fields">
        <Preview>
          <Box>
            <CheckboxGroupField
              label="Weather"
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
            />
            <CheckboxGroupField
              label="Weather"
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
              variant="ghost"
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Alignment">
        <Preview>
          <Box>
            <CheckboxGroup
              align="left"
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
            />
            <CheckboxGroupField
              align="right"
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
            />
            <CheckboxGroup
              align="left"
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
              variant="ghost"
            />
            <CheckboxGroupField
              align="right"
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
              variant="ghost"
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Horizontal">
        <Preview>
          <Box>
            <CheckboxGroup
              orientation="horizontal"
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
            />
            <CheckboxGroup
              orientation="horizontal"
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
              variant="ghost"
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Spacing">
        <Preview>
          <Box>
            <CheckboxGroup
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
            <CheckboxGroup
              disabled
              options={[
                { label: 'Sunny', value: 'sunny' },
                { label: 'Windy', value: 'windy' },
                { label: 'Overcast', value: 'overcast' },
              ]}
            />
            <CheckboxGroup
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
            <CheckboxGroup
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
            <CheckboxGroup
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
            <CheckboxGroup
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
