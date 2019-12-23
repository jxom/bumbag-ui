import * as React from 'react';
import { Box, Overlay, Text, Heading, Set } from '../../';

export default { title: 'Overlay' };

export function _default() {
  const overlay = Overlay.useState();

  return (
    <div>
      <Overlay.Disclosure {...overlay}>Open overlay</Overlay.Disclosure>
      <Overlay {...overlay}>
        <Box>Hello world</Box>
      </Overlay>
    </div>
  );
}

export function placement() {
  const overlay = Overlay.useState();

  return (
    <div>
      <Overlay.Disclosure {...overlay}>Open overlay</Overlay.Disclosure>
      <Overlay {...overlay} placement="top">
        Hello world
      </Overlay>
    </div>
  );
}
