import * as React from 'react';
import render from '../../_utils/tests/render';
import ProgressBar from '../ProgressBar';

it('renders correctly', () => {
  const { container } = render(<ProgressBar value={50} />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a size prop is set', () => {
  const { container } = render(<ProgressBar size="large" value={50} />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a palette prop is set', () => {
  const { container } = render(<ProgressBar color="primary" value={50} />);
  expect(container.firstChild).toMatchSnapshot();
});
