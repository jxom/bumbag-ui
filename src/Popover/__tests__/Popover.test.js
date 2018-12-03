import React from 'react';
import render from '../../_utils/tests/render';
import Button from '../../Button';
import Text from '../../Text';
import Popover from '../Popover';

it('renders correctly for a default popover', () => {
  const { container } = render(
    <Popover content={<Text>Hello world</Text>}>
      <Button>Toggle popover</Button>
    </Popover>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a placement prop is set', () => {
  const { container } = render(
    <Popover content={<Text>Hello world</Text>} placement="right">
      <Button>Toggle popover</Button>
    </Popover>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when showCloseButton is truthy', () => {
  const { container } = render(
    <Popover content={<Text>Hello world</Text>} showCloseButton>
      <Button>Toggle popover</Button>
    </Popover>
  );
  expect(container.firstChild).toMatchSnapshot();
});
