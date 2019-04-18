import * as React from 'react';
import render from '../../_utils/tests/render';
import Spinner from '../Spinner';

it('renders correctly', () => {
  const { container } = render(<Spinner />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a color prop is set', () => {
  const { container } = render(<Spinner color="red" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a size prop is set', () => {
  const { container } = render(<Spinner size="large" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a palette prop is set', () => {
  const { container } = render(<Spinner color="primary" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a value prop is set', () => {
  const { container } = render(<Spinner value={75} />);
  expect(container.firstChild).toMatchSnapshot();
});
