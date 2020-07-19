import * as React from 'react';
import { Divider, Flex } from '../../';

export default { title: 'Divider' };

export const _default = () => <Divider />;

export const vertical = () => (
  <Flex>
    Hello
    <Divider orientation="vertical" />
    World
  </Flex>
);
