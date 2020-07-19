import * as React from 'react';
import { Box, Stack, Text, Heading, Set } from '../../';

export default { title: 'Stack' };

export const _default = () => (
  <Stack>
    <Box backgroundColor="white700" padding="major-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor lacus lacus, id mattis felis cursus at.
      Sed mollis eros sem, eu tincidunt lectus interdum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer lacinia lacinia dui id pellentesque. Orci varius natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. Donec laoreet magna non ornare consectetur. Proin cursus consectetur ligula, et posuere
      leo. Cras placerat sapien in consectetur aliquet.
    </Box>
    <Box backgroundColor="white700" padding="major-3">
      <Stack spacing="major-2">
        <Box backgroundColor="white" padding="major-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor lacus lacus, id mattis felis cursus
          at. Sed mollis eros sem, eu tincidunt lectus interdum sed.
        </Box>
        <Box backgroundColor="white" padding="major-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia lacinia dui id pellentesque. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec laoreet magna non
          ornare consectetur. Proin cursus consectetur ligula, et posuere leo. Cras placerat sapien in consectetur
          aliquet.
        </Box>
      </Stack>
    </Box>
    <Stack orientation="horizontal">
      <Box backgroundColor="white700" padding="major-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor lacus lacus, id mattis felis cursus
        at. Sed mollis eros sem, eu tincidunt lectus interdum sed. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Integer lacinia lacinia dui id pellentesque. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec laoreet magna non ornare consectetur. Proin cursus consectetur ligula, et
        posuere leo. Cras placerat sapien in consectetur aliquet.
      </Box>
      <Box backgroundColor="white700" padding="major-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor lacus lacus, id mattis felis cursus
        at. Sed mollis eros sem, eu tincidunt lectus interdum sed. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Integer lacinia lacinia dui id pellentesque. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec laoreet magna non ornare consectetur. Proin cursus consectetur ligula, et
        posuere leo. Cras placerat sapien in consectetur aliquet.
      </Box>
    </Stack>
  </Stack>
);
