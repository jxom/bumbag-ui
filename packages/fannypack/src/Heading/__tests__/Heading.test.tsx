import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Heading } from '../Heading';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Heading>Hello world</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Heading color="primary">Hello world</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with breakpoint', () => {
    const { container } = render(<Heading hiddenBreakpoint="desktop">Hello world</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Heading use="p">Hello world</Heading>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Heading props', () => {
      const { result } = renderHook(() => Heading.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Heading>{HeadingProps => <div {...HeadingProps}>Hello world</div>}</Heading>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Heading.base should render correctly', () => {
    const { container } = render(<Heading overrides={{ base: { backgroundColor: 'red' } }}>hello world</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h1 should render correctly', () => {
    const { container } = render(
      <Heading overrides={{ h1: { base: { backgroundColor: 'red' } } }}>hello world</Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h2 should render correctly', () => {
    const { container } = render(
      <Heading overrides={{ h2: { base: { backgroundColor: 'red' } } }}>hello world</Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h3 should render correctly', () => {
    const { container } = render(
      <Heading overrides={{ h3: { base: { backgroundColor: 'red' } } }}>hello world</Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h4 should render correctly', () => {
    const { container } = render(
      <Heading overrides={{ h4: { base: { backgroundColor: 'red' } } }}>hello world</Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h5 should render correctly', () => {
    const { container } = render(
      <Heading overrides={{ h5: { base: { backgroundColor: 'red' } } }}>hello world</Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h6 should render correctly', () => {
    const { container } = render(
      <Heading overrides={{ h6: { base: { backgroundColor: 'red' } } }}>hello world</Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.subHeading should render correctly', () => {
    const { container } = render(
      <Heading isSubHeading overrides={{ subHeading: { base: { backgroundColor: 'red' } } }}>
        hello world
      </Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Heading.base should render correctly', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { base: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h1.base should render correctly', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { h1: { base: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h2.base should render correctly', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { h2: { base: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h3.base should render correctly', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { h3: { base: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h4.base should render correctly', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { h4: { base: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h5.base should render correctly', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { h5: { base: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h6.base should render correctly', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { h6: { base: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h6.base should render correctly', () => {
    const { container } = render(<Heading isSubHeading>hello world</Heading>, {
      theme: { Heading: { subHeading: { base: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
