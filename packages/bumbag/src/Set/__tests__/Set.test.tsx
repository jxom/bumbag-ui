import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../../Box';
import { Set } from '../Set';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Set>
        <Box>hello</Box>
        <Box>world</Box>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Set color="primary">
        <Box>hello</Box>
        <Box>world</Box>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for a vertical set', () => {
    const { container } = render(
      <Set orientation="vertical">
        <Box>hello</Box>
        <Box>world</Box>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for a vertical filled set', () => {
    const { container } = render(
      <Set orientation="vertical" isFilled>
        <Box>hello</Box>
        <Box>world</Box>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for a vertical breakpoint', () => {
    const { container } = render(
      <Set verticalBelow="desktop">
        <Box>hello</Box>
        <Box>world</Box>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  ['left', 'right', 'center'].forEach((alignX) => {
    it(`should render correctly for an alignX of ${alignX}`, () => {
      const { container } = render(
        // @ts-ignore
        <Set alignX={alignX}>
          <Box>hello</Box>
          <Box>world</Box>
        </Set>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  ['top', 'bottom', 'center'].forEach((alignY) => {
    it(`should render correctly for an alignY of ${alignY}`, () => {
      const { container } = render(
        // @ts-ignore
        <Set alignY={alignY}>
          <Box>hello</Box>
          <Box>world</Box>
        </Set>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Set use="div">
          <Box>hello</Box>
          <Box>world</Box>
        </Set>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Set props', () => {
      const { result } = renderHook(() => Set.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Set>
          {(SetProps) => (
            <div {...SetProps}>
              <Box>hello</Box>
              <Box>world</Box>
            </div>
          )}
        </Set>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Set.base should render correctly', () => {
    const { container } = render(
      <Set overrides={{ Set: { styles: { base: { backgroundColor: 'red' } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Set.child.base should render correctly', () => {
    const { container } = render(
      <Set overrides={{ Set: { styles: { child: { base: { backgroundColor: 'red' } } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Set.vertical should render correctly', () => {
    const { container } = render(
      <Set orientation="vertical" overrides={{ Set: { styles: { vertical: { backgroundColor: 'red' } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Set.horizontal should render correctly', () => {
    const { container } = render(
      <Set overrides={{ Set: { styles: { horizontal: { backgroundColor: 'red' } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Set.child.vertical should render correctly', () => {
    const { container } = render(
      <Set orientation="vertical" overrides={{ Set: { styles: { child: { vertical: { backgroundColor: 'red' } } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Set.child.horizontal should render correctly', () => {
    const { container } = render(
      <Set overrides={{ Set: { styles: { child: { horizontal: { backgroundColor: 'red' } } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Set.base should render correctly', () => {
    const { container } = render(
      <Set>
        <Box>hello</Box>
        <Box>world</Box>
      </Set>,
      {
        theme: { Set: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Set.child.base should render correctly', () => {
    const { container } = render(
      <Set>
        <Box>hello</Box>
        <Box>world</Box>
      </Set>,
      {
        theme: { Set: { styles: { child: { base: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Set.vertical should render correctly', () => {
    const { container } = render(
      <Set>
        <Box>hello</Box>
        <Box>world</Box>
      </Set>,
      {
        theme: { Set: { styles: { vertical: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Set.horizontal should render correctly', () => {
    const { container } = render(
      <Set>
        <Box>hello</Box>
        <Box>world</Box>
      </Set>,
      {
        theme: { Set: { styles: { horizontal: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Set.child.vertical should render correctly', () => {
    const { container } = render(
      <Set>
        <Box>hello</Box>
        <Box>world</Box>
      </Set>,
      {
        theme: { Set: { styles: { child: { vertical: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Set.child.horizontal should render correctly', () => {
    const { container } = render(
      <Set>
        <Box>hello</Box>
        <Box>world</Box>
      </Set>,
      {
        theme: { Set: { styles: { child: { horizontal: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <Set>
        <Box>hello</Box>
        <Box>world</Box>
      </Set>,
      {
        theme: { Set: { defaultProps: { className: 'test' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for orientation="vertical"', () => {
    const { container } = render(
      <Set>
        <Box>hello</Box>
        <Box>world</Box>
      </Set>,
      {
        theme: { Set: { defaultProps: { orientation: 'vertical' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for isFilled', () => {
    const { container } = render(
      <Set>
        <Box>hello</Box>
        <Box>world</Box>
      </Set>,
      {
        theme: { Set: { defaultProps: { isFilled: true } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
