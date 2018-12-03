import React from 'react';
import render from '../../_utils/tests/render';
import Blockquote from '../Blockquote';
it('renders correctly for a basic blockquote', () => {
  const { container } = render(<Blockquote>test</Blockquote>);
  expect(container.firstChild).toMatchSnapshot();
});
