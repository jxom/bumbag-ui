import React from 'react';
import render from '../../_utils/tests/render';
import Code from '../Code';
it('renders correctly for code (inline)', () => {
  const { container } = render(<Code>test</Code>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for code (block)', () => {
  const { container } = render(<Code isBlock>test</Code>);
  expect(container.firstChild).toMatchSnapshot();
});
