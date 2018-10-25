import React from 'react';
import render from '../../_utils/tests/render';
import Checkbox from '../Checkbox';
import 'jest-styled-components';

it('renders correctly for a basic checkbox', () => {
  const { container } = render(<Checkbox />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a disabled checkbox', () => {
  const { container } = render(<Checkbox disabled />);
  expect(container.firstChild).toMatchSnapshot();
});

describe('states', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(state => {
    it(`renders correctly for an checkbox with state ${state}`, () => {
      const { container } = render(<Checkbox state={state} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
