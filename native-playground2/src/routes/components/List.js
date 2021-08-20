import React from 'react';
import { Box, List, Heading, Text } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  const data = [];

  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });

  const getItemCount = (data) => 50;

  return (
    <Box>
      <Heading.H5 marginBottom="16px">List</Heading.H5>
      <PreviewSection title="List.Flat">
        <Preview>
          <Box height="300px">
            <List.Flat
              data={[
                {
                  id: 1,
                  title: 'First Item',
                },
                {
                  id: 2,
                  title: 'Second Item',
                },
                {
                  id: 3,
                  title: 'Third Item',
                },
                {
                  id: 4,
                  title: 'Fourth Item',
                },
                {
                  id: 5,
                  title: 'Fifth Item',
                },
                {
                  id: 6,
                  title: 'Sixth Item',
                },
                {
                  id: 7,
                  title: 'Seventh Item',
                },
              ]}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Box backgroundColor="primaryTint" marginY="major-1" padding="major-2">
                  <Text color="primary">{item.title}</Text>
                </Box>
              )}
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="List.Section">
        <Preview>
          <Box height="300px">
            <List.Section
              stickySectionHeadersEnabled
              sections={[
                {
                  title: 'Main dishes',
                  data: ['Pizza', 'Burger', 'Risotto'],
                },
                {
                  title: 'Sides',
                  data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
                },
                {
                  title: 'Drinks',
                  data: ['Water', 'Coke', 'Beer'],
                },
                {
                  title: 'Desserts',
                  data: ['Cheese Cake', 'Ice Cream'],
                },
              ]}
              keyExtractor={(item, index) => item + index}
              renderSectionHeader={({ section: { title } }) => (
                <Box backgroundColor="primary" paddingY="major-1" paddingX="major-2">
                  <Text color="white">{title}</Text>
                </Box>
              )}
              renderItem={({ item }) => (
                <Box backgroundColor="primaryTint" marginY="major-1" padding="major-2">
                  <Text color="primary">{item}</Text>
                </Box>
              )}
            />
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="List.Virtualized">
        <Preview>
          <Box height="300px">
            <List.Virtualized
              data={data}
              initialNumToRender={4}
              keyExtractor={(item) => item.key}
              getItemCount={getItemCount}
              getItem={getItem}
              renderItem={({ item }) => (
                <Box backgroundColor="primaryTint" marginY="major-1" padding="major-2">
                  <Text color="primary">{item.title}</Text>
                </Box>
              )}
            />
          </Box>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
