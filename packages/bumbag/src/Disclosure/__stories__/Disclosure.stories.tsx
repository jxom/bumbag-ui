import * as React from 'react';
import { Box, Disclosure, Stack, Button, Set } from '../../';

export default { title: 'Disclosure' };

export function _default() {
  const disclosure = Disclosure.useState({ visible: true });

  return (
    <div>
      <Disclosure {...disclosure}>Toggle</Disclosure>
      <Disclosure.Content {...disclosure}>Hello world</Disclosure.Content>
    </div>
  );
}
