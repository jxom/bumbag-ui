import React from 'react';
import render from '../../_utils/tests/render';
import Buttons from '../Buttons';
import Button from '../../Button';
import 'jest-styled-components';

it('renders correctly', () => {
  const { container } = render(
    <Buttons>
      <Button>Test</Button>
      <Button>Test 2</Button>
      <Button>Test 3</Button>
    </Buttons>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for grouped buttons', () => {
  const { container } = render(
    <Buttons isGrouped>
      <Button>Test</Button>
      <Button>Test 2</Button>
      <Button>Test 3</Button>
    </Buttons>
  );
  expect(container.firstChild).toMatchSnapshot();
});
