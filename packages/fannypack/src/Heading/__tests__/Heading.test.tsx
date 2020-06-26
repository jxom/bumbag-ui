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
      const { container } = render(<Heading>{(HeadingProps) => <div {...HeadingProps}>Hello world</div>}</Heading>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Heading.root should render correctly', () => {
    const { container } = render(
      <Heading overrides={{ Heading: { css: { root: { backgroundColor: 'red' } } } }}>hello world</Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h1 should render correctly', () => {
    const { container } = render(
      <Heading overrides={{ Heading: { h1: { css: { root: { backgroundColor: 'red' } } } } }}>hello world</Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h2 should render correctly', () => {
    const { container } = render(
      <Heading overrides={{ Heading: { h2: { css: { root: { backgroundColor: 'red' } } } } }}>hello world</Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h3 should render correctly', () => {
    const { container } = render(
      <Heading overrides={{ Heading: { h3: { css: { root: { backgroundColor: 'red' } } } } }}>hello world</Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h4 should render correctly', () => {
    const { container } = render(
      <Heading overrides={{ Heading: { h4: { css: { root: { backgroundColor: 'red' } } } } }}>hello world</Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h5 should render correctly', () => {
    const { container } = render(
      <Heading overrides={{ Heading: { h5: { css: { root: { backgroundColor: 'red' } } } } }}>hello world</Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h6 should render correctly', () => {
    const { container } = render(
      <Heading overrides={{ Heading: { h6: { css: { root: { backgroundColor: 'red' } } } } }}>hello world</Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.subHeading should render correctly', () => {
    const { container } = render(
      <Heading isSubHeading overrides={{ Heading: { subHeading: { css: { root: { backgroundColor: 'red' } } } } }}>
        hello world
      </Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Heading.root should render correctly', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { css: { root: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h1.root should render correctly', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { h1: { css: { root: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h2.root should render correctly', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { h2: { css: { root: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h3.root should render correctly', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { h3: { css: { root: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h4.root should render correctly', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { h4: { css: { root: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h5.root should render correctly', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { h5: { css: { root: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h6.root should render correctly', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { h6: { css: { root: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.h6.root should render correctly', () => {
    const { container } = render(<Heading isSubHeading>hello world</Heading>, {
      theme: { Heading: { subHeading: { css: { root: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { defaultProps: { className: 'test', isSubHeading: true } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
