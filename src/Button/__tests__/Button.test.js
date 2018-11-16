import React from 'react';
import render from '../../_utils/tests/render';
import Button from '../Button';
import Set from '../../Set';
import Group from '../../Group';
import 'jest-styled-components';

it('renders correctly for a default button', () => {
  const { container } = render(<Button>Test</Button>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a button with a custom element', () => {
  const { container } = render(
    <Button as="a" href="#">
      Test
    </Button>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a button with a palette prop set', () => {
  const { container } = render(<Button palette="primary">Test</Button>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an outlined button', () => {
  const { container } = render(<Button type="outlined">Test</Button>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a link button', () => {
  const { container } = render(<Button type="link">Test</Button>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a button that is loading', () => {
  const { container } = render(<Button isLoading>Test</Button>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a colored button that is loading', () => {
  const { container } = render(
    <Button isLoading palette="primary">
      Test
    </Button>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a link button that is loading', () => {
  const { container } = render(
    <Button isLoading type="link">
      Test
    </Button>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an outlined button that is loading', () => {
  const { container } = render(
    <Button isLoading type="outlined">
      Test
    </Button>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a disabled button', () => {
  const { container } = render(<Button disabled>Test</Button>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a list of buttons', () => {
  const { container } = render(
    <Set>
      <Button>Test</Button>
      <Button>Test 2</Button>
      <Button>Test 3</Button>
    </Set>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for grouped buttons', () => {
  const { container } = render(
    <Group>
      <Button>Test</Button>
      <Button>Test 2</Button>
      <Button>Test 3</Button>
    </Group>
  );
  expect(container.firstChild).toMatchSnapshot();
});
