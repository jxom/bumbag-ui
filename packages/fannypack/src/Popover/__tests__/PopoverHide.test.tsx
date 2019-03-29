import * as React from 'react';
import render from '../../_utils/tests/render';
import PopoverHide from '../PopoverHide';

it('renders correctly', () => {
  const { container } = render(<PopoverHide hide={jest.fn()}>Hide</PopoverHide>);
  expect(container.firstChild).toMatchSnapshot();
});
