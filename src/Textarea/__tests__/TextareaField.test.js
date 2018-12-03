import React from 'react';
import render from '../../_utils/tests/render';
import TextareaField from '../TextareaField';
it('renders correctly for a basic input field', () => {
  const { container } = render(<TextareaField />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an input field with a placeholder', () => {
  const { container } = render(<TextareaField placeholder="Awesome placeholder" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a disabled input field', () => {
  const { container } = render(<TextareaField disabled />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an input field with a default value', () => {
  const { container } = render(<TextareaField defaultValue="Awesome value" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a full width input field', () => {
  const { container } = render(<TextareaField isFullWidth />);
  expect(container.firstChild).toMatchSnapshot();
});

describe('sizes', () => {
  ['small', 'medium', 'large'].forEach(size => {
    it(`renders correctly for an input field with size ${size}`, () => {
      const { container } = render(<TextareaField size={size} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('states', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(state => {
    it(`renders correctly for an input field with state ${state}`, () => {
      const { container } = render(<TextareaField state={state} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

it('renders correctly for an input field with a description', () => {
  const { container } = render(
    <TextareaField a11yId="username" label="Username" description="Required for your fannypack" />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an input field with a hint', () => {
  const { container } = render(<TextareaField a11yId="username" label="Username" hint="Must be awesome" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an optional input field', () => {
  const { container } = render(<TextareaField a11yId="username" label="Username" isOptional />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a required field', () => {
  const { container } = render(<TextareaField a11yId="username" label="Username" isRequired />);
  expect(container.firstChild).toMatchSnapshot();
});
