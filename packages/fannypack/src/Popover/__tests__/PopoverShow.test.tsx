import * as React from 'react';
import render from '../../_utils/tests/render';
import PopoverShow from '../PopoverShow';

it('renders correctly', () => {
  const { container } = render(<PopoverShow show={jest.fn()}>Show</PopoverShow>);
  expect(container.firstChild).toMatchSnapshot();
});
