import * as React from 'react';
import { Button, Group, Rover, List } from '../../';

export default { title: 'Rover' };

export function _default() {
  const rover = Rover.useState();

  return (
    <Group>
      <Rover {...rover} use={Button}>
        Button 1
      </Rover>
      <Rover {...rover} use={Button} disabled>
        Button 2
      </Rover>
      <Rover {...rover} use={Button} disabled focusable>
        Button 3
      </Rover>
      <Rover {...rover} use={Button}>
        Button 4
      </Rover>
      <Rover {...rover} use={Button}>
        Button 5
      </Rover>
    </Group>
  );
}
