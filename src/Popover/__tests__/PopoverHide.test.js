import React from 'react';
import render from '../../_utils/tests/render';
import PopoverHide from '../PopoverHide';

it('renders correctly', () => {
  const { container } = render(<PopoverHide hide={jest.fn()} />);
  expect(container.firstChild).toMatchSnapshot();
});
