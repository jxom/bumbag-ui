import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../../Box';
import { Card } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Card>Hello world</Card>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Card color="primary">Hello world</Card>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for kind border', () => {
    const { container } = render(<Card kind="border">Hello world</Card>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for kind shadow', () => {
    const { container } = render(<Card kind="shadow">Hello world</Card>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for a title', () => {
    const { container } = render(<Card title="This is a title">Hello world</Card>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for a footer', () => {
    const { container } = render(<Card footer={<Box>This is a footer</Box>}>Hello world</Card>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for headerAddon', () => {
    const { container } = render(<Card headerAddon={<Box>This is a footer</Box>}>Hello world</Card>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for standalone', () => {
    const { container } = render(
      <Card standalone>
        <Card.Header>
          <Card.Title>This is a title</Card.Title>
        </Card.Header>
        <Card.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
          ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum
          consectetur lectus augue sit amet justo.
        </Card.Content>
        <Card.Footer>This is a footer</Card.Footer>
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Card use="div">Hello world</Card>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Card props', () => {
      const { result } = renderHook(() => Card.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Card>{CardProps => <div {...CardProps}>Hello world</div>}</Card>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Card.base should render correctly', () => {
    const { container } = render(<Card overrides={{ Card: { base: { backgroundColor: 'red' } } }}>hello world</Card>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Card.Content.base should render correctly', () => {
    const { container } = render(
      <Card overrides={{ Card: { Content: { base: { backgroundColor: 'red' } } } }}>hello world</Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Card.Header.base should render correctly', () => {
    const { container } = render(
      <Card title="This is a title" overrides={{ Card: { Header: { base: { backgroundColor: 'red' } } } }}>
        hello world
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Card.Title.base should render correctly', () => {
    const { container } = render(
      <Card title="This is a title" overrides={{ Card: { Title: { base: { backgroundColor: 'red' } } } }}>
        hello world
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Card.Footer.base should render correctly', () => {
    const { container } = render(
      <Card footer={<Box>This is a footer</Box>} overrides={{ Card: { Footer: { base: { backgroundColor: 'red' } } } }}>
        hello world
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Card.base should render correctly', () => {
    const { container } = render(<Card>hello world</Card>, {
      theme: { Card: { base: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Card.Content.base should render correctly', () => {
    const { container } = render(<Card>hello world</Card>, {
      theme: { Card: { Content: { base: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Card.Header.base should render correctly', () => {
    const { container } = render(<Card title="This is a title">hello world</Card>, {
      theme: { Card: { Header: { base: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Card.Title.base should render correctly', () => {
    const { container } = render(<Card title="This is a title">hello world</Card>, {
      theme: { Card: { Title: { base: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Card.Footer.base should render correctly', () => {
    const { container } = render(<Card footer={<Box>This is a footer</Box>}>hello world</Card>, {
      theme: { Card: { Footer: { base: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Card>hello world</Card>, {
      theme: { Card: { defaultProps: { className: 'test' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for kind', () => {
    const { container } = render(<Card>hello world</Card>, {
      theme: { Card: { defaultProps: { kind: 'border' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for title', () => {
    const { container } = render(<Card>hello world</Card>, {
      theme: { Card: { defaultProps: { title: 'This is a title' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
