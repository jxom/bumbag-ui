import React from 'react';
import render from '../../utils/tests/render';
import Spinner from '../Spinner';
import 'jest-styled-components';

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
  const { container } = render(<Spinner palette="primary" />);
  expect(container.firstChild).toMatchSnapshot();
});
