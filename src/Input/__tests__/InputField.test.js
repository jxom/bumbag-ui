import React from 'react';
import render from '../../_utils/tests/render';
import Input from '../Input';
import InputField from '../InputField';
import 'jest-styled-components';

it('renders correctly for a basic input field', () => {
  const { container } = render(<InputField />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an input field with a placeholder', () => {
  const { container } = render(<InputField placeholder="Awesome placeholder" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a disabled input field', () => {
  const { container } = render(<InputField disabled />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an input field with a default value', () => {
  const { container } = render(<InputField defaultValue="Awesome value" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a full width input field', () => {
  const { container } = render(<InputField isFullWidth />);
  expect(container.firstChild).toMatchSnapshot();
});

describe('types', () => {
  ['number', 'tel', 'date', 'email', 'password', 'search', 'time', 'url'].forEach(type => {
    it(`renders correctly for an input field with type ${type}`, () => {
      const { container } = render(<InputField type={type} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('sizes', () => {
  ['small', 'medium', 'large'].forEach(size => {
    it(`renders correctly for an input field with size ${size}`, () => {
      const { container } = render(<InputField size={size} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('states', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(state => {
    it(`renders correctly for an input field with state ${state}`, () => {
      const { container } = render(<InputField state={state} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

it('renders correctly for an input field with a description', () => {
  const { container } = render(
    <InputField a11yId="username" label="Username" description="Required for your fannypack" />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an input field with a hint', () => {
  const { container } = render(<InputField a11yId="username" label="Username" hint="Must be awesome" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an optional input field', () => {
  const { container } = render(<InputField a11yId="username" label="Username" isOptional />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a required field', () => {
  const { container } = render(<InputField a11yId="username" label="Username" isRequired />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for addon component (before)', () => {
  const { container } = render(<InputField a11yId="username" label="Username" addonBefore={<div>test</div>} />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for addon component (after)', () => {
  const { container } = render(<InputField a11yId="username" label="Username" addonAfter={<div>test</div>} />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for addon component (vertical)', () => {
  const { container } = render(
    <InputField a11yId="username" label="Username" addonAfter={<div>test</div>} isVertical />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an input with a before component', () => {
  const { container } = render(<InputField before={<Input.Icon icon="search" />} />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an input with a after component', () => {
  const { container } = render(<InputField after={<Input.Icon icon="search" />} />);
  expect(container.firstChild).toMatchSnapshot();
});
