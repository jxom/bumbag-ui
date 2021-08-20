import React from 'react';
import { Box, Flex, Icon, Text } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

const batIcon = {
  viewBoxWidth: 24,
  viewBoxHeight: 24,
  tree: [
    {
      name: 'circle',
      type: 'element',
      value: '',
      attributes: { cx: '12', cy: '12', r: '12', fill: '#BAC0C5' },
      children: [],
    },
    {
      name: 'g',
      type: 'element',
      value: '',
      attributes: { 'clip-path': 'url(#clip0)' },
      children: [
        {
          name: 'path',
          type: 'element',
          value: '',
          attributes: {
            d:
              'M12.0001 3.75V8.84637L15.0501 14.1323L19.4746 16.7026C19.5145 16.633 19.5088 16.5369 19.4478 16.4314L15.8349 10.17L12.222 3.9087C12.1608 3.80283 12.0803 3.75 12.0001 3.75Z',
            fill: 'white',
          },
          children: [],
        },
        {
          name: 'path',
          type: 'element',
          value: '',
          attributes: {
            d:
              'M4.5253 16.7032L8.94993 14.1331L12.0002 8.84698V3.75061C11.9196 3.75061 11.8392 3.80344 11.7783 3.9092L8.16515 10.1707L4.55205 16.4319C4.49128 16.5375 4.48557 16.6335 4.5253 16.7032Z',
            fill: 'white',
          },
          children: [],
        },
        {
          name: 'path',
          type: 'element',
          value: '',
          attributes: {
            d:
              'M19.4746 16.7026L15.0501 14.1324H8.94993L4.5253 16.7026C4.56537 16.7724 4.65132 16.8158 4.7732 16.8158H19.2268C19.3488 16.8158 19.4346 16.7724 19.4746 16.7026Z',
            fill: 'white',
          },
          children: [],
        },
      ],
    },
    {
      name: 'defs',
      type: 'element',
      value: '',
      attributes: {},
      children: [
        {
          name: 'clipPath',
          type: 'element',
          value: '',
          attributes: { id: 'clip0' },
          children: [
            {
              name: 'rect',
              type: 'element',
              value: '',
              attributes: {
                width: '15',
                height: '13.0658',
                fill: 'white',
                transform: 'translate(4.5 3.75)',
              },
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

export default function App() {
  return (
    <Box>
      <Text fontSize="300" fontWeight="500" marginBottom="16px">
        Icon
      </Text>
      <PreviewSection title="Basic">
        <Preview>
          <Box>
            <Icon icon="chevron-down" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Custom">
        <Preview>
          <Box>
            <Icon color="primary" icon={batIcon} />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Sizes">
        <Preview>
          <Box>
            <Icon icon="chevron-down" size="100" />
            <Icon icon="chevron-down" size="150" />
            <Icon icon="chevron-down" size="200" />
            <Icon icon="chevron-down" size="300" />
            <Icon icon="chevron-down" size="400" />
            <Icon icon="chevron-down" size="500" />
            <Icon icon="chevron-down" size="600" />
            <Icon icon="chevron-down" size="700" />
            <Icon icon="chevron-down" size="72px" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Colors">
        <Preview>
          <Box>
            <Icon icon="chevron-down" color="primary" />
            <Icon icon="chevron-down" color="secondary" />
            <Icon icon="chevron-down" color="warning" />
            <Icon icon="chevron-down" color="danger" />
            <Icon icon="chevron-down" color="info" />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="With Text">
        <Preview>
          <Box>
            <Flex alignY="center">
              <Text>
                Hello world asdad jasndjhasb dahjsbd ahjsb dashjbd ajhsbd asd ahsdjhas bd jahsb dahjbs bdajsb dajhb
                sjhdb ajshbd ajhs
              </Text>
              <Icon icon="chevron-down" size="600" marginLeft="minor-1" />
            </Flex>
          </Box>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
