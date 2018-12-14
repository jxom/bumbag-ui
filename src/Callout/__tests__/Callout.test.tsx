import * as React from 'react';
import render from '../../_utils/tests/render';
import Callout from '../Callout';

it('renders correctly', () => {
  const { container } = render(<Callout>Callout</Callout>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly with a custom element', () => {
  const { container } = render(
    <Callout>
      <label>Callout</label>
    </Callout>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a type prop is set', () => {
  const { container } = render(<Callout type="info">Callout</Callout>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a title prop is set', () => {
  const { container } = render(<Callout title="Title">Callout</Callout>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a footer prop is set', () => {
  const { container } = render(<Callout footer={<div>footer</div>}>Callout</Callout>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a hasTint prop is set', () => {
  const { container } = render(<Callout hasTint>Callout</Callout>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a close button is present', () => {
  const { container } = render(
    <Callout title="Title" onClickClose={() => {}} showCloseButton>
      Callout
    </Callout>
  );
  expect(container.firstChild).toMatchSnapshot();
});
