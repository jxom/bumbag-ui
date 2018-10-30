import React from 'react';
import render from '../../_utils/tests/render';
import Field from '../Field';
import Input from '../../Input';
import 'jest-styled-components';

it('renders correctly for a basic field', () => {
  const { container } = render(
    <Field a11yId="username" label="Username">
      <Input />
    </Field>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a field with a description', () => {
  const { container } = render(
    <Field a11yId="username" label="Username" description="Required for your fannypack">
      <Input />
    </Field>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a field with a hint', () => {
  const { container } = render(
    <Field a11yId="username" label="Username" hint="Must be awesome">
      <Input />
    </Field>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an optional field', () => {
  const { container } = render(
    <Field a11yId="username" label="Username" isOptional>
      <Input />
    </Field>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a required field', () => {
  const { container } = render(
    <Field a11yId="username" label="Username" isRequired>
      <Input />
    </Field>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a full width field', () => {
  const { container } = render(
    <Field a11yId="username" label="Username" isFullWidth>
      <Input />
    </Field>
  );
  expect(container.firstChild).toMatchSnapshot();
});

describe('states', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(state => {
    it(`renders correctly for an input with state ${state}`, () => {
      const { container } = render(
        <Field a11yId="username" label="Username" validationText="This is an invalid name" state={state}>
          <Input defaultValue="Jake" />
        </Field>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
