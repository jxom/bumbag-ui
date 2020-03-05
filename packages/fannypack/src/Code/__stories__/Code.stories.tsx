import * as React from 'react';
import { Box, Code, Stack, Button, Set } from '../../';

export default { title: 'Code' };

export const _default = () => <Code>Hello world!</Code>;

export const codeBlocks = () => (
  <Code isBlock>
    {`function log(message) {
  console.log(message);
}`}
  </Code>
);

export const colors = () => (
  <Box>
    <Code palette="primary">Hello world</Code>
    <br />
    <Code palette="secondary">Hello world</Code>
    <br />
    <Code palette="success">Hello world</Code>
  </Box>
);
