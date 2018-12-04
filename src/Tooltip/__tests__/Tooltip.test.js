import React from 'react';
import render from '../../_utils/tests/render';
import Button from '../../Button';
import Tooltip from '../Tooltip';

it('renders correctly for a default tooltip', () => {
  const { container } = render(
    <Button>
      Hover on me
      <Tooltip>Hello world!</Tooltip>
    </Button>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a tooltip with a placement set', () => {
  const { container } = render(
    <Button>
      Hover on me
      <Tooltip placement="right">Hello world!</Tooltip>
    </Button>
  );
  expect(container.firstChild).toMatchSnapshot();
});
