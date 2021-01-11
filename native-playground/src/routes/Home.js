import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { Box, Text } from 'bumbag-native';

export default function App() {
  return (
    <Box>
      <Link component={TouchableOpacity} to="/components/box">
        <Text>Box</Text>
      </Link>
    </Box>
  );
}
