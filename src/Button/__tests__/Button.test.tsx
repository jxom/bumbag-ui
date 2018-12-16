import * as React from 'react';
import render from '../../_utils/tests/render';
import Button from '../Button';
import Set from '../../Set';
// @ts-ignore
import Group from '../../Group';

it('renders correctly for a default button', () => {
  const { container } = render(<Button>Test</Button>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a button with a custom element', () => {
  const { container } = render(
    <Button use="a" href="#">
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
  const { container } = render(<Button kind="outlined">Test</Button>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a link button', () => {
  const { container } = render(<Button kind="link">Test</Button>);
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
    <Button isLoading kind="link">
      Test
    </Button>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an outlined button that is loading', () => {
  const { container } = render(
    <Button isLoading kind="outlined">
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

it('renders correctly for a button with a left icon', () => {
  const { container } = render(<Button iconBefore="clipboard">Copy</Button>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a button with a right icon', () => {
  const { container } = render(<Button iconAfter="arrow-right">Continue</Button>);
  expect(container.firstChild).toMatchSnapshot();
});
