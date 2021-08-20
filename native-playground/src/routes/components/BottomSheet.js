import React from 'react';
import { Box, Heading, Text } from 'bumbag-native';
import { BottomSheet } from '@bumbag-native/bottom-sheet';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  const data = React.useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );

  const sections = React.useMemo(
    () =>
      Array(10)
        .fill(0)
        .map((_, index) => ({
          title: `Section ${index}`,
          data: Array(10)
            .fill(0)
            .map((_, index) => `Item ${index}`),
        })),
    []
  );

  const renderItem = React.useCallback(
    ({ item }) => (
      <Box>
        <Text>{item}</Text>
      </Box>
    ),
    []
  );

  const renderSectionHeader = React.useCallback(
    ({ section }) => (
      <Box>
        <Text>{section.title}</Text>
      </Box>
    ),
    []
  );

  return (
    <Box flex="1">
      <Heading.H5 marginBottom="16px">BottomSheet</Heading.H5>
      <PreviewSection title="Basic">
        <Preview height="300px" border="1px solid black">
          <BottomSheet altitude="400">
            <Text>Hello world</Text>
          </BottomSheet>
        </Preview>
      </PreviewSection>
      <PreviewSection title="With flat list">
        <Preview height="300px" border="1px solid black">
          <BottomSheet altitude="400" snapPoints={['80%']}>
            <BottomSheet.FlatList data={data} keyExtractor={(i) => i} renderItem={renderItem} />
          </BottomSheet>
        </Preview>
      </PreviewSection>
      <PreviewSection title="With flat list">
        <Preview height="300px" border="1px solid black">
          <BottomSheet altitude="400" snapPoints={['80%']}>
            <BottomSheet.SectionList
              sections={sections}
              keyExtractor={(i) => i}
              renderSectionHeader={renderSectionHeader}
              renderItem={renderItem}
            />
          </BottomSheet>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
