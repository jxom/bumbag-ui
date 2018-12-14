import * as React from 'react';
import render from '../../_utils/tests/render';
import SwitchField from '../SwitchField';

it('renders correctly for a basic switch field', () => {
  const { container } = render(<SwitchField />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a disabled switch field', () => {
  const { container } = render(<SwitchField disabled />);
  expect(container.firstChild).toMatchSnapshot();
});

describe('colors', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(palette => {
    it(`renders correctly for a switch field with color ${palette}`, () => {
      const { container } = render(<SwitchField palette={palette} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('states', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(state => {
    it(`renders correctly for a switch field with state ${state}`, () => {
      const { container } = render(<SwitchField state={state} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
