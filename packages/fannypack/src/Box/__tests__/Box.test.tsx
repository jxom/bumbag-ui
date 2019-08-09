import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../Box';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Box />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Box backgroundColor="red" color="white" />);
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

  it('should render correctly with overrides', () => {
    const { container } = render(<Box overrides={{ base: { backgroundColor: 'red' } }} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Box use="p">Hello world</Box>);
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
  it('Box.base should render correctly', () => {
    const { container } = render(<Box>hello world</Box>, { theme: { Box: { base: { backgroundColor: 'red' } } } });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Box.base should render correctly', () => {
    const { container } = render(<Box color="green">hello world</Box>, {
      theme: { Box: { base: props => ({ backgroundColor: props.color }) } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
