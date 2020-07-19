import * as React from 'react';
import { Badge, Box, Button, Set } from '../../';

export default { title: 'Box' };

export const _default = () => <Box>This is a box</Box>;

export const cssProps = () => (
  <Box backgroundColor="primaryTint" color="primary800" padding="major-2">
    This is a box
  </Box>
);

export const altitudes = () => (
  <Set orientation="vertical" spacing="major-4">
    <Box altitude="100">Altitude 100</Box>
    <Box altitude="200">Altitude 200</Box>
    <Box altitude="300">Altitude 300</Box>
    <Box altitude="400">Altitude 400</Box>
  </Set>
);

export const borders = () => (
  <Set orientation="vertical" spacing="major-2">
    <Box border="default">Box with a default border</Box>
    <Box border="1px solid black">Box with a manual border</Box>
  </Set>
);

export const borderRadius = () => (
  <Set orientation="vertical" spacing="major-2">
    <Box borderRadius="default" border="1px solid black" padding="major-3">
      Box with a default border radius
    </Box>
    <Box borderRadius="0" border="1px solid black" padding="major-3">
      Box with a border radius of 0
    </Box>
    <Box borderRadius="1" border="1px solid black" padding="major-3">
      Box with a border radius of 1
    </Box>
    <Box borderRadius="2" border="1px solid black" padding="major-3">
      Box with a border radius of 2
    </Box>
    <Box borderRadius="3" border="1px solid black" padding="major-3">
      Box with a border radius of 3
    </Box>
    <Box borderRadius="4" border="1px solid black" padding="major-3">
      Box with a border radius of 4
    </Box>
    <Box borderRadius="5" border="1px solid black" padding="major-3">
      Box with a border radius of 5
    </Box>
    <Box borderRadius="6" border="1px solid black" padding="major-3">
      Box with a border radius of 6
    </Box>
  </Set>
);
