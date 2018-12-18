import * as React from 'react';
import render from '../../_utils/tests/render';
import CalloutOverlay from '../CalloutOverlay';

it('renders correctly', () => {
  const { container } = render(<CalloutOverlay isVisible>Callout</CalloutOverlay>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly with a custom element', () => {
  const { container } = render(
    <CalloutOverlay isVisible>
      <label>Callout</label>
    </CalloutOverlay>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a type prop is set', () => {
  const { container } = render(
    <CalloutOverlay isVisible type="info">
      Callout
    </CalloutOverlay>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a title prop is set', () => {
  const { container } = render(
    <CalloutOverlay isVisible title="Title">
      Callout
    </CalloutOverlay>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a footer prop is set', () => {
  const { container } = render(
    <CalloutOverlay isVisible footer={<div>footer</div>}>
      Callout
    </CalloutOverlay>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a hasTint prop is set', () => {
  const { container } = render(
    <CalloutOverlay isVisible hasTint>
      Callout
    </CalloutOverlay>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when a close button is present', () => {
  const { container } = render(
    <CalloutOverlay isVisible title="Title" onClickClose={() => {}} showCloseButton>
      Callout
    </CalloutOverlay>
  );
  expect(container.firstChild).toMatchSnapshot();
});
