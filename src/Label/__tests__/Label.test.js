import React from 'react';
import render from '../../_utils/tests/render';
import Label from '../Label';
import 'jest-styled-components';

it('renders correctly for a basic label', () => {
  const { container } = render(<Label>Hello world</Label>);
  expect(container.firstChild).toMatchSnapshot();
});
