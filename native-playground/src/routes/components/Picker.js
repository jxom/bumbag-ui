import React from 'react';
import { Box, Heading } from 'bumbag-native';
import { Picker } from '@bumbag-native/picker';
import { PickerIOS } from '@bumbag-native/picker/PickerIOS';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  const [value, setValue] = React.useState('windy');
  return (
    <Box>
      <Heading.H5 marginBottom="16px">Picker</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Picker
            options={[
              { label: 'Sunny', value: 'sunny' },
              { label: 'Windy', value: 'windy' },
              { label: 'Overcast', value: 'overcast' },
            ]}
            onChange={(value) => setValue(value)}
            value={value}
          />
        </Preview>
      </PreviewSection>
      <PreviewSection title="Native iOS">
        <Preview>
          <PickerIOS
            options={[
              { label: 'Sunny', value: 'sunny' },
              { label: 'Windy', value: 'windy' },
              { label: 'Overcast', value: 'overcast' },
            ]}
            onChange={(value) => setValue(value)}
            value={value}
          />
        </Preview>
      </PreviewSection>
      <PreviewSection title="Disabled">
        <Preview>
          <Picker
            disabled
            options={[
              { label: 'Sunny', value: 'sunny' },
              { label: 'Windy', value: 'windy' },
              { label: 'Overcast', value: 'overcast' },
            ]}
            onChange={(value) => setValue(value)}
            value={value}
          />
          <Picker
            options={[
              { label: 'Sunny', value: 'sunny', disabled: true },
              { label: 'Windy', value: 'windy' },
              { label: 'Overcast', value: 'overcast' },
            ]}
            onChange={(value) => setValue(value)}
            value={value}
          />
        </Preview>
      </PreviewSection>
      <PreviewSection title="Check icon alignment">
        <Preview>
          <Picker
            alignCheck="right"
            options={[
              { label: 'Sunny', value: 'sunny' },
              { label: 'Windy', value: 'windy' },
              { label: 'Overcast', value: 'overcast' },
            ]}
            onChange={(value) => setValue(value)}
            value={value}
          />
        </Preview>
      </PreviewSection>
      <PreviewSection title="Icons">
        <Preview>
          <Picker
            alignCheck="right"
            options={[
              { label: 'Sunny', value: 'sunny', iconBefore: 'chevron-down' },
              { label: 'Windy', value: 'windy', iconBefore: 'chevron-down' },
              {
                label: 'Overcast',
                value: 'overcast',
                iconBefore: 'chevron-down',
              },
            ]}
            onChange={(value) => setValue(value)}
            value={value}
          />
          <Picker
            alignCheck="left"
            options={[
              { label: 'Sunny', value: 'sunny', iconAfter: 'chevron-down' },
              { label: 'Windy', value: 'windy', iconAfter: 'chevron-down' },
              {
                label: 'Overcast',
                value: 'overcast',
                iconAfter: 'chevron-down',
              },
            ]}
            onChange={(value) => setValue(value)}
            value={value}
          />
        </Preview>
      </PreviewSection>
    </Box>
  );
}
