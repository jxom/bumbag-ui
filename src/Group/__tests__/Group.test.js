import React from 'react';
import render from '../../_utils/tests/render';
import Button from '../../Button';
import Group from '../Group';
import Box from 'reakit/Box';
it('renders correctly for a basic group', () => {
  const { container } = render(
    <Group>
      <Box backgroundColor="primary" color="white" padding="0.5rem 1rem">
        Hello
      </Box>
      <Button>Send</Button>
    </Group>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a vertical group', () => {
  const { container } = render(
    <Group isVertical>
      <Box backgroundColor="primary" color="white" padding="0.5rem 1rem">
        Hello
      </Box>
      <Button>Send</Button>
    </Group>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a responsive group', () => {
  const { container } = render(
    <Group verticalAt="tablet">
      <Box backgroundColor="primary" color="white" padding="0.5rem 1rem">
        Hello
      </Box>
      <Button>Send</Button>
    </Group>
  );
  expect(container.firstChild).toMatchSnapshot();
});
