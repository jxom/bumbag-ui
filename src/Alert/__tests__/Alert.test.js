import React from 'react';
import render from '../../_utils/tests/render';
import Alert from '../Alert';

it('renders correctly', () => {
  const { container } = render(<Alert>Alert</Alert>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly with a custom element', () => {
  const { container } = render(
    <Alert>
      <label>Alert</label>
    </Alert>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a type prop is set', () => {
  const { container } = render(<Alert type="danger">Alert</Alert>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when hasIcon prop is true', () => {
  const { container } = render(
    <Alert type="danger" hasIcon title="Title">
      Alert
    </Alert>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when hasIcon prop is true for only a title', () => {
  const { container } = render(<Alert type="danger" hasIcon title="Title" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a title prop is set', () => {
  const { container } = render(<Alert title="Title">Alert</Alert>);
  expect(container.firstChild).toMatchSnapshot();
});
