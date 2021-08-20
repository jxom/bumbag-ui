import React from 'react';
import { Box, Heading, Set, Button } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">Set</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Set>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
            <Button>Button 4</Button>
            <Button>Button 5</Button>
            <Button>Button 6</Button>
            <Button>Button 7</Button>
          </Set>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Spacing">
        <Preview>
          <Set spacing="minor-1">
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
            <Button>Button 4</Button>
            <Button>Button 5</Button>
            <Button>Button 6</Button>
            <Button>Button 7</Button>
          </Set>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Vertical">
        <Preview>
          <Set orientation="vertical">
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
            <Button>Button 4</Button>
            <Button>Button 5</Button>
            <Button>Button 6</Button>
            <Button>Button 7</Button>
          </Set>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Filled">
        <Preview>
          <Set orientation="vertical" isFilled>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
            <Button>Button 4</Button>
            <Button>Button 5</Button>
            <Button>Button 6</Button>
            <Button>Button 7</Button>
          </Set>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
