import React from 'react';
import render from '../../_utils/tests/render';
import Textarea from '../Textarea';
it('renders correctly for a basic textarea', () => {
  const { container } = render(<Textarea />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a textarea with a placeholder', () => {
  const { container } = render(<Textarea placeholder="Awesome placeholder" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a disabled textarea', () => {
  const { container } = render(<Textarea disabled />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an input with a default value', () => {
  const { container } = render(<Textarea defaultValue="Awesome value" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a full width textarea', () => {
  const { container } = render(<Textarea isFullWidth />);
  expect(container.firstChild).toMatchSnapshot();
});

describe('sizes', () => {
  ['small', 'medium', 'large'].forEach(size => {
    it(`renders correctly for a textarea with size ${size}`, () => {
      const { container } = render(<Textarea size={size} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('states', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(state => {
    it(`renders correctly for a textarea with state ${state}`, () => {
      const { container } = render(<Textarea state={state} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
