import React from 'react';
import { Box, Heading, Menu } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">Menu</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Menu>
            <Menu.Item onPress={()=>console.log('test')}>General</Menu.Item>
            <Menu.Item>Accounts</Menu.Item>
            <Menu.Item>Alerts</Menu.Item>
            <Menu.Item>Security</Menu.Item>
          </Menu>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
