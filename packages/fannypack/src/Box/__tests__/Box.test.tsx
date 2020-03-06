import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../index';
import { Button } from '../../Button';
import { Link } from '../../Link';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Box />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref', () => {
    const ref = React.createRef();
    render(<Box ref={ref}>Hello world</Box>);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with aria* props', () => {
    const { container } = render(<Box aria-label="hello" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Box backgroundColor="red" color="white" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props with breakpoints', () => {
    const { container } = render(<Box backgroundColor={{ default: 'primary', mobile: 'secondary', desktop: 'red' }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props with breakpoints', () => {
    const { container } = render(<Box backgroundColor={{ default: 'primary', 'max-tablet': 'secondary' }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props with breakpoints', () => {
    const { container } = render(<Box backgroundColor={{ default: 'primary', 'min-desktop': 'secondary' }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a color CSS prop', () => {
    const { container } = render(<Box backgroundColor="white900" color="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a spacing CSS prop', () => {
    const { container } = render(<Box margin="major-4" paddingLeft="major-2" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a spacing CSS prop (marginX, paddingX)', () => {
    const { container } = render(<Box marginX="major-4" paddingX="major-2" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a spacing CSS prop (marginY, paddingY)', () => {
    const { container } = render(<Box marginY="major-4" paddingY="major-2" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a font size CSS prop', () => {
    const { container } = render(<Box fontSize="400" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a font weight CSS prop', () => {
    const { container } = render(<Box fontWeight="semibold" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for showBreakpoint with a single viewport', () => {
    const { container } = render(<Box showBreakpoint="tablet" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for showBreakpoint with a min viewport', () => {
    const { container } = render(<Box showBreakpoint="min-desktop" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for showBreakpoint with a max viewport', () => {
    const { container } = render(<Box showBreakpoint="max-tablet" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for hiddenBreakpoint with a single viewport', () => {
    const { container } = render(<Box hiddenBreakpoint="tablet" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for hiddenBreakpoint with a min viewport', () => {
    const { container } = render(<Box hiddenBreakpoint="min-desktop" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for hiddenBreakpoint with a max viewport', () => {
    const { container } = render(<Box hiddenBreakpoint="max-tablet" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for an altitude', () => {
    const { container } = render(<Box altitude="400" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for a custom border', () => {
    const { container } = render(<Box border="default" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  ['default', '0', '1', '2', '3', '4', '5', '6'].forEach(borderRadius => {
    it(`should render correctly for a borderRadius of ${borderRadius}`, () => {
      const { container } = render(<Box borderRadius={borderRadius} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should render correctly with overrides', () => {
    const { container } = render(<Box overrides={{ Box: { css: { root: { backgroundColor: 'red' } } } }} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('use', () => {
    it('should render correctly', () => {
      const { container } = render(<Box use="p">Hello world</Box>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render correctly for a Button component with props', () => {
      const { container } = render(
        // @ts-ignore
        <Box use={Button} palette="primary" kind="outlined">
          Hello world
        </Box>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with box props', () => {
      const { result } = renderHook(() => Box.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Box>{boxProps => <p {...boxProps}>Hello world</p>}</Box>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Box.root should render correctly', () => {
    const { container } = render(<Box>hello world</Box>, {
      theme: { Box: { css: { root: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Box.root should render correctly', () => {
    const { container } = render(<Box color="green">hello world</Box>, {
      theme: { Box: { css: { root: props => ({ backgroundColor: props.color }) } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly', () => {
    const { container } = render(<Box>hello world</Box>, {
      theme: { Box: { defaultProps: { className: 'test' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
