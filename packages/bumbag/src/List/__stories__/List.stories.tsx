import * as React from 'react';
import { Box, List, Text, Heading, Set } from '../../';

export default { title: 'List' };

export const _default = () => (
  <List>
    <List.Item>Item 1</List.Item>
    <List.Item>Item 2</List.Item>
    <List.Item>Item 3</List.Item>
    <List.Item>Item 4</List.Item>
  </List>
);

export const types = () => (
  <Box>
    <List listStyleType="disc" listStylePosition="inside">
      <List.Item>Item 1</List.Item>
      <List.Item>Item 2</List.Item>
    </List>
    <List listStyleType="circle" listStylePosition="inside">
      <List.Item>Item 1</List.Item>
      <List.Item listStyleType="georgian">Item 2</List.Item>
    </List>
  </Box>
);
