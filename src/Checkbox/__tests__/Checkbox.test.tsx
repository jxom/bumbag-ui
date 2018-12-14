import * as React from 'react';
import render from '../../_utils/tests/render';
import Checkbox from '../Checkbox';

it('renders correctly for a basic checkbox', () => {
  const { container } = render(<Checkbox label="Hello" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a disabled checkbox', () => {
  const { container } = render(<Checkbox disabled label="Hello" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an indeterminate checkbox', () => {
  const { container } = render(<Checkbox defaultChecked indeterminate label="Hello" />);
  expect(container.firstChild).toMatchSnapshot();
});

describe('states', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(state => {
    it(`renders correctly for an checkbox with state ${state}`, () => {
      const { container } = render(<Checkbox label="Hello" state={state} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
