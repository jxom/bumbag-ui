import React from 'react';
import render from '../../_utils/tests/render';
import PopoverShow from '../PopoverShow';

it('renders correctly', () => {
  const { container } = render(<PopoverShow show={jest.fn()} />);
  expect(container.firstChild).toMatchSnapshot();
});
