import * as React from 'react';
import render from '../../_utils/tests/render';
import FieldWrapper from '../FieldWrapper';
// @ts-ignore
import Input from '../../Input';

it('renders correctly for a basic field', () => {
  const { container } = render(
    <FieldWrapper a11yId="username" label="Username">
      <Input />
    </FieldWrapper>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a field with a description', () => {
  const { container } = render(
    <FieldWrapper a11yId="username" label="Username" description="Required for your fannypack">
      <Input />
    </FieldWrapper>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a field with a hint', () => {
  const { container } = render(
    <FieldWrapper a11yId="username" label="Username" hint="Must be awesome">
      <Input />
    </FieldWrapper>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an optional field', () => {
  const { container } = render(
    <FieldWrapper a11yId="username" label="Username" isOptional>
      <Input />
    </FieldWrapper>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a required field', () => {
  const { container } = render(
    <FieldWrapper a11yId="username" label="Username" isRequired>
      <Input />
    </FieldWrapper>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a full width field', () => {
  const { container } = render(
    <FieldWrapper a11yId="username" label="Username" isFullWidth>
      <Input />
    </FieldWrapper>
  );
  expect(container.firstChild).toMatchSnapshot();
});

describe('states', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(state => {
    it(`renders correctly for an input with state ${state}`, () => {
      const { container } = render(
        <FieldWrapper a11yId="username" label="Username" validationText="This is an invalid name" state={state}>
          <Input defaultValue="Jake" />
        </FieldWrapper>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
