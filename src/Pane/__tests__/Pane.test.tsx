import * as React from 'react';
import render from '../../_utils/tests/render';
import Pane from '../Pane';

it('renders correctly for a basic pane', () => {
  const { container } = render(<Pane>test</Pane>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a pane with a border', () => {
  const { container } = render(<Pane border>test</Pane>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a pane with a shadow', () => {
  const { container } = render(<Pane border="shadow">test</Pane>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a full width pane', () => {
  const { container } = render(<Pane isFullWidth>test</Pane>);
  expect(container.firstChild).toMatchSnapshot();
});
