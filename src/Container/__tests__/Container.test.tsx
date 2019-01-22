import * as React from 'react';
import render from '../../_utils/tests/render';
import Container from '../Container';

it('renders correctly for a basic container', () => {
  const { container } = render(<Container>test</Container>);
  expect(container.firstChild).toMatchSnapshot();
});

describe('alignment', () => {
  it('renders correctly for a left aligned container', () => {
    const { container } = render(<Container align="left">test</Container>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for a center aligned container', () => {
    const { container } = render(<Container align="center">test</Container>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for a right aligned container', () => {
    const { container } = render(<Container align="right">test</Container>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('fixed width', () => {
  it('renders correctly when breakpoint is fullHD', () => {
    const { container } = render(<Container breakpoint="fullHD">test</Container>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly when breakpoint is widescreen', () => {
    const { container } = render(<Container breakpoint="widescreen">test</Container>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly when breakpoint is desktop', () => {
    const { container } = render(<Container breakpoint="desktop">test</Container>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly when breakpoint is tablet', () => {
    const { container } = render(<Container breakpoint="tablet">test</Container>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly when breakpoint is mobile', () => {
    const { container } = render(<Container breakpoint="mobile">test</Container>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('fluid', () => {
  it('renders correctly for a fluid container', () => {
    const { container } = render(<Container isFluid>test</Container>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('layout', () => {
  it('renders correctly for a layout container', () => {
    const { container } = render(<Container isLayout>test</Container>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
