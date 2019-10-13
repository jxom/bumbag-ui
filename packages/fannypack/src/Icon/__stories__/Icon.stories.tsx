import * as React from 'react';
import { Box, Icon, Text, Heading, Set } from '../../';

export default { title: 'Icon' };

export const _default = () => <Icon icon="solid-igloo" />;

export const sizes = () => (
  <Box>
    <Icon aria-label="Igloo" icon="solid-igloo" fontSize="100" />
    <Icon aria-label="Igloo" icon="solid-igloo" marginLeft="major-1" />
    <Icon aria-label="Igloo" icon="solid-igloo" fontSize="300" marginLeft="major-1" />
    <Icon aria-label="Igloo" icon="solid-igloo" fontSize="400" marginLeft="major-1" />
    <Icon aria-label="Igloo" icon="solid-igloo" fontSize="500" marginLeft="major-1" />
    <Icon aria-label="Igloo" icon="solid-igloo" fontSize="600" marginLeft="major-1" />
    <Icon aria-label="Igloo" icon="solid-igloo" fontSize="700" marginLeft="major-1" />
    <Icon aria-label="Igloo" icon="solid-igloo" fontSize="800" marginLeft="major-1" />
    <Icon aria-label="Igloo" icon="solid-igloo" fontSize="900" marginLeft="major-1" />
  </Box>
);

export const colors = () => (
  <Box>
    <Icon aria-label="Success" icon="success" color="success" />
    <Icon aria-label="Error" icon="danger" color="danger" marginLeft="major-1" />
    <Icon aria-label="Warning" icon="warning" color="warning" marginLeft="major-1" />
    <Icon aria-label="Copy" icon="solid-clipboard" color="primary" marginLeft="major-1" />
  </Box>
);

export const withText = () => (
  <Box>
    <Text>
      This is text with an icon! <Icon aria-label="Thumbs up" icon="solid-thumbs-up" />
    </Text>
    <Heading use="h3" marginTop="major-2">
      This is a heading with an icon! <Icon aria-label="Thumbs up" icon="solid-thumbs-up" />
    </Heading>
  </Box>
);
