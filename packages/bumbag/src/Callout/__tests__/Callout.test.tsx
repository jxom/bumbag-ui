import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Callout } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Callout>Hello world</Callout>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Callout color="primary">Hello world</Callout>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a tint', () => {
    const { container } = render(<Callout hasTint>Hello world</Callout>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a title', () => {
    const { container } = render(<Callout title="This is a callout">Hello world</Callout>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a close button', () => {
    const { container } = render(<Callout showCloseButton>Hello world</Callout>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a close button and title', () => {
    const { container } = render(
      <Callout showCloseButton title="This is a callout">
        Hello world
      </Callout>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('type', () => {
    ['info', 'success', 'danger', 'warning'].forEach((type) => {
      it(`should render correctly with type ${type}`, () => {
        const { container } = render(
          <Callout type={type as any} title="This is a callout">
            Hello world
          </Callout>
        );
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  it('should render correctly with a footer', () => {
    const { container } = render(
      <Callout showCloseButton title="This is a callout" footer="This is a footer">
        Hello world
      </Callout>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with closeButtonProps', () => {
    const { container } = render(
      <Callout showCloseButton closeButtonProps={{ color: 'red' }}>
        Hello world
      </Callout>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with iconProps', () => {
    const { container } = render(
      <Callout showCloseButton iconProps={{ icon: 'danger' }}>
        Hello world
      </Callout>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for standalone', () => {
    const { container } = render(
      <Callout title="Example callout" width="600px" standalone>
        <Callout.Icon />
        <div>
          <Callout.Header>
            <Callout.Title>Example callout</Callout.Title>
          </Callout.Header>
          <Callout.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
            ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum
            consectetur lectus augue sit amet justo.
          </Callout.Content>
          <Callout.Footer>Test</Callout.Footer>
        </div>
      </Callout>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Callout use="div">Hello world</Callout>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Callout props', () => {
      const { result } = renderHook(() => Callout.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Callout>{(CalloutProps) => <div {...CalloutProps}>Hello world</div>}</Callout>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Callout.base should render correctly', () => {
    const { container } = render(
      <Callout
        overrides={{
          Callout: { styles: { base: { backgroundColor: 'red' } } },
        }}
      >
        hello world
      </Callout>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Callout.Content.base should render correctly', () => {
    const { container } = render(
      <Callout
        overrides={{
          Callout: {
            Content: { styles: { base: { backgroundColor: 'red' } } },
          },
        }}
      >
        hello world
      </Callout>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Callout.Header.base should render correctly', () => {
    const { container } = render(
      <Callout
        title="This is a title"
        overrides={{
          Callout: { Header: { styles: { base: { backgroundColor: 'red' } } } },
        }}
      >
        hello world
      </Callout>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Callout.Title.base should render correctly', () => {
    const { container } = render(
      <Callout
        title="This is a title"
        overrides={{
          Callout: { Title: { styles: { base: { backgroundColor: 'red' } } } },
        }}
      >
        hello world
      </Callout>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Callout.Footer.base should render correctly', () => {
    const { container } = render(
      <Callout
        footer="This is a footer"
        overrides={{
          Callout: { Footer: { styles: { base: { backgroundColor: 'red' } } } },
        }}
      >
        hello world
      </Callout>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Callout.IconWrapper.base should render correctly', () => {
    const { container } = render(
      <Callout
        overrides={{
          Callout: {
            IconWrapper: { styles: { base: { backgroundColor: 'red' } } },
          },
        }}
      >
        hello world
      </Callout>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Callout.Close.base should render correctly', () => {
    const { container } = render(
      <Callout
        showCloseButton
        overrides={{
          Callout: { Close: { styles: { base: { backgroundColor: 'red' } } } },
        }}
      >
        hello world
      </Callout>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Callout.base should render correctly', () => {
    const { container } = render(<Callout>hello world</Callout>, {
      theme: { Callout: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Callout.Content.base should render correctly', () => {
    const { container } = render(<Callout>hello world</Callout>, {
      theme: {
        Callout: { Content: { styles: { base: { backgroundColor: 'red' } } } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Callout.Header.base should render correctly', () => {
    const { container } = render(<Callout title="This is a title">hello world</Callout>, {
      theme: {
        Callout: { Header: { styles: { base: { backgroundColor: 'red' } } } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Callout.Title.base should render correctly', () => {
    const { container } = render(<Callout title="This is a title">hello world</Callout>, {
      theme: {
        Callout: { Title: { styles: { base: { backgroundColor: 'red' } } } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Callout.Footer.base should render correctly', () => {
    const { container } = render(<Callout footer="This is a footer">hello world</Callout>, {
      theme: {
        Callout: { Footer: { styles: { base: { backgroundColor: 'red' } } } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Callout.IconWrapper.base should render correctly', () => {
    const { container } = render(<Callout>hello world</Callout>, {
      theme: {
        Callout: {
          IconWrapper: { styles: { base: { backgroundColor: 'red' } } },
        },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Callout.Close.base should render correctly', () => {
    const { container } = render(<Callout showCloseButton>hello world</Callout>, {
      theme: {
        Callout: { Close: { styles: { base: { backgroundColor: 'red' } } } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Callout>hello world</Callout>, {
      theme: {
        Callout: { defaultProps: { className: 'test', color: 'primary' } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
