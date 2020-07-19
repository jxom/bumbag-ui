import * as React from 'react';
import { Box, Group, Stack, Button, Set } from '../../';

export default { title: 'Group' };

export const _default = () => (
  <Group>
    <Box backgroundColor="primary" color="white" padding="0.5rem 1rem">
      Hello
    </Box>
    <Button>Send</Button>
    <Button>Cancel</Button>
  </Group>
);

export const verticalGroups = () => (
  <Group orientation="vertical">
    <Box backgroundColor="primary" color="white" padding="0.5rem 1rem">
      Hello
    </Box>
    <Button>Send</Button>
    <Button>Cancel</Button>
  </Group>
);

export const responsiveBreakpoint = () => (
  <Group verticalBelow="widescreen">
    <Box backgroundColor="primary" color="white" padding="0.5rem 1rem">
      Hello
    </Box>
    <Button>Send</Button>
    <Button>Cancel</Button>
  </Group>
);
