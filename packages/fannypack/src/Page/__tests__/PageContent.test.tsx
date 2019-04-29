import * as React from 'react';
import render from '../../_utils/tests/render';
import PageContent from '../PageContent';

it('renders correctly for a basic PageContent', () => {
  const { container } = render(<PageContent>test</PageContent>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a PageContent with breakpoint', () => {
  const { container } = render(<PageContent breakpoint="desktop">test</PageContent>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a PageContent with a fluid container', () => {
  const { container } = render(<PageContent isFluid>test</PageContent>);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a PageContent with wrapper props', () => {
  const { container } = render(<PageContent wrapperProps={{ backgroundColor: 'red' }}>test</PageContent>);
  expect(container.firstChild).toMatchSnapshot();
});
