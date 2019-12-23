import * as React from 'react';
import { Badge, Box, Button, Set } from '../../';

export default { title: 'Badge' };

export const _default = () => <Badge>1</Badge>;

export const noContent = () => <Badge />;

export const colors = () => (
  <Set spacing="minor-1">
    <Badge palette="primary">12</Badge>
    <Badge palette="secondary">12</Badge>
    <Badge palette="info">12</Badge>
    <Badge palette="success">12</Badge>
    <Badge palette="warning">12</Badge>
    <Badge palette="danger">12</Badge>
  </Set>
);

export const sizes = () => (
  <Set spacing="minor-1">
    <Badge>1</Badge>
    <Badge size="medium">1</Badge>
    <Badge size="large">1</Badge>
  </Set>
);

export const attachment = () => (
  <Box>
    <Button>
      Hello world
      <Badge isAttached palette="danger" />
    </Button>
    <Button size="large" marginLeft="major-2">
      Hello world
      <Badge isAttached palette="danger" size="large">
        1
      </Badge>
    </Button>
    <Box backgroundColor="primary" color="white" marginTop="major-2">
      Hello world
      <Badge isAttached palette="danger">
        1
      </Badge>
    </Box>
  </Box>
);
