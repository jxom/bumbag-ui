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
      <Link component={TouchableOpacity} to="/components/bottom-sheet">
        <Text>BottomSheet</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/button">
        <Text>Button</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/checkbox">
        <Text>Checkbox</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/checkbox-group">
        <Text>CheckboxGroup</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/field-wrapper">
        <Text>FieldWrapper</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/haptic">
        <Text>Haptic</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/heading">
        <Text>Heading</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/hide">
        <Text>Hide</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/icon">
        <Text>Icon</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/image">
        <Text>Image</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/input">
        <Text>Input</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/list">
        <Text>List</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/menu">
        <Text>Menu</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/picker">
        <Text>Picker</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/radio">
        <Text>Radio</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/show">
        <Text>Show</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/switch">
        <Text>Switch</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/switch-group">
        <Text>SwitchGroup</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/set">
        <Text>Set</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/text">
        <Text>Text</Text>
      </Link>
      <Link component={TouchableOpacity} to="/components/toast">
        <Text>Toast</Text>
      </Link>
    </Box>
  );
}
