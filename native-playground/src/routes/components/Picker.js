import React from 'react';
import { Box, Heading } from 'bumbag-native';
import { Picker } from '@bumbag-native/picker';
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
    </Box>
  );
}
