import React from 'react';
import render from '../../_utils/tests/render';
import Input from '../Input';
import 'jest-styled-components';

it('renders correctly for a basic input', () => {
  const { container } = render(<Input />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an input with a placeholder', () => {
  const { container } = render(<Input placeholder="Awesome placeholder" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a disabled input', () => {
  const { container } = render(<Input disabled />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an input with a default value', () => {
  const { container } = render(<Input defaultValue="Awesome value" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a full width input', () => {
  const { container } = render(<Input isFullWidth />);
  expect(container.firstChild).toMatchSnapshot();
});

describe('types', () => {
  ['number', 'tel', 'date', 'email', 'password', 'search', 'time', 'url'].forEach(type => {
    it(`renders correctly for an input with type ${type}`, () => {
      const { container } = render(<Input type={type} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('sizes', () => {
  ['small', 'medium', 'large'].forEach(size => {
    it(`renders correctly for an input with size ${size}`, () => {
      const { container } = render(<Input size={size} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('states', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(state => {
    it(`renders correctly for an input with state ${state}`, () => {
      const { container } = render(<Input state={state} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
