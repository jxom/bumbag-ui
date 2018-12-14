import * as React from 'react';
import render from '../../_utils/tests/render';
import Radio from '../Radio';

it('renders correctly for a basic radio', () => {
  const { container } = render(<Radio label="Test label" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a disabled radio', () => {
  const { container } = render(<Radio disabled label="Test label" />);
  expect(container.firstChild).toMatchSnapshot();
});

describe('states', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(state => {
    it(`renders correctly for an radio with state ${state}`, () => {
      const { container } = render(<Radio state={state} label="Test label" />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
