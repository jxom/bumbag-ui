import React from 'react';
import render from '../../_utils/tests/render';
import Switch from '../Switch';
import 'jest-styled-components';

it('renders correctly for a basic switch', () => {
  const { container } = render(<Switch label="Test" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a disabled switch', () => {
  const { container } = render(<Switch disabled label="Test" />);
  expect(container.firstChild).toMatchSnapshot();
});

describe('colors', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(palette => {
    it(`renders correctly for an switch with color ${palette}`, () => {
      const { container } = render(<Switch label="Test" palette={palette} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('states', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(state => {
    it(`renders correctly for an switch with state ${state}`, () => {
      const { container } = render(<Switch label="Test" state={state} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
