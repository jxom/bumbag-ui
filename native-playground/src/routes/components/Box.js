import React from 'react';
import { Box, Text, breakpoint } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Text fontSize="20px" fontWeight="500" marginBottom="16px">
        Box
      </Text>
      <PreviewSection title="Basic">
        <Preview>
          <Box>
            <Box width="50px" height="50px" backgroundColor="primary" />
            <Box width="50px" height="50px" backgroundColor="secondary" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="CSS Props - Colors">
        <Preview>
          <Box backgroundColor="primary">
            <Text color="primaryTint">Hello world</Text>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="CSS Props - Spacing">
        <Preview>
          <Box padding="major-2" backgroundColor="primary">
            <Text color="white">Hello world</Text>
          </Box>
        </Preview>
        <Preview>
          <Box paddingY="major-2" paddingX="major-4" backgroundColor="primary">
            <Text color="white">Hello world</Text>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="CSS Props - Font size">
        <Preview>
          <Box>
            <Text fontSize="500">Hello world</Text>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="CSS Props - Font weight">
        <Preview>
          <Box>
            <Text fontWeight="semibold">Hello world</Text>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="CSS Props - Font family">
        <Preview>
          <Box>
            <Text fontFamily="Helvetica">Hello world</Text>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Altitudes">
        <Preview>
          <Box>
            <Box altitude="100" backgroundColor="white" padding="major-2">
              <Text>Altitude 100</Text>
            </Box>
            <Box altitude="200" backgroundColor="white" padding="major-2" marginTop="major-2">
              <Text>Altitude 200</Text>
            </Box>
            <Box altitude="300" backgroundColor="white" padding="major-2" marginTop="major-2">
              <Text>Altitude 300</Text>
            </Box>
            <Box altitude="400" backgroundColor="white" padding="major-2" marginTop="major-2">
              <Text>Altitude 400</Text>
            </Box>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Alignments - Horizontal">
        <Preview>
          <Box alignX="center">
            <Box width="50px" height="50px" backgroundColor="primary" />
            <Box width="50px" height="50px" backgroundColor="secondary" />
          </Box>
          <Box alignX="left">
            <Box width="50px" height="50px" backgroundColor="primary" />
            <Box width="50px" height="50px" backgroundColor="secondary" />
          </Box>
          <Box alignX="right">
            <Box width="50px" height="50px" backgroundColor="primary" />
            <Box width="50px" height="50px" backgroundColor="secondary" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Alignments - Vertical">
        <Preview>
          <Box alignY="center" height="150px">
            <Box width="20px" height="20px" backgroundColor="primary" />
          </Box>
        </Preview>
        <Preview>
          <Box alignY="top" height="150px">
            <Box width="20px" height="20px" backgroundColor="primary" />
          </Box>
        </Preview>
        <Preview>
          <Box alignY="bottom" height="150px">
            <Box width="20px" height="20px" backgroundColor="primary" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Borders">
        <Preview>
          <Box border="default">
            <Text>Box with a default border</Text>
          </Box>
        </Preview>
        <Preview>
          <Box border="1px solid black">
            <Text>Box with a default border</Text>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Border radius">
        <Preview>
          <Box borderRadius="default" border="default" padding="16px">
            <Text>Box with a default border radius</Text>
          </Box>
          <Box borderRadius="0" border="default" padding="16px">
            <Text>Box with a border radius of 0</Text>
          </Box>
          <Box borderRadius="1" border="default" padding="16px">
            <Text>Box with a border radius of 1</Text>
          </Box>
          <Box borderRadius="2" border="default" padding="16px">
            <Text>Box with a border radius of 2</Text>
          </Box>
          <Box borderRadius="3" border="default" padding="16px">
            <Text>Box with a border radius of 3</Text>
          </Box>
          <Box borderRadius="4" border="default" padding="16px">
            <Text>Box with a border radius of 4</Text>
          </Box>
          <Box borderRadius="5" border="default" padding="16px">
            <Text>Box with a border radius of 5</Text>
          </Box>
          <Box borderRadius="6" border="default" padding="16px">
            <Text>Box with a border radius of 6</Text>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Platform props">
        <Preview>
          <Box>
            <Box width="50px" height="50px" backgroundColor={{ web: 'primary', ios: 'secondary', android: 'red' }} />
            <Box width="50px" height="50px" backgroundColor={{ web: 'green', native: 'blue' }} />
            <Box
              width="50px"
              height="50px"
              _web={{ backgroundColor: 'primary' }}
              _ios={{ backgroundColor: 'secondary' }}
              _android={{ backgroundColor: 'red' }}
            />
            <Box width="50px" height="50px" _web={{ backgroundColor: 'green' }} _native={{ backgroundColor: 'red' }} />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Responsive - Widths">
        <Preview>
          <Box>
            <Box
              width="50px"
              height="50px"
              backgroundColor={breakpoint('width', {
                default: 'primary',
                xs: 'secondary',
                'max-lg': 'warning',
              })}
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Responsive - Heights">
        <Preview>
          <Box>
            <Box
              width="50px"
              height="50px"
              backgroundColor={breakpoint('height', {
                default: 'primary',
                xs: 'secondary',
                'max-lg': 'warning',
              })}
            />
          </Box>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
