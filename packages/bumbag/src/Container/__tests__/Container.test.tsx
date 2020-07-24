import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Container } from '../Container';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Container>Hello world</Container>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Container color="primary">Hello world</Container>);
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
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Container use="p">Hello world</Container>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Container props', () => {
      const { result } = renderHook(() => Container.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Container>{(ContainerProps) => <div {...ContainerProps}>Hello world</div>}</Container>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Container.base should render correctly', () => {
    const { container } = render(
      <Container overrides={{ Container: { styles: { base: { backgroundColor: 'red' } } } }}>hello world</Container>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Container.fluid should render correctly', () => {
    const { container } = render(
      <Container isFluid overrides={{ Container: { styles: { fluid: { backgroundColor: 'red' } } } }}>
        hello world
      </Container>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Container.layout should render correctly', () => {
    const { container } = render(
      <Container isLayout overrides={{ Container: { styles: { layout: { backgroundColor: 'red' } } } }}>
        hello world
      </Container>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Container.fluidMargin should render correctly', () => {
    const { container } = render(
      <Container isFluid overrides={{ Container: { fluidMargin: 3 } }}>
        hello world
      </Container>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Container.tabletMargin should render correctly', () => {
    const { container } = render(
      <Container isLayout overrides={{ Container: { tabletMargin: 5 } }}>
        hello world
      </Container>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Container.base should render correctly', () => {
    const { container } = render(<Container>hello world</Container>, {
      theme: { Container: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Container.fluid should render correctly', () => {
    const { container } = render(<Container isFluid>hello world</Container>, {
      theme: { Container: { styles: { fluid: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Container.layout should render correctly', () => {
    const { container } = render(<Container isLayout>hello world</Container>, {
      theme: { Container: { styles: { layout: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Container.fluidMargin should render correctly', () => {
    const { container } = render(<Container isFluid>hello world</Container>, {
      theme: { Container: { fluidMargin: 3 } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Container.tabletMargin should render correctly', () => {
    const { container } = render(<Container isLayout>hello world</Container>, {
      theme: { Container: { tabletMargin: 5 } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Container>hello world</Container>, {
      theme: { Container: { defaultProps: { className: 'test' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for breakpoint', () => {
    const { container } = render(<Container>hello world</Container>, {
      theme: { Container: { defaultProps: { breakpoint: 'desktop' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for isFluid', () => {
    const { container } = render(<Container>hello world</Container>, {
      theme: { Container: { defaultProps: { isFluid: true } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for isLayout', () => {
    const { container } = render(<Container>hello world</Container>, {
      theme: { Container: { defaultProps: { isLayout: true } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
