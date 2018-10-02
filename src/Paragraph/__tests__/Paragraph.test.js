import React from 'react';
import render from '../../_utils/tests/render';
import Paragraph from '../Paragraph';
import 'jest-styled-components';

it('renders correctly for a basic paragraph', () => {
  const { container } = render(<Paragraph>test</Paragraph>);
  expect(container.firstChild).toMatchSnapshot();
});
