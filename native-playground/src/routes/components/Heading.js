import React from 'react';
import { Box, Heading } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">Heading</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Box>
            <Heading>Hello world</Heading>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Sizes">
        <Preview>
          <Box>
            <Heading.H1>Heading 1</Heading.H1>
            <Heading.H2>Heading 2</Heading.H2>
            <Heading.H3>Heading 3</Heading.H3>
            <Heading.H4>Heading 4</Heading.H4>
            <Heading.H5>Heading 5</Heading.H5>
            <Heading.H6>Heading 6</Heading.H6>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Font weights">
        <Preview>
          <Box>
            <Heading fontWeight="100">Hello world</Heading>
            <Heading fontWeight="200">Hello world</Heading>
            <Heading fontWeight="300">Hello world</Heading>
            <Heading fontWeight="400">Hello world</Heading>
            <Heading fontWeight="500">Hello world</Heading>
            <Heading fontWeight="600">Hello world</Heading>
            <Heading fontWeight="700">Hello world</Heading>
            <Heading fontWeight="800">Hello world</Heading>
            <Heading fontWeight="900">Hello world</Heading>
          </Box>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
