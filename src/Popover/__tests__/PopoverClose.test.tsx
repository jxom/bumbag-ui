import * as React from 'react';
import render from '../../_utils/tests/render';
import PopoverClose from '../PopoverClose';

it('renders correctly', () => {
  const { container } = render(<PopoverClose hide={jest.fn()}>Close</PopoverClose>);
  expect(container.firstChild).toMatchSnapshot();
});
