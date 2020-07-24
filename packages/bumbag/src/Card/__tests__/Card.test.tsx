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

  it('should render correctly for variant border', () => {
    const { container } = render(<Card variant="border">Hello world</Card>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for variant shadow', () => {
    const { container } = render(<Card variant="shadow">Hello world</Card>);
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
      const { container } = render(<Card>{(CardProps) => <div {...CardProps}>Hello world</div>}</Card>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Card.styles.base should render correctly', () => {
    const { container } = render(
      <Card overrides={{ Card: { styles: { base: { backgroundColor: 'red' } } } }}>hello world</Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Card.Content.styles.base should render correctly', () => {
    const { container } = render(
      <Card overrides={{ Card: { Content: { styles: { base: { backgroundColor: 'red' } } } } }}>hello world</Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Card.Header.styles.base should render correctly', () => {
    const { container } = render(
      <Card title="This is a title" overrides={{ Card: { Header: { styles: { base: { backgroundColor: 'red' } } } } }}>
        hello world
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Card.Title.styles.base should render correctly', () => {
    const { container } = render(
      <Card title="This is a title" overrides={{ Card: { Title: { styles: { base: { backgroundColor: 'red' } } } } }}>
        hello world
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Card.Footer.styles.base should render correctly', () => {
    const { container } = render(
      <Card
        footer={<Box>This is a footer</Box>}
        overrides={{ Card: { Footer: { styles: { base: { backgroundColor: 'red' } } } } }}
      >
        hello world
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Card.styles.base should render correctly', () => {
    const { container } = render(<Card>hello world</Card>, {
      theme: { Card: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Card.Content.styles.base should render correctly', () => {
    const { container } = render(<Card>hello world</Card>, {
      theme: { Card: { Content: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Card.Header.styles.base should render correctly', () => {
    const { container } = render(<Card title="This is a title">hello world</Card>, {
      theme: { Card: { Header: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Card.Title.styles.base should render correctly', () => {
    const { container } = render(<Card title="This is a title">hello world</Card>, {
      theme: { Card: { Title: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Card.Footer.styles.base should render correctly', () => {
    const { container } = render(<Card footer={<Box>This is a footer</Box>}>hello world</Card>, {
      theme: { Card: { Footer: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Card>hello world</Card>, {
      theme: { Card: { defaultProps: { className: 'test' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for variant', () => {
    const { container } = render(<Card>hello world</Card>, {
      theme: { Card: { defaultProps: { variant: 'border' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for title', () => {
    const { container } = render(<Card>hello world</Card>, {
      theme: { Card: { defaultProps: { title: 'This is a title' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
