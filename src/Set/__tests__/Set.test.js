import React from 'react';
import render from '../../_utils/tests/render';
import Set from '../Set';
it('renders correctly for a basic set', () => {
  const { container } = render(
    <Set>
      <div>test</div>
      <div>test</div>
    </Set>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a set with custom spacing', () => {
  const { container } = render(
    <Set spacing="large">
      <div>test</div>
      <div>test</div>
    </Set>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a vertical set', () => {
  const { container } = render(
    <Set isVertical>
      <div>test</div>
      <div>test</div>
    </Set>
  );
  expect(container.firstChild).toMatchSnapshot();
});
