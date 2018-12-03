import React from 'react';
import render from '../../_utils/tests/render';
import Link from '../Link';
it('renders correctly for a basic link', () => {
  const { container } = render(<Link>test</Link>);
  expect(container.firstChild).toMatchSnapshot();
});
