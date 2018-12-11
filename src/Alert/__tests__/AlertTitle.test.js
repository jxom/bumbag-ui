import React from 'react';
import render from '../../_utils/tests/render';
import AlertTitle from '../AlertTitle';

it('renders correctly', () => {
  const { container } = render(<AlertTitle>AlertTitle</AlertTitle>);
  expect(container.firstChild).toMatchSnapshot();
});
