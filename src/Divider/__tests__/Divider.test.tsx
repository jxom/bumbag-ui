import * as React from 'react';
import render from '../../_utils/tests/render';
import Divider from '../Divider';
import { Box, Flex } from '../../primitives';

it('renders correctly for a basic divider', () => {
  const { container } = render(<Divider />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a vertical divider', () => {
  const { container } = render(
    <Flex>
      Hello
      <Divider isVertical />
      World
    </Flex>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a horizontal divider with content', () => {
  const { container } = render(
    <Box>
      Hello
      <Divider content="Test" />
      World
    </Box>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a vertical divider with content', () => {
  const { container } = render(
    <Flex alignItems="center" height="50px">
      Hello
      <Divider content="or" isVertical />
      World
    </Flex>
  );
  expect(container.firstChild).toMatchSnapshot();
});
