import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Badge } from '../Badge';
import render from '../../utils/_tests/render';
import { Size } from '../../types';
import { Button } from '../../Button';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Badge>Hello world</Badge>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Badge color="primary">Hello world</Badge>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with no content', () => {
    const { container } = render(<Badge />);
    expect(container.firstChild).toMatchSnapshot();
  });

  ['primary', 'secondary', 'success', 'warning', 'danger'].forEach((palette) => {
    it(`should render correctly for palette ${palette}`, () => {
      const { container } = render(<Badge palette={palette} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  ['default', 'medium', 'large'].forEach((size) => {
    it(`should render correctly for size ${size}`, () => {
      const { container } = render(<Badge size={size as Size} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should render correctly for isAttached', () => {
    const { container } = render(
      <Button>
        Test
        <Badge isAttached />
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Badge use="p">Hello world</Badge>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Badge props', () => {
      const { result } = renderHook(() => Badge.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Badge>{(BadgeProps) => <div {...BadgeProps}>Hello world</div>}</Badge>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Badge.base should render correctly', () => {
    const { container } = render(
      <Badge overrides={{ Badge: { styles: { base: { backgroundColor: 'red' } } } }}>hello world</Badge>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Badge.attached should render correctly', () => {
    const { container } = render(
      <Badge isAttached overrides={{ Badge: { styles: { attached: { backgroundColor: 'red' } } } }}>
        hello world
      </Badge>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Badge.sizes.default should render correctly', () => {
    const { container } = render(
      <Badge overrides={{ Badge: { styles: { sizes: { default: { backgroundColor: 'red' } } } } }}>hello world</Badge>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Badge.sizes.medium should render correctly', () => {
    const { container } = render(
      <Badge size="medium" overrides={{ Badge: { styles: { sizes: { medium: { backgroundColor: 'red' } } } } }}>
        hello world
      </Badge>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Badge.sizes.large should render correctly', () => {
    const { container } = render(
      <Badge size="large" overrides={{ Badge: { styles: { sizes: { large: { backgroundColor: 'red' } } } } }}>
        hello world
      </Badge>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Badge.base should render correctly', () => {
    const { container } = render(<Badge>hello world</Badge>, {
      theme: { Badge: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Badge.attached should render correctly', () => {
    const { container } = render(<Badge isAttached>hello world</Badge>, {
      theme: { Badge: { styles: { attached: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Badge.sizes.default should render correctly', () => {
    const { container } = render(<Badge>hello world</Badge>, {
      theme: { Badge: { styles: { sizes: { default: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Badge.sizes.medium should render correctly', () => {
    const { container } = render(<Badge size="medium">hello world</Badge>, {
      theme: { Badge: { styles: { sizes: { medium: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Badge.sizes.large should render correctly', () => {
    const { container } = render(<Badge size="large">hello world</Badge>, {
      theme: { Badge: { styles: { sizes: { large: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Badge>hello world</Badge>, {
      theme: { Badge: { defaultProps: { className: 'test', color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
