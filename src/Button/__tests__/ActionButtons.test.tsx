import * as React from 'react';
import render from '../../_utils/tests/render';
import ActionButtons from '../ActionButtons';

it('renders correctly for default action buttons', () => {
  const { container } = render(<ActionButtons />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a palette prop is set', () => {
  const { container } = render(<ActionButtons palette="text" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for action buttons with custom text', () => {
  const { container } = render(<ActionButtons cancelText="Close" submitText="Save" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for action buttons that is loading', () => {
  const { container } = render(<ActionButtons isLoading />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for action buttons with a type', () => {
  const { container } = render(<ActionButtons type="submit" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for action buttons with custom props', () => {
  const { container } = render(
    <ActionButtons cancelText="Reject" submitProps={{ disabled: true }} cancelProps={{ palette: 'danger' }} />
  );
  expect(container.firstChild).toMatchSnapshot();
});
