import * as React from 'react';
import { Set, Stack, Text, Box } from 'bumbag';

export default function CapsizeExample() {
  return (
    <Set alignX="center" spacing="major-4" marginBottom="major-4">
      <Stack alignY="top" spacing="major-2">
        <Text.Block fontSize="100" fontWeight="semibold" color="text100" textTransform="uppercase">
          Without trimming
        </Text.Block>
        <Box backgroundColor="#ffe3a4" fontSize="500">
          Hello world
        </Box>
      </Stack>
      <Stack alignY="top" spacing="major-2">
        <Text.Block fontSize="100" fontWeight="semibold" color="text100" textTransform="uppercase">
          With trimming
        </Text.Block>
        <Text.Block backgroundColor="#ffe3a4" fontSize="500">
          Hello world
        </Text.Block>
      </Stack>
    </Set>
  );
}
