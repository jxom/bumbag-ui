import * as React from 'react';
import render from '../../_utils/tests/render';
import Column from '../../Column';
import Columns from '../Columns';
it('renders correctly for basic columns', () => {
  const { container } = render(
    <Columns>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
    </Columns>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for gapless columns', () => {
  const { container } = render(
    <Columns isGapless>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
    </Columns>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for one line columns', () => {
  const { container } = render(
    <Columns isOneLine>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
    </Columns>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when minBreakpoint is "mobile"', () => {
  const { container } = render(
    <Columns minBreakpoint="mobile">
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
    </Columns>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly when minBreakpoint is "tablet"', () => {
  const { container } = render(
    <Columns minBreakpoint="tablet">
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
    </Columns>
  );
  expect(container.firstChild).toMatchSnapshot();
});
