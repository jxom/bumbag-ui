import React from 'react';
import render from '../../_utils/tests/render';
import CheckboxField from '../CheckboxField';
import 'jest-styled-components';

it('renders correctly for a basic checkbox field', () => {
  const { container } = render(<CheckboxField checkboxLabel="Check me" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a disabled checkbox field', () => {
  const { container } = render(<CheckboxField checkboxLabel="Check me" disabled />);
  expect(container.firstChild).toMatchSnapshot();
});

describe('states', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(state => {
    it(`renders correctly for a checkbox field with state ${state}`, () => {
      const { container } = render(<CheckboxField checkboxLabel="Check me" state={state} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

it('renders correctly for an input field with a description', () => {
  const { container } = render(
    <CheckboxField
      a11yId="username"
      label="Username"
      checkboxLabel="Check me"
      description="Required for your fannypack"
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an input field with a hint', () => {
  const { container } = render(
    <CheckboxField a11yId="username" label="Username" checkboxLabel="Check me" hint="Must be awesome" />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an optional input field', () => {
  const { container } = render(
    <CheckboxField a11yId="username" label="Username" checkboxLabel="Check me" isOptional />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a required field', () => {
  const { container } = render(
    <CheckboxField a11yId="username" label="Username" checkboxLabel="Check me" isRequired />
  );
  expect(container.firstChild).toMatchSnapshot();
});
