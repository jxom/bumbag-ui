import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Link } from '../Link';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Link>Hello world</Link>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Link color="primary">Hello world</Link>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Link use="p">Hello world</Link>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Link props', () => {
      const { result } = renderHook(() => Link.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Link>{(LinkProps) => <div {...LinkProps}>Hello world</div>}</Link>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Link.base should render correctly', () => {
    const { container } = render(
      <Link overrides={{ Link: { styles: { base: { backgroundColor: 'red' } } } }}>hello world</Link>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Link.hover should render correctly', () => {
    const { container } = render(
      <Link overrides={{ Link: { styles: { hover: { backgroundColor: 'red' } } } }}>hello world</Link>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Link.base should render correctly', () => {
    const { container } = render(<Link>hello world</Link>, {
      theme: { Link: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Link.hover should render correctly', () => {
    const { container } = render(<Link>hello world</Link>, {
      theme: { Link: { styles: { hover: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Link>hello world</Link>, {
      theme: { Link: { defaultProps: { className: 'test' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
