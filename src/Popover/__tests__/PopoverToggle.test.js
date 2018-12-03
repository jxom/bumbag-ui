import React from 'react';
import render from '../../_utils/tests/render';
import PopoverToggle from '../PopoverToggle';

it('renders correctly', () => {
  const { container } = render(<PopoverToggle toggle={jest.fn()} />);
  expect(container.firstChild).toMatchSnapshot();
});
